import {GalleryData} from "../gallery/Gallery";


export const checkGalleryDataNotUndefined = (input: GalleryData[] | undefined): GalleryData[] => {
    if(input === undefined) {
        console.log("Gallery is null and could not be found");
        return [];
    }
    return input as GalleryData[];
}