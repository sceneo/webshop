import React from "react";
import {Grid} from "@material-ui/core";
import '../design/Background.css'
import '../design/Text.css'
import {SITE_UNDER_CONSTRUCTION_ALL, SITE_UNDER_CONSTRUCTION_HOME} from "../GlobalSettings";
import SiteUnderConstructionComponent from "../components/SiteUnderConstructionComponent";

export default function Home() {
    return (
        SITE_UNDER_CONSTRUCTION_ALL || SITE_UNDER_CONSTRUCTION_HOME ?
            <SiteUnderConstructionComponent/>
            :
            <div>
                <Grid container spacing={1}>
                    <Grid item sm={6}>
                        <h3 className={"headerText"}>
                            Herzlich Willkommen bei Aidali Handmade!
                        </h3>
                        <p className={"mainText"}>
                            <div>
                                Schön, dass du da bist!
                            </div>
                            <div>
                                Suchst du ein individuelles Geschenk für deine Liebsten oder ein einzigartiges
                                Kleidungsstück
                                oder Accessoire nur für dich? Dann bist du hier genau richtig!
                            </div>
                            <div>
                                Von der Stoffauswahl, dem Anpassen des Schnittmusters bis hin zum Zuschneiden und Nähen
                                – ich
                                fertige dein eigenes Unikat mit viel Liebe und Herzblut.
                            </div>
                            <div>
                                Schau dich um und nimm gerne Kontakt auf – ich freue mich schon darauf, dir und deinen
                                Liebsten
                                neue Lieblingsteile zu nähen!
                            </div>
                        </p>
                        <h4 className={"footer"}> Aidali Handmade – Lieblingsteile für Lieblingsmenschen </h4>
                    </Grid>
                    <Grid item sm={3}>
                        <img src={'logo192.png'} alt={'Logo'}/>
                    </Grid>
                </Grid>
            </div>
    );
}
