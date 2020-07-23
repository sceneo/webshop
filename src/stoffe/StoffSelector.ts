import {GalleryData} from "../galery/Galery";
import {isUndefined} from "../utils/Undefined";
import {checkGalleryDataNotUndefined} from "../utils/NullChecker";

const IMAGE_NOT_FOUND = "content/picture_not_found.jpg";

export const getFirstImageOrImageNotFound = (input: GalleryData[] | undefined): string | undefined => {
    if(isUndefined(input) || isUndefined(!(input) || input[0])){
        return IMAGE_NOT_FOUND;
    }
    return checkGalleryDataNotUndefined(input)[0].img;
}