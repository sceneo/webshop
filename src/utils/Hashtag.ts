import {GalleryData} from "../gallery/Gallery";

export const hasHashtag = (galleryItem: GalleryData, hashtag: string): boolean => {
    return galleryItem.description.indexOf(hashtag) !== -1; //TODO test this!
}