import {isUndefined} from "../Undefined";


describe("Check if method isUndefined ", () => {
    it("retuns true when undefined object is handed in", () => {
        expect(isUndefined(undefined)).toEqual(true);
    })

    it("retuns false when integer object is handed in", () => {
        const integerObject: number = 28;
        expect(isUndefined(integerObject)).toEqual(false);
    })

    it("retuns false when string object is handed in", () => {
        const stringObject: string = "28";
        expect(isUndefined(stringObject)).toEqual(false);
    })
})