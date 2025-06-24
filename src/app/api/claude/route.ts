import { NextRequest, NextResponse } from 'next/server';
import { Anthropic } from '@anthropic-ai/sdk';

// Initialize Anthropic client
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { query } = await request.json();

    if (!query) {
      return NextResponse.json(
        { error: 'Query is required' },
        { status: 400 }
      );
    }

    console.log('Processing query:', query);

    // Create a message with web search tool enabled
    const response = await anthropic.messages.create({
      model: 'claude-opus-4-20250514',
      max_tokens: 4096,
      temperature: 0.7,
      system: "You are an assistant that specializes in providing accurate, up-to-date information about politics, government, legislation, and current events. When answering political questions, strive to be factual, balanced, and thorough. Don't announce that you're going to search - just search and provide results directly.",
      messages: [
        { role: 'user', content: query }
      ],
      tools: [
        {
          type: "web_search_20250305",
          name: 'web_search',
          max_uses: 5
        }
      ]
    });
    console.log(response);
    // Extract response text, handling all content blocks
    let responseText = '';
    
    // Properly handle all content blocks including text after tool use
    for (const block of response.content) {
      if (block.type === 'text') {
        responseText += block.text;
      }
    }

    return NextResponse.json({
      response: responseText,
      model: 'Claude Sonnet 4',
    });

  } catch (error: any) {
    console.error('Claude API error:', error);
    
    // Handle specific API errors
    if (error.status === 401) {
      return NextResponse.json(
        { error: 'Invalid API key. Please check your ANTHROPIC_API_KEY.' },
        { status: 401 }
      );
    }
    
    return NextResponse.json(
      { error: `Claude API error: ${error.message || 'Unknown error'}` },
      { status: 500 }
    );
  }
}