import {hasHashtag, removeHashtag} from "../Hashtag";
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

describe("The Hashtag method removeString() ", () => {
    it("removes all # from string", () => {
        const stringWithTwoHashtags = "This is a string #with two #hashtags";

        const newString = removeHashtag(stringWithTwoHashtags);

        expect(newString).not.toContain("#");
    })

    it("cuts string after first appearing # and keeps content before string", () => {
        const stringBeforeHashtag = "This is the part before";
        const stringAfterHashtag = "#the hashtag";

        const newString = removeHashtag(stringBeforeHashtag + stringAfterHashtag);

        expect(newString).not.toContain("#");
        expect(newString).toContain(stringBeforeHashtag);
        expect(newString).not.toContain(stringAfterHashtag);
    })
})