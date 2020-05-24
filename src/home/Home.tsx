import React from "react";
import {Grid, Typography} from "@material-ui/core";
import './Home.css'

export default function Home() {
    return (
        <div>
            <Grid container>
                <Grid item sm={6} spacing={1}>
                    <Typography className={"header"}>
                        Herzlich Willkommen bei AIDALI Handmade!
                        <p/>
                    </Typography>
                    <Typography className={"mainText"}>
                        Schön, dass du den Weg auf meine Website gefunden hast. Meine Stoffauswahl wird
                        regelmäßig aktualisiert und meine Produktauswahl immer weiter vergrößert.
                        Schau dich um und nimm Kontakt auf. Ich freue mich schon darauf, dir und deinen Lieben NEUE
                        LIEBLINGSTEILE zu nähen!
                        <p/>
                    </Typography>
                    <Typography className={"footer"}>
                        AIDALI HANDMADE – LIEBLINGSTEILE FÜR EINZELSTÜCKE
                    </Typography>
                </Grid>
                <Grid item sm={3}>
                    <img src={'logo192.png'} alt={'Logo'}/>
                </Grid>
            </Grid>
        </div>
    );
}
