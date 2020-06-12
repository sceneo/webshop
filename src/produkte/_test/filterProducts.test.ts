import {filterProducts} from "../filterProducts";
import {ProductCategory} from "../ProductCategory";

describe("Filter products method ", () => {
    it("returns empty array if no category matches", () => {
        const incomingProducts = [
            {
                category: ProductCategory.adult,
                hashtags: ["",""],
                description: "",
                url: "",
            },
            {
                category: ProductCategory.baby,
                hashtags: ["",""],
                description: "",
                url: "",
            },

        ];

        const result = filterProducts(incomingProducts, ProductCategory.child);

        expect(result).toEqual([]);
    });

    it("returns empty array if empty array is handed in", () => {
        const result = filterProducts([], ProductCategory.baby);
        expect(result).toEqual([]);
    });

    it("returns only elements for the given category", () => {
        const incomingProducts = [
            {
                category: ProductCategory.adult,
                hashtags: ["",""],
                description: "",
                url: "",
            },
            {
                category: ProductCategory.baby,
                hashtags: ["",""],
                description: "",
                url: "",
            },

        ];
        const result = filterProducts(incomingProducts, ProductCategory.baby);

        expect(result.length).toEqual(1);
        expect(result[0].category).toEqual(ProductCategory.baby);

    });
});