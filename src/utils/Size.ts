export const checkIfSizeExists = (price: string): string => {
    if(price !== "Keine Größe verfügbar") {
        return "Größe: " + price;
    }
    else {
        return "";
    }
}