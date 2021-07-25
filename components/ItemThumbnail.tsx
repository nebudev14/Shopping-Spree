import React from 'react';

import Link from 'next/link';

const ItemThumbnail: any = ({item}: any) => {
    return (
        
        <Link href={`/items/${item.product_id}`}>
            <div className="itemThumbnail">
                <img src={item.thumbnail} className="itemImage"/>
                <div className="itemInfo">
                    <span className="title">{item.title}</span>
                    <span className="price"><strong>Price:</strong> {item.price}</span>
                </div>
                <style jsx>{`

                    .container {
                        display: inline;
                    }

                    .itemThumbnail {
                        border: 5px solid #000;
                        border-radius: 20px;
                        text-align: center;
                        margin-top: 2rem;
                        margin-bottom: 2rem;
                        display: flex;
                        transition: 200ms ease;
                    }

                    .itemThumbnail:hover {
                        cursor: pointer;
                        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
                        transform: scale(1.02);
                    }
                    
                    .itemInfo {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-direction: column;
                    }

                    .itemImage {
                        width: 300px;
                        height: 300px;
                        border-radius: 20px;
                    }

                    .title {
                        font-size: 120%;
                        margin-bottom: 2rem;
                        width: 75%;
                    }

                    .price {
                        font-size: 110%;
                    }
                `}</style>
            </div>
        </Link>
    );
}

export default ItemThumbnail;