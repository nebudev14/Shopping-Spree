import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

require('dotenv').config();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch(req.method) {
    case 'GET':
      const id = req.body.id;
      var info;
      await (async () => {
        const itemInfo = await axios.get(`https://serpapi.com/search.json?device=desktop&engine=google_product&gl=us&google_domain=google.com&hl=en&location=NY&product_id=${id}&key=${process.env.KEY}`);
        info = itemInfo.data;
      })();  
      res.status(200).json({ message: info });  
      break;
    
    default:
      res.status(400).json({ message: 'Bad request error' });
      break;
  }
}
