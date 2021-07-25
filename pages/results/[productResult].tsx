import React from "react";
import axios from 'axios';

import ItemThumbnail from '../../components/ItemThumbnail';

export default function Product(props: any) {
    return (
        <div className="container">
            <span className="title">
                Results for {props.productResult}
            </span>
            <div className="itemDiv">
                {props.results.map((item: any, i: any) => (
                    <ItemThumbnail key={i} item={item} className="item"/>
                ))}
            </div>

            <style jsx>{`

                .container {
                    text-align: center;
                    padding: 1.5rem;
                }
                
                .title {
                    font-size: 400%;
                    color: var(--primary-color);
                    border-bottom: 2px solid var(--primary-color);
                    margin: 2.5rem 0 2.5rem 0;
                }

                .item {
                    margin-top: 3rem;
                    margin-bottom: 3rem;
                }

                .itemDiv {
                    width: 900px;
                    display: grid;
                    margin: auto;
                }

            `}</style>
        </div>
    );
}

export const getServerSideProps: any = async (context: any) => {
    var results;
    const {productResult} = context.params;
    var body = {
        "query": productResult
    };
    await (async () => {
        const allResults = await axios({
            method: 'GET',
            url: 'http://localhost:3000/api/productList',
            data: body
        });
        results = allResults.data.message;
    })();

    console.log(results);
    return {
        props: {
            results, productResult
        }
    };
}