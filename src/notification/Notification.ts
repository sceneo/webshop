



export const assembleContactEmail = (email: string, name: string, request:string): string => {
    const SUBJECT = "Kontaktaufname via Aidali Webpage";
    const CONTACT = "HIER_SOLLTE_DANN_ANNIKAS@EMAIL_STEHEN.COM";
    let newDate = new Date(Date.now());

    return 'mailto:'+CONTACT+'?subject='+SUBJECT+'&body='+request+'<br/><br/><br/>Von: '+name+'('+email+')<br/>Uhrzeit: '
        + newDate.toLocaleDateString() + ' ' + newDate.toLocaleTimeString();

}

export const assembleWishlistEmail = (email: string, name: string, request:string): string => {
    const SUBJECT = "Kontaktaufname via Aidali Webpage";
    const CONTACT = "HIER_SOLLTE_DANN_ANNIKAS@EMAIL_STEHEN.COM";
    let newDate = new Date(Date.now());

    return 'mailto:'+CONTACT+'?subject='+SUBJECT+'&body='+request+'<br/><br/><br/>Von: '+name+'('+email+')<br/>Uhrzeit: '
        + newDate.toLocaleDateString() + ' ' + newDate.toLocaleTimeString();

}