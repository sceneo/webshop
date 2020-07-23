import {GalleryData} from "../galery/Galery";


export const checkGalleryDataNotUndefined = (input: GalleryData[] | undefined): GalleryData[] => {
    if(input === undefined) {
        return [];
    }
    return input as GalleryData[];
}