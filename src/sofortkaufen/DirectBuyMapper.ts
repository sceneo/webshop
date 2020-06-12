import {Post} from "../instagram/getInstagram";
import {hasHashtagInPost, removeHashtag, getPriceFromHashtag, getSizeFromHashtag} from "../utils/Hashtag";

export interface DirectBuy {
    img: string;
    description: string;
    price: string;
    size: string;
}

export const isDirectBuy = (post: Post): boolean => {
    return hasHashtagInPost(post, "#sofortkauf")
}

export const mapInstagramDataToDirectBuy = (post: Post): DirectBuy => ({
    img: post.url,
    description: removeHashtag(post.caption),
    price: getPriceFromHashtag(post.caption),
    size: getSizeFromHashtag(post.caption),
})
