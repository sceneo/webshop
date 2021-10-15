import {GaleryData} from "../galery/Galery";
import {isUndefined} from "../utils/Undefined";
import {checkGalleryDataNotUndefined} from "../utils/NullChecker";

const PREFIX = "material/";
const SUFFIX = ".jpg";

export const getFirstImageOrImageBackup = (input: GaleryData[] | undefined, materialType: string): string | undefined => {
        return getDefaultByMaterialType(materialType);
}

const getDefaultByMaterialType = (materialType: string): string => {
    return PREFIX + materialType + SUFFIX;
}

const isAvailable = (input: GaleryData): boolean => {
    return false;
}
