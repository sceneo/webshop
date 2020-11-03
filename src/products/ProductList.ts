import {create} from "domain";

export interface Product {
    title: string;
    stoffe: string[] | undefined;
    aussenstoffe: string[] | undefined;
    futterstoffe: string[] | undefined;
    varianten: string | undefined;
    groessen: Groesse[] | undefined;
    bild: string;
    details: string | undefined;
}

export interface Groesse {
    size: string;
    price: number;
}

const createProduct = (title: string, url: string, varianten: string | undefined, groessen: Groesse[], aussenstoffe: string[] | undefined, futterstoffe: string[] | undefined, stoffe: string[] | undefined, details: string | undefined): Product => {
    return {
        title: title,
        bild: url,
        varianten: varianten,
        groessen: groessen,
        aussenstoffe: aussenstoffe,
        futterstoffe: futterstoffe,
        stoffe: stoffe,
        details: details
    }
}

const createSize = (size: string, price: number) : Groesse => {
    return {
        size: size,
        price: price
    }
}

export const createProducts = () : Product[] => {
    return [
        createProduct("    Strampler mit Fuß oder Bündchen", "strampler.jpg", "Mit Fuß oder Bündchen, mit oder ohne Teilung, kurze Beine, Teilung gerade/abgerundet, Mitwachswündchen (+3€)",
            [createSize("Größe 50-74", 22), createSize("Größe 80-98", 25)],
            undefined,
            undefined,
            ["Jersey", "Sommersweat", "Sweat", "Jaquard"],
            undefined),
        createProduct("Baggy Pants/Hose", "pants.jpg", "Taschen (+8€)",
            [createSize("Größe 50-74", 14), createSize("Größe 80-98 ", 18), createSize("Größe 104-122", 23), createSize("Größe 128-152", 27)],
            undefined,
            undefined,
            ["Jersey", "Sommersweat", "Sweat", "Jaquard"],
            undefined
        ),
        createProduct("Shorts/Bloomers", "shorts.jpg", "Saum oder Bündchen",
            [createSize("Größe 50-74", 12), createSize("Größe 80-98", 15), createSize("Größe 104-122", 20), createSize("Größe 128-152", 24)],
            undefined,
            undefined,
            ["Jersey", "Sommersweat", "Sweat", "Jaquard"],
            undefined),
        createProduct("Langarmshirts/Sweater", "sweater.jpg", "Ärmel andere Farbe, Brusttasche (+4€), Wickeloptik",
            [createSize("Größe 50-74", 18), createSize("Größe 80-98  ", 22), createSize("Größe 104-122", 27), createSize("Größe 128-152", 32)],
            undefined,
            undefined,
            ["Jersey", "Sommersweat", "Sweat"],
            undefined),
        createProduct("Mäntelchen", "mantel.jpg", "Mit runder/spitzer Kapuze, Knoten an Kapuze, Bommel an Kapuze (+4€), Drachenzacken am Rücken, aufgesetzte Taschen (+8-12€)",
            [createSize("Größe 62/68", 40),
                createSize("Größe 74/80", 43),
                createSize("Größe 86/92", 46),
                createSize("Größe 98/104", 49),
                createSize("Größe 110/116", 52)
            ],
            ["Sommersweat", "Sweat", "Jaquard (z.B. Zopfstrick)", "Wollwalk (+10€)"],
            ["Jersey", "Sommersweat", "Sweat"],
            undefined,
            undefined),
        createProduct("Mützen", "muetze.jpg", "Mit Öhrchen, lange Öhrchen, Bindeband, Bündchen/Saum, Turban (+3-5€)",
            [
                createSize("Baby / Kinder", 9), createSize("Beanie Erwachsene", 15),
                createSize("Turbanmütze Erwachsene", 15),
                createSize("Öhrchenmütze Erwachsene", 12)],
            undefined,
            undefined,
            ["Jersey", "Sommersweat", "Sweat", "Jaquard"],
            "Individuell nach Kopfumfang"),
        createProduct("Wendehalstücher", "wendehalstuch.jpg", undefined,
            [createSize("Baby", 8), createSize("Kleinkind", 8)],
            undefined,
            undefined,
            ["Jersey", "Sommersweat", "Sweat", "Jaquard"],
            "Größenverstellbar (2 Druckknöpfe)"),
        createProduct("Musselintücher", "musselintuch.jpg", undefined,
            [
                createSize("Baby (wie Wendehalstuch)", 8),
                createSize("Kleinkind (quadratisch, ca. 65x65cm)", 12),
                createSize("Mutti (dreieckig, ca. 130x130cm)", 16)],
            undefined,
            undefined,
            undefined,
            undefined),
        createProduct("Schühchen", "schuhe.jpg", undefined,
            [createSize("Größe 14/15 - 18/19", 10), createSize("Größe 20/21 - 24/25", 13)],
            ["Jersey", "Sommersweat", "Sweat", "Jaquard (z.B. Zopfstrick)", "Wollwalk (nach Verfügbarkeit, +5€)"],
            undefined,
            undefined,
            "Achtung! Diese Schühchen eignen sich nicht zum Laufen, da sie keine rutschfeste Sohle haben."),
        createProduct("Wohlfühlhose Damen", "hose.jpg", "Ohne Hosentaschen (-8€)",
            [createSize("Größe 34-40", 45), createSize("Größe 42-48", 48)],
            undefined,
            undefined,
            ["Jersey", "Sommersweat", "Sweat"],
            undefined)
    ]
}
