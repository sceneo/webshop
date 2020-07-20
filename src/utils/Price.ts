export const checkIfPriceExists = (price: string): string => {
    if(price !== "Kein Preis verfügbar") {
        return "Preis: " + price + " € zzgl. Versand";
    }
    else {
        return "";
    }
}