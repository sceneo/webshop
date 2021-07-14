import {Post} from "../instagram/getInstagram";
import {getImageFromUrl, hasHashtagInPost, removeHashtag, getPriceFromHashtag, getSizeFromHashtag} from "../utils/Hashtag";

export interface DirectBuyItem {
    img: string;
    description: string;
    price: string;
    size: string;
}

export const isDirectBuy = (post: Post): boolean => {
    return hasHashtagInPost(post, "#sofortkauf")
}

export const mapInstagramDataToDirectBuy = (post: Post): DirectBuyItem => ({
    img: getImageFromUrl(post.url),
    description: removeHashtag(post.caption),
    price: getPriceFromHashtag(post.caption),
    size: getSizeFromHashtag(post.caption),
})
