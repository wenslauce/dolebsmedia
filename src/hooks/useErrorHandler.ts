import { useState, useCallback } from 'react';

/**
 * A custom hook for handling errors in functional components.
 * Provides a way to catch and process errors in async operations.
 * 
 * @returns An object with the current error, a function to handle errors, and a function to reset the error state
 */
export function useErrorHandler() {
  const [error, setError] = useState<Error | null>(null);

  const handleError = useCallback((err: unknown) => {
    console.error('Error caught by useErrorHandler:', err);
    
    // If we receive an unknown error type, convert it to an Error object
    if (err instanceof Error) {
      setError(err);
    } else if (typeof err === 'string') {
      setError(new Error(err));
    } else {
      setError(new Error('An unknown error occurred'));
    }
    
    // Re-throw for ErrorBoundary to catch
    throw err;
  }, []);

  const resetError = useCallback(() => {
    setError(null);
  }, []);

  return { error, handleError, resetError };
}

/**
 * A utility function to wrap async functions and handle any errors they might throw.
 * 
 * @param asyncFn The async function to execute
 * @param errorHandler The error handler function from useErrorHandler
 * @returns A function that will call the async function and catch any errors
 */
export function withErrorHandling<T extends any[], R>(
  asyncFn: (...args: T) => Promise<R>,
  errorHandler: (err: unknown) => void
) {
  return async (...args: T): Promise<R> => {
    try {
      return await asyncFn(...args);
    } catch (err) {
      errorHandler(err);
      // This throw is just for TypeScript, errorHandler will always throw
      throw err;
    }
  };
}

export default useErrorHandler; 