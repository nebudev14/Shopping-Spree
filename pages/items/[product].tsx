import React from "react";
import axios from "axios";

export default function productResult(props: any) {
    return  (
        <div className="container">
            <img src={props.information.product_results.media[0].link} className="image"/>
            <h1 className="title">{props.information.product_results.title}</h1>

            <style jsx>{`
                .container {
                    display: flex;
                    align-items: center;
                    justify-content: space-evenly;
                }

            `}</style>
        </div>
    );
}

export const getServerSideProps: any = async (context: any) => {
    var information;
    const {product} = context.params;
    await (async () => {
        const itemInfo = await axios({
            method: 'GET',
            url: `https://serpapi.com/search.json?device=desktop&engine=google_product&gl=us&google_domain=google.com&hl=en&location=NY&product_id=${product}&key=${process.env.KEY}`
        });
        information = itemInfo.data;
    })();

    console.log(information);

    return {
        props: {
            information
        }
        
    }
}
