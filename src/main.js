// Import the necessary modules
import { Client } from 'node-appwrite';

export default async ({ req, res, log, error }) => {
  // Initialize the Appwrite client
  const client = new Client();
  // client
  //   .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
  //   .setProject("66686b30000336ef6b28") // Your project ID
  //   .setKey(process.env.APPWRITE_API_KEY); // Your API key

  // Log a message to the console
  log('Hello, Logs!');

  // Log an error to the console
  error('Hello, Errors!');

  // Check the request method
  if (req.method === 'GET') {
    // Log a message to the console
    
    // Send a response back to the client
    return res.send('Hello, World!');
  }

  // If the request method is not GET, send a method not allowed response
  return res.status(405).send('Method Not Allowed');
};
