import type { NextApiRequest, NextApiResponse } from 'next';
const SerpApi = require('google-search-results-nodejs');
require('dotenv').config();

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch(req.method) {
    case 'GET':
      

      res.status(200).json({ message: 'John Doe' });
      break;
    
    default:
      res.status(400).json({ message: 'Bad request error' }) 
      break;
  }
}
