import React from "react";
import {Grid, Typography} from "@material-ui/core";

export default function Home() {
    return (
        <div>
            <Grid container>
               <Grid item sm={7}>
                    <Typography>
                        Herzlich Willkommen bei AIDALI Handmade!
                        Schön, dass du den Weg auf meine Website gefunden hast. Meine Stoffauswahl wird regelmäßig aktualisiert und meine Produktauswahl immer weiter vergrößert.
                        Schau dich um und nimm Kontakt auf. Ich freue mich schon darauf, dir und deinen Lieben NEUE LIEBLINGSTEILE zu nähen!
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
