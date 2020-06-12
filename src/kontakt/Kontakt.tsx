import React, {Component} from "react";
import {Button, Grid, Typography} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

import './Kontakt.css'
import {assembleContactEmail} from "../notification/Notification";

class Kontakt extends Component {
    state = {
        name: "",
        email: "",
        request: "",
        isButtonDisabled: true,
    }

    disableButton = () => {
        this.setState({
            isButtonDisabled: true
        })
    };

    enableButton = () => {
        this.setState({
            isButtonDisabled: false
        })
    };

    checkCurrentForm = () => {
        if (this.state.name === "" ||
            this.state.email === "" ||
            !this.state.email.includes("@") ||
            this.state.request === "") {
            this.disableButton();
        } else {
            this.enableButton();
        }
    };

    setName = (event: any) => {
        this.setState({
            name: event.target.value
        });
        this.checkCurrentForm();
    };

    setEmail = (event: any) => {
        this.setState({
            email: event.target.value
        });
        this.checkCurrentForm();
    };

    setRequest = (event: any) => {
        this.setState({
            request: event.target.value
        });
        this.checkCurrentForm();
    };

    handleSubmit = () => {
        window.open(assembleContactEmail(this.state.email, this.state.name, this.state.request));
        this.setState({
            name: '',
            email: '',
            request: '',
            isButtonDisabled: true,
        })
    }

    render() {
        return (
            <div>
                <Typography>
                    <h1>Kontakt</h1>
                </Typography>
                <Grid container spacing={1}>
                    <Grid item sm={12}>
                        <TextField className={'contactLine'} onChange={this.setName} id="filled-basic-Name" label="Name"
                                   placeholder="Vorname Nachname" variant="filled"/>
                    </Grid>
                    <Grid item sm={12}>
                        <TextField className={'contactLine'} onChange={this.setEmail} id="filled-basic-Email" label="Email"
                                   placeholder="Max@Mustermann.de"
                                   variant="filled"/>
                    </Grid>
                    <Grid item sm={12}>
                        <TextField
                            className={'contactLine'}
                            onChange={this.setRequest}
                            id="filled-textarea"
                            label="Ihre Anfrage"
                            placeholder="Anfrage"
                            multiline
                            rows={8}
                            variant="filled"
                        />
                    </Grid>
                    <Grid item sm={12}>
                        <Button onClick={this.handleSubmit} color="primary" disabled={this.state.isButtonDisabled}>
                            Anfrage erstellen
                        </Button>
                    </Grid>
                </Grid>
                <Typography>
                    <br/>
                    <br/>
                    <br/>
                    Aus rechtlichen Gründen (DSGVO) stellen wir lediglich eine Email für dich zusammen - der Versand
                    erfolgt dann wie gewohnt über dein Mailprogramm.
                </Typography>
            </div>
        );
    }
}

export default Kontakt;