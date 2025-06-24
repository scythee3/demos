"use client";
import React, { useState } from "react";

export default function ElectionsPage() {
  const [selectedElection, setSelectedElection] = useState("presidential-2024");

  const elections = [
    { id: "presidential-2024", name: "2024 Presidential Election" },
    { id: "midterms-2022", name: "2022 Midterm Elections" },
    { id: "local-2023", name: "2023 Local Elections" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="w-full max-w-2xl space-y-6">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Elections</h1>
          <p className="text-lg text-muted-foreground">
            Explore information about upcoming and past elections.
          </p>
        </div>

        <div className="space-y-4">
          <label htmlFor="election" className="block text-sm font-medium text-gray-700">
            Select Election
          </label>
          <select
            id="election"
            value={selectedElection}
            onChange={(e) => setSelectedElection(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            {elections.map((election) => (
              <option key={election.id} value={election.id}>
                {election.name}
              </option>
            ))}
          </select>
        </div>

        <div className="p-4 border rounded-md">
          {selectedElection === "presidential-2024" && (
            <div>
              <h2 className="text-2xl font-semibold mb-2">2024 Presidential Election</h2>
              <p>Details about the 2024 Presidential Election...</p>
            </div>
          )}
          {selectedElection === "midterms-2022" && (
            <div>
              <h2 className="text-2xl font-semibold mb-2">2022 Midterm Elections</h2>
              <p>Details about the 2022 Midterm Elections...</p>
            </div>
          )}
          {selectedElection === "local-2023" && (
            <div>
              <h2 className="text-2xl font-semibold mb-2">2023 Local Elections</h2>
              <p>Details about the 2023 Local Elections...</p>
            </div>
          )}
        </div>
        </div>
    </div>
    );
}
