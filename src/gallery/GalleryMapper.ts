import {Post} from "../instagram/getInstagram";
import {GalleryData} from "./Gallery";

export const mapInstagramDataToGallery = (post: Post): GalleryData => ({
    img: post.url,
    description: post.caption,
    subtitle: "hier könnte ihre werbung stehen" // TODO: this should be checked
})
