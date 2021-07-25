import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

require('dotenv').config();

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch(req.method) {
    case 'GET':
      const id = req.body.id;

      break;
    
    default:
      res.status(400).json({ message: 'Bad request error' }) 
      break;
  }
}
