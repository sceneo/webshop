import {hasHashtag} from "../Hashtag";
import {GalleryData} from "../../gallery/Gallery";

describe("The Hashtag method hasHashtag() ", () => {
    it("returns true when the hashtag is available in array", () => {
        const hastagToLookFor: string = "#Nice";
        const itemWithHashtagNice: GalleryData = {
            description: hastagToLookFor,
            img: "some image",
        }
        expect(hasHashtag(itemWithHashtagNice, hastagToLookFor)).toEqual(true);
    })

    it("returns true when the hashtag is available twice in array", () => {
        const hastagToLookFor: string = "#Nice";
        const itemWithHashtagNice: GalleryData = {
            description: hastagToLookFor + " some stuff " + hastagToLookFor,
            img: "some image",
        }
        expect(hasHashtag(itemWithHashtagNice, hastagToLookFor)).toEqual(true);
    })

    it("returns false when the hashtag is not available in array", () => {
        const hastagToLookFor: string = "#Nice";
        const itemWithHashtagNice: GalleryData = {
            description: "the correct #hashtag is not available",
            img: "some image",
        }
        expect(hasHashtag(itemWithHashtagNice, hastagToLookFor)).toEqual(false);
    })

    it("returns false when the array is empty", () => {
        const hastagToLookFor: string = "#Nice";
        const itemWithHashtagNice: GalleryData = {
            description: "",
            img: "some image",
        }
        expect(hasHashtag(itemWithHashtagNice, hastagToLookFor)).toEqual(false);
    })
})