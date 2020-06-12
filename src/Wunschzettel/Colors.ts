export enum Colors {
    red = "rot",
    yellow = 'gelb',
    green = 'grün',
    blue = 'blau',
    black = 'schwarz',
    brown = 'braun',
}

export const getColorFromString = (input: string): Colors => {
    switch(input) {
        case "red":
            return Colors.red;
        case "yellow":
            return Colors.yellow;
        case "green":
            return Colors.green;
        case "blue":
            return Colors.blue;
        case "black":
            return Colors.black;
        case "brown":
            return Colors.brown;

        default:
            return Colors.red;
    }
}

export const getColorIdFromString = (input: string): number => {
    switch(input) {
        case "red":
            return 0;
        case "yellow":
            return 1;
        case "green":
            return 2;
        case "blue":
            return 3;
        case "black":
            return 4;
        case "brown":
            return 5;

        default:
            return 0;
    }
}