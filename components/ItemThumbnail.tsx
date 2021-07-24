import React from 'react';

import Link from 'next/link';


export default function ItemThumbnail({item}: any) {
    return (
        <Link href={`/item/${item.product_id}`}>
            <div className="itemThumbnail">
                <img src={item.thumbnail} className="itemImage"/>
                <span className="title">{item.title}</span>
                <span className="price">{item.price}</span>
                <style jsx>{`
                    .title {
                        color: red;
                    }

                `}</style>
            </div>
        </Link>
    );
}
