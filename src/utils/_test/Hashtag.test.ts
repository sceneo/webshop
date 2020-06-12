import {getAllHashtagsFromString, getPriceFromHashtag, getSizeFromHashtag, hasHashtag, removeHashtag} from "../Hashtag";
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

describe("The Hashtag method getPriceFromString() ", () => {
    it("can get the correct price from a string", () => {
        const stringWithPrice = "This is a string with #preis=120 #someOther";

        const newString = getPriceFromHashtag(stringWithPrice);

        expect(newString).toEqual("120 EUR");
    })

    it("can get the correct price from a string at the end of the object", () => {
        const stringWithPrice = "This is a string with #preis=120";

        const newString = getPriceFromHashtag(stringWithPrice);

        expect(newString).toEqual("120 EUR");
    })

    it("returns _Kein Preis verfügbar_ if no price is listed", () => {
        const stringWithPrice = "This is a string with #preis= #test";

        const newString = getPriceFromHashtag(stringWithPrice);

        expect(newString).toEqual("Kein Preis verfügbar");
    })

    it("returns _Kein Preis verfügbar_ if no valid tag exists", () => {
        const stringWithPrice = "This is a string with #test";

        const newString = getPriceFromHashtag(stringWithPrice);

        expect(newString).toEqual("Kein Preis verfügbar");
    })
})

describe("The Hashtag method getSizeFromString() ", () => {
    it("can get the correct size from a string as number", () => {
        const stringWithPrice = "This is a string with #größe=156 #someOther";

        const newString = getSizeFromHashtag(stringWithPrice);

        expect(newString).toEqual("156 ");
    })

    it("can get the correct size from a string as string", () => {
        const stringWithPrice = "This is a string with #größe=XL #someOther";

        const newString = getSizeFromHashtag(stringWithPrice);

        expect(newString).toEqual("XL ");
    })
})

describe("The Hashtag method getHashtagsFromString() ", () => {
    it(" returns empty array if no hashtags are present", () => {
        const caption = "This is a caption";

        const loadedHashtags = getAllHashtagsFromString(caption);

        expect(loadedHashtags).toEqual([]);

    });

    it(" returns a single result if one hashtag is handed in", () => {
        const caption = "This is a caption with one #entry";

        const loadedHashtags = getAllHashtagsFromString(caption);

        expect(loadedHashtags.length).toEqual(1);
        expect(loadedHashtags).toEqual(["#entry"]);
    });

    it(" can handle multi results", () => {
        const caption = "This is a caption with one #entry #two or #three";

        const loadedHashtags = getAllHashtagsFromString(caption);

        expect(loadedHashtags.length).toEqual(3);
        expect(loadedHashtags).toEqual(["#entry", "#two", "#three"]);
    });

    it(" can handle parameters", () => {
        const caption = "This is a caption with one #entry=parameter #or #so";

        const loadedHashtags = getAllHashtagsFromString(caption);

        expect(loadedHashtags.length).toEqual(3);
    });
});