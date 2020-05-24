import {GalleryData} from "../gallery/Gallery";


export const checkGalleryDataNotUndefined = (input: GalleryData[] | undefined): GalleryData[] => {
    if(input === undefined) {
        throw new DOMException("Gallery is null!", "");
    }
    return input as GalleryData[];
}