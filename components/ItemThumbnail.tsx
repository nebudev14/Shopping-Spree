import React from 'react';

import Link from 'next/link';

const ItemThumbnail: any = ({item}: any) => {
    return (
        <Link href={`/items/${item.product_id}`}>
            <div className="itemThumbnail">
                <img src={item.thumbnail} className="itemImage"/>
                <span className="title">{item.title}</span>
                <span className="price">{item.price}</span>
                <style jsx>{`
                    .itemThumbnail {

                    }
                `}</style>
            </div>
        </Link>
    );
}

export default ItemThumbnail;