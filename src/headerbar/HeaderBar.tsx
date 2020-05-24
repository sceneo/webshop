import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import {Container, IconButton} from "@material-ui/core";
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import Grid from '@material-ui/core/Grid';


function clickInstagram() {
    window.open("https://www.instagram.com/aidali.handmade/", '_blank');
}

function clickFacebook() {
    window.open("https://www.facebook.com/aidali.handmade", '_blank');
}

function clickEmail() {
    window.open("mailto:annika@klingenberg.de?subject=Kontaktaufnahme über die Webseite", 'emailWindow')
}

function clickBackToHome() {
    window.location.reload();
}

export default function HeaderBar() {

    return (
        <div>
            <Grid container justify='space-between'>
                <Grid item sm={5}>
                    <Container color={'white'}>
                        <IconButton color={'primary'} onClick={clickBackToHome} aria-label="Zurück zur Hauptseite">
                            <HomeIcon/>
                        </IconButton>
                    </Container>
                </Grid>
                <Grid item sm={3}>
                    <img src="content/Header.png" alt="Header"/>
                </Grid>
                <Grid item>
                    <IconButton color="secondary" onClick={clickInstagram} aria-label="Instagram">
                        <InstagramIcon htmlColor={'blue'}/>
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton color="secondary" onClick={clickFacebook} aria-label="Facebook">
                        <FacebookIcon htmlColor={'blue'}/>
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton color="secondary" onClick={clickEmail} aria-label="Email">
                        <EmailIcon htmlColor={'blue'}/>
                    </IconButton>
                </Grid>
            </Grid>
        </div>
    );
}
