'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import AsyncBoundary from '@/components/AsyncBoundary';
import { AlertTriangle, ArrowLeft } from 'lucide-react';
import useErrorHandler from '@/hooks/useErrorHandler';

// A component that fetches data and may throw an error
const DataFetcher = ({ shouldFail = false }: { shouldFail?: boolean }) => {
  const { handleError } = useErrorHandler();

  // Simulate an async operation
  const fetchData = async () => {
    // Artificial delay to show loading state
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Throw an error if shouldFail is true
    if (shouldFail) {
      throw new Error('This is a simulated error from the data fetcher!');
    }
    
    return { success: true, message: 'Data fetched successfully!' };
  };

  // Use React's useEffect to fetch data on mount
  useState(() => {
    try {
      fetchData().catch(handleError);
    } catch (error) {
      handleError(error);
    }
  });

  return (
    <div className="p-6 bg-green-500/10 backdrop-blur-md border border-green-500/20 rounded-xl text-white">
      <h3 className="text-xl font-medium mb-2">Data Loaded Successfully!</h3>
      <p>The async operation completed without errors.</p>
    </div>
  );
};

// Error Trigger Button
const ErrorTrigger = () => {
  const [shouldFail, setShouldFail] = useState(false);

  return (
    <div className="flex flex-col items-center gap-8 mb-12">
      <Button
        onClick={() => setShouldFail(prev => !prev)}
        variant={shouldFail ? "destructive" : "default"}
        className="flex items-center gap-2"
      >
        {shouldFail ? (
          <>
            <AlertTriangle size={16} />
            Trigger Error on Next Load
          </>
        ) : (
          'Load Successfully'
        )}
      </Button>

      <AsyncBoundary>
        {shouldFail ? (
          <DataFetcher shouldFail={true} />
        ) : (
          <DataFetcher shouldFail={false} />
        )}
      </AsyncBoundary>
    </div>
  );
};

export default function AsyncBoundaryExample() {
  return (
    <main className="min-h-screen bg-secondary flex flex-col items-center py-24 px-4">
      <div className="container-custom max-w-4xl">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            AsyncBoundary Example
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            This example demonstrates how to use the AsyncBoundary component to handle both loading states and errors gracefully.
          </p>
        </div>

        {/* Demo component */}
        <div className="bg-secondary/70 backdrop-blur-xl border border-white/10 rounded-xl p-8 shadow-lg">
          <h2 className="text-xl font-semibold text-white mb-6 text-center">
            Try it out!
          </h2>
          
          <ErrorTrigger />
          
          <div className="bg-white/5 border border-white/10 rounded-lg p-4">
            <h3 className="text-lg font-medium text-white mb-2">How it works:</h3>
            <ol className="text-white/80 list-decimal pl-5 space-y-2">
              <li>The AsyncBoundary wraps your components to handle both errors and loading states</li>
              <li>When loading data, it displays a beautiful loading spinner</li>
              <li>If an error occurs, it shows a friendly error message with retry options</li>
              <li>Toggle the button above to simulate successful loading or an error state</li>
            </ol>
          </div>
        </div>
      </div>
    </main>
  );
} 