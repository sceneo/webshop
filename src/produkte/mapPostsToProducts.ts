import {Post} from "../instagram/getInstagram";
import {ProductCategory} from "./ProductCategory";
import {
    getAllHashtagsFromString,
    getProductCategoryFromCaption,
    hasProductCategory,
    removeHashtag
} from "../utils/Hashtag";

export interface Product {
    category: ProductCategory;
    hashtags: string[];
    description: string;
    url: string;
}

export const mapPostsToProducts = (posts: Post[]): Product[]  => {
    return posts.filter(post => !post.isVideo).filter(post => hasProductCategory(post.caption)).map(post => {
        return {
            category: getProductCategoryFromCaption(post.caption),
            description: removeHashtag(post.caption),
            hashtags: getAllHashtagsFromString(post.caption),
            url: post.url
        }
    });
}