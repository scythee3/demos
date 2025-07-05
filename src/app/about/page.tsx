"use client";    
import React from 'react';
// 
export default function AboutPage() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-center text-4xl">Why Demos?</h1>
            <p className="text-center text-lg p-8">
                Demos is a platform that allows for receiving and issuing identification via decentralized blockchain. This method has several benefits over traditional identification workflows, namely:
            </p>
            <ol className="list-decimal pl-8 text-lg">
                <li>Greatly reduces cost of ID issuance. Millions of dollars can be saved by minimizing plastic and paper ID's.</li>
                <li>100% verifiability. Traditional ID relies on uniqueness of plastic and paper id's in addition to human inspection/validation. <br />Both of these traditional methods have huge problems with forgery and human prone errors which Demos alleviates through decentralized cryptography.</li>
                <li>100% permanence and increased security. Traditional centralized databases are more vulnerable to large scale attacks and carry more risk of losing <br /> identification records. Storing identification records on a blockchain minimizes both problems.</li>
            </ol>
        </div>
    );
}