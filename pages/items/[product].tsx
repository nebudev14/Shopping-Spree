import React from "react";
import axios from 'axios';

import { GetStaticPaths } from "next";

export default function Product(props: any) {
    return  (
        <div>
            <h1>hello</h1>
        </div>
    );
}

export const getServerSideProps: any = async (context: any) => {
    var results;
    const {product} = context.params;
    var body = {
        "query": product
    };
    await (async () => {
        const allResults = await axios({
            method: 'GET',
            url: 'http://localhost:3000/api/server',
            data: body
        });
        results = allResults.data.message;
    })();

    console.log(results);
    return {
        props: {
            results
        }
    };
}