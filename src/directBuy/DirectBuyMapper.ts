import {Post} from "../instagram/getInstagram";
import {hasHashtagInPost, removeHashtag, getPriceFromHashtag, getSizeFromHashtag} from "../utils/Hashtag";

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
    img: "galery/" + post.id + ".jpg",
    description: removeHashtag(post.caption),
    price: getPriceFromHashtag(post.caption),
    size: getSizeFromHashtag(post.caption),
})
