import type { NextApiRequest, NextApiResponse } from 'next';
const SerpApi = require('google-search-results-nodejs');
const search = new SerpApi.GoogleSearch(process.env.KEY);

require('dotenv').config();

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch(req.method) {
    case 'GET':
      const item = req.body.query;
      const params = {
        q: item,
        tbm: "shop",
        location: "NY",
        hl: "en",
        gl: "us"
      };

      const callback = function(data: any) {
        data['shopping_results'].sort(function(a: any, b: any) {
          return a.extracted_price - b.extracted_price 
        });
        res.status(200).json({ message: data['shopping_results'] });
      };
      
      search.json(params, callback);
      break;
    
    default:
      res.status(400).json({ message: 'Bad request error' });
      break;
  }
}
