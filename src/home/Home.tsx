import React from "react";
import {Grid} from "@material-ui/core";
import './Home.css'
import '../design/Background.css'

export default function Home() {
    return (
        <div>
            <Grid container spacing={1}>
                <Grid item sm={6} >
                    <h3 className={"header"}>
                         Herzlich Willkommen bei AIDALI Handmade!
                    </h3>
                    <p className={"mainText"}>
                        Schön, dass du den Weg auf meine Website gefunden hast. Meine Stoffauswahl wird
                        regelmäßig aktualisiert und meine Produktauswahl immer weiter vergrößert.
                        Schau dich um und nimm Kontakt auf. Ich freue mich schon darauf, dir und deinen Lieben NEUE
                        LIEBLINGSTEILE zu nähen!
                    </p>
                        <h4 className={"footer"}> AIDALI HANDMADE – LIEBLINGSTEILE FÜR EINZELSTÜCKE </h4>
                </Grid>
                <Grid item sm={3}>
                    <img src={'logo192.png'} alt={'Logo'}/>
                </Grid>
            </Grid>
        </div>
    );
}
