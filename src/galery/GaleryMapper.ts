import {Post} from "../instagram/getInstagram";
import {GalleryData} from "./Galery";

export const mapInstagramDataToGallery = (post: Post): GalleryData => ({
    img: post.url,
    description: post.caption,
})
