import {Post} from "../instagram/getInstagram";
import {GaleryData} from "./Galery";

export const mapInstagramDataToGallery = (post: Post): GaleryData => ({
    img: post.url,
    description: post.caption,
})
