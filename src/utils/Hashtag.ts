import {GalleryData} from "../gallery/Gallery";

export const hasHashtag = (galleryItem: GalleryData, hashtag: string): boolean => {
    return galleryItem.description.indexOf(hashtag) !== -1;
}

export const removeHashtag = (input: String): String => {
    return input.substring(0, input.indexOf('#'));
}