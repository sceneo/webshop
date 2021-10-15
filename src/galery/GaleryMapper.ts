import {Post} from "../instagram/getInstagram";
import {GaleryData} from "./Galery";

export const mapInstagramDataToGallery = (post: Post): GaleryData => ({
    img: post.id.toString() + ".jpg",
    description: post.caption,
})
