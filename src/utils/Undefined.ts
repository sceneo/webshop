import {Product} from "../produkte/mapPostsToProducts";

export const isUndefined = (input: any): boolean => {
    return input === undefined;
}

export const isDefined = (input: any): boolean => {
    return input !== undefined;
}

export const returnEmptyProductIfUndefined = (input: Product[] | undefined): Product[] => {
    if(input === undefined){
        return [];
    }
    return input;
}

export const getDefinedOrReturnNotFound = (input: string | undefined): string => {
    if(input === undefined) {
        return "Inhalt nicht gefunden";
    }
    return input;
}