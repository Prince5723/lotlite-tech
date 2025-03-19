'use client';
import { useEffect, useState } from 'react';
import Head from 'next/head';

// Define the Query type
interface Query {
  _id: string;
  name: string;
  email: string;
  phoneNo: string;
  subject: string;
  message: string;
  date: string;
}

export default function AdminDashboard() {
  const [queries, setQueries] = useState<Query[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        // Retrieve the token from localStorage
        const token = localStorage.getItem('token');
        
        if (!token) {
          setError('Authentication token not found. Please log in.');
          setLoading(false);
          return;
        }

        // Include the token in the Authorization header
        const response = await fetch('/api/query', {
          headers: {
            'Authorization': token
          }
        });

        if (!response.ok) {
          // Handle HTTP error responses (e.g., 401 Unauthorized)
          if (response.status === 401) {
            setError('Your session has expired. Please log in again.');
          } else {
            setError(`Error: ${response.status} ${response.statusText}`);
          }
          setLoading(false);
          return;
        }

        const result = await response.json();
        
        if (result.success) {
          setQueries(result.data);
        } else {
          setError(result.error || 'Failed to load queries');
        }
      } catch (error) {
        setError('Error connecting to server');
        console.error('Error fetching queries:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchQueries();
  }, []);

  // Show meaningful error message for authentication issues
  if (loading) return <div className="flex justify-center p-8">Loading queries...</div>;
  if (error) {
    return (
      <div className="container mx-auto p-4">
        <div className="bg-red-100 p-4 text-red-700 rounded mb-4">{error}</div>
        {error.includes('token') || error.includes('session') ? (
          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => window.location.href = '/admin'}
          >
            Go to Login
          </button>
        ) : null}
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Admin Dashboard - Query Management</title>
      </Head>
      
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Query Management Dashboard</h1>
        
        {queries.length === 0 ? (
          <p>No queries submitted yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 border-b text-left">Name</th>
                  <th className="py-2 px-4 border-b text-left">Email</th>
                  <th className="py-2 px-4 border-b text-left">Phone</th>
                  <th className="py-2 px-4 border-b text-left">Subject</th>
                  <th className="py-2 px-4 border-b text-left">Message</th>
                  <th className="py-2 px-4 border-b text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                {queries.map((query) => (
                  <tr key={query._id} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b">{query.name}</td>
                    <td className="py-2 px-4 border-b">{query.email}</td>
                    <td className="py-2 px-4 border-b">{query.phoneNo}</td>
                    <td className="py-2 px-4 border-b">{query.subject}</td>
                    <td className="py-2 px-4 border-b">{query.message.substring(0, 50)}
                      {query.message.length > 50 ? '...' : ''}
                    </td>
                    <td className="py-2 px-4 border-b">
                      {new Date(query.date).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}