import React from "react";
import axios from 'axios';

import ItemThumbnail from '../../components/ItemThumbnail';

export default function Product(props: any) {
    return (
        <div className="container">
            <span className="title">
                Results for {props.product}
            </span>
            <div className="itemsDiv">
                {props.results.map((item: any, i: any) => (
                    <ItemThumbnail key={i} item={item} />
                ))}
            </div>

            <style jsx>{`

                .container {
                    display: flex;
                    align-items: center;
                    justify-content: start;
                    flex-direction: column;
                    height: 100vh;
                    margin-top: 3rem;
                    text-align: center;
                }

                .title {
                    font-size: 400%;
                    color: var(--primary-color);
                    border-bottom: 2px solid var(--primary-color);
                    margin-top: 3rem;
                }   

                .itemsDiv {
                    text-align: center;
                    margin: 3rem;
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
            url: 'http://localhost:3000/api/server',
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