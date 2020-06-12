import {GalleryData} from "../gallery/Gallery";


export const checkGalleryDataNotUndefined = (input: GalleryData[] | undefined): GalleryData[] => {
    if(input === undefined) {
        return [];
    }
    return input as GalleryData[];
}