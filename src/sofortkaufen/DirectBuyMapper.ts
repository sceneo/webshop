import {Post} from "../instagram/getInstagram";

export interface DirectBuy {
    img: string;
    description: string;
    price: string;
    size: string;
}

export const mapInstagramDataToDirectBuy = (post: Post): DirectBuy => ({
    img: post.url,
    description: post.caption, // TODO: remove #tags
    price: "27 EUR", // TODO
    size: "154", // TODO
})
