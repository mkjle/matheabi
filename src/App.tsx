/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';

type Tab = 'stochastik' | 'geometrie' | 'analysis';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('stochastik');

  return (
    <div className="flex flex-col h-screen w-full bg-white font-sans overflow-hidden">
      {/* Minimal Top-Left Menu */}
      <div className="flex items-center bg-white border-b border-gray-200 px-2 py-1 shadow-sm shrink-0">
        <div className="flex space-x-1">
          <button
            onClick={() => setActiveTab('stochastik')}
            className={`px-3 py-1.5 text-sm rounded-md font-medium transition-colors ${
              activeTab === 'stochastik'
                ? 'bg-blue-50 text-blue-700 shadow-sm'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            }`}
          >
            Stochastik
          </button>
          <button
            onClick={() => setActiveTab('geometrie')}
            className={`px-3 py-1.5 text-sm rounded-md font-medium transition-colors ${
              activeTab === 'geometrie'
                ? 'bg-blue-50 text-blue-700 shadow-sm'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            }`}
          >
            Geometrie
          </button>
          <button
            onClick={() => setActiveTab('analysis')}
            className={`px-3 py-1.5 text-sm rounded-md font-medium transition-colors ${
              activeTab === 'analysis'
                ? 'bg-blue-50 text-blue-700 shadow-sm'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            }`}
          >
            Analysis
          </button>
        </div>
      </div>

      <main className="flex-grow w-full relative">
        {activeTab === 'stochastik' && (
          <iframe
            src="/tab1.html"
            className="absolute inset-0 w-full h-full border-none"
            title="Stochastik"
          />
        )}
        {activeTab === 'geometrie' && (
          <iframe
            src="/tab2.html"
            className="absolute inset-0 w-full h-full border-none"
            title="Geometrie"
          />
        )}
        {activeTab === 'analysis' && (
          <iframe
            src="/tab3.html"
            className="absolute inset-0 w-full h-full border-none"
            title="Analysis"
          />
        )}
      </main>
    </div>
  );
}
