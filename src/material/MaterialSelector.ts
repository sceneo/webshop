import {GaleryData} from "../galery/Galery";
import {isUndefined} from "../utils/Undefined";
import {checkGalleryDataNotUndefined} from "../utils/NullChecker";

const PREFIX = "material/";
const SUFFIX = ".png";

export const getFirstImageOrImageBackup = (input: GaleryData[] | undefined, materialType: string): string | undefined => {
    if(isUndefined(input) || isUndefined(!(input) || input[0])){
        return getDefaultByMaterialType(materialType);
    }
    return checkGalleryDataNotUndefined(input)[0].img;
}

const getDefaultByMaterialType = (materialType: string): string => {
    return PREFIX + materialType + SUFFIX;
}