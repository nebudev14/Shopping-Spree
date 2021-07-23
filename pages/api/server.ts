import type { NextApiRequest, NextApiResponse } from 'next';
const SerpApi = require('google-search-results-nodejs');
require('dotenv').config();

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
