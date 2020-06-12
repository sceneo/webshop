import {GalleryData} from "../gallery/Gallery";

import {ProductCategory} from "../produkte/ProductCategory";
import {Post} from "../instagram/getInstagram";

export const hasHashtag = (galleryItem: GalleryData, hashtag: string): boolean => {
    return galleryItem.description.indexOf(hashtag) !== -1;
}

export const hasHashtagInPost = (post: Post, hashtag: string): boolean => {
    return post.caption.indexOf(hashtag) !== -1;
}


export const removeHashtag = (input: string): string => {
    return input.substring(0, input.indexOf('#'));
}

export const getAllHashtagsFromString = (input: string): string[] => {
    return []; // FIXME
}

export const hasProductCategory = (input: string): boolean => {
    return hasHashtagInString(input, "#baby") || hasHashtagInString(input, "#child") || hasHashtagInString(input, "#adult");
}

export const getProductCategoryFromCaption = (input: string): ProductCategory => {
    if(hasHashtagInString(input,"#baby")){
        return ProductCategory.baby
    }

    if(hasHashtagInString(input,"#child")){
        return ProductCategory.child
    }

    // default
    return ProductCategory.adult;
}


export const getPriceFromHashtag = (input: string): string => {
    const noPriceAvailable = "Kein Preis verfügbar";
    if(!hasHashtagInString(input, "#preis")) {
        return noPriceAvailable;
    }
    const stringWithoutIdentifier = input.split("#preis=")[1];

    if(stringWithoutIdentifier[0] === " "){
        return noPriceAvailable;
    }

    if (hasHashtagInString(stringWithoutIdentifier, "#")) {
        const price = removeHashtag(stringWithoutIdentifier);
        return price + "EUR";
    }
    else {
        return stringWithoutIdentifier + " EUR";
    }
}

export const getSizeFromHashtag = (input: string): string => {
    const noSizeAvailable = "Keine Größe verfügbar";
    if(!hasHashtagInString(input, "#größe")) {
        return noSizeAvailable;
    }
    const stringWithoutIdentifier = input.split("#größe=")[1];

    if(stringWithoutIdentifier[0] === " "){
        return noSizeAvailable;
    }

    if (hasHashtagInString(stringWithoutIdentifier, "#")) {
        return removeHashtag(stringWithoutIdentifier);
    }
    else {
        return stringWithoutIdentifier;
    }
}

const hasHashtagInString = (input: string, hashtag: string): boolean => {
    return input.indexOf(hashtag) !== -1;
}