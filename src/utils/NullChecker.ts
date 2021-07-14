import {GaleryData} from "../galery/Galery";


export const checkGalleryDataNotUndefined = (input: GaleryData[] | undefined): GaleryData[] => {
    if(input === undefined) {
        return [];
    }
    return input as GaleryData[];
}