import React from "react";
import {Typography} from "@material-ui/core";
import "../design/Text.css"
import {SITE_UNDER_CONSTRUCTION_ABOUT_ME, SITE_UNDER_CONSTRUCTION_ALL} from "../GlobalSettings";
import SiteUnderConstructionComponent from "../components/SiteUnderConstructionComponent";

export default function AboutMe() {
    return (
        SITE_UNDER_CONSTRUCTION_ALL || SITE_UNDER_CONSTRUCTION_ABOUT_ME ?
            <SiteUnderConstructionComponent/>
            :
        <Typography>
            <h1 className={"headerText"}>Über mich</h1>
            <div className={"mainText"}>
                Hallo, ich bin Annika – es freut mich, deine Bekanntschaft zu machen!
            </div>
            <div className={"mainText"}>
                Ich bin 27 Jahre jung und arbeite eigentlich in der Feinoptik – handwerkliches Fingerspitzengefühl
                brauche ich also ebenso in meinem Hauptberuf.
            </div>
            <div className={"mainText"}>
                Schon als Kind habe ich immer gerne gebastelt und habe mir sehr früh das mit dem Nähen,
                Stricken und Häkeln bei meiner Mutter abgeschaut. Da sie das professionell gelernt hat, hat
                sie mich dabei natürlich immer von Herzen gerne unterstützt und unterwiesen.
            </div>
            <div className={"mainText"}>
                Als in meinem Freundeskreis dann der erste Nachwuchs unterwegs war, habe ich beschlossen, die
                Nähmaschine wieder hervorzuholen und seither ist sie aus meinem Alltag nicht mehr wegzudenken.
            </div>
            <div className={"mainText"}>
                Zuerst habe ich nur im privaten Kreis genäht und verschenkt, nachdem aber immer mehr Anfragen von
                Bekannten und Freunden von Freunden kamen, meldete ich Gewerbe an und biete seither meine
                Handwerkskunst jedem an, der Freude an schönen Einzelstücken hat.
            </div>
            <div className={"mainText"}>
                Jedes Lieblingsteil wird mit viel Liebe zum Detail extra für dich angefertigt - da ich eine
                Ein-Frau-Produktion bin, bespreche ich am liebsten individuell, wieviel Zeit die Herstellung
                meiner Produkte in Anspruch nimmt.
            </div>
            <div className={"mainText"}>
                Ich freue mich, von dir zu hören!
            </div>
        </Typography>
    );
}
