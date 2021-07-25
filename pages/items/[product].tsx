import React from "react";
import axios from "axios";

export default function productResult(props: any) {
    return  (
        <div>
            <h1>i am a product result</h1>
        </div>
    );
}

export const getServerSideProps: any = async (context: any) => {
    var information;
    const {productID} = context.params;
    var body = {
        "id": productID
    };
    await (async () => {
        const itemInfo = await axios({
            method: 'GET',
            url: 'http://localhost:3000/api/productList',
            data: body
        });
        information = itemInfo.data.message;
    })();

    return {
        props: {
            information
        }
    }
}
