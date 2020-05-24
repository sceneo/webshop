import {checkGalleryDataNotUndefined} from "../NullChecker";
import {GalleryData} from "../../gallery/Gallery";

describe("Check GalleryData ", () => {
    it("checkGalleryDataNotUndefined() returns [] when input is undefined", () => {
        expect(checkGalleryDataNotUndefined(undefined)).toEqual([]);
    })

    it("checkGalleryDataNotUndefined() returns validData when input is valid GalleryData[]", () => {
        const validGalleryData: GalleryData[] = [
            {
                description: "some description",
                img: "some image",
            }
        ];
        expect(checkGalleryDataNotUndefined(validGalleryData)).toEqual(validGalleryData);
    })

    it("checkGalleryDataNotUndefined() returns [] when input is empty array", () => {
        const emptyGalleryData: GalleryData[] = [];
        expect(checkGalleryDataNotUndefined(emptyGalleryData)).toEqual(emptyGalleryData);
    })
})