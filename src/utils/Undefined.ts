
export const isUndefined = (input: any): boolean => {
    return input === undefined;
}

export const isDefined = (input: any): boolean => {
    return input !== undefined;
}

export const getDefinedOrReturnNotFound = (input: string | undefined): string => {
    if(input === undefined) {
        return "Inhalt nicht gefunden";
    }
    return input;
}