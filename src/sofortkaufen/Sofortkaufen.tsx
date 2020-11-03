import React, {Component} from "react";
import {CircularProgress, Grid, Typography} from "@material-ui/core";
import {getInstagramFeed} from "../instagram/getInstagram";
import {mapInstagramDataToDirectBuy, DirectBuy, isDirectBuy} from "./DirectBuyMapper";
import DirectBuyComponent from "../components/DirectBuyComponent";
import "../design/Text.css"

class Sofortkaufen extends Component {

    state = {
        showSpinner: true as boolean,
        directBuyData: [] as DirectBuy[],
    };


    async componentDidMount() {
        this.setState({
            directBuyData: (await getInstagramFeed()).filter(post => isDirectBuy(post)).map(mapInstagramDataToDirectBuy),
            showSpinner: false,
        })
    }

    render() {
        return (
            this.state.showSpinner ?
                <div className={"spinner"}>
                    <CircularProgress/>
                </div>
                :
                <div>
                    <Typography component="div">
                        <h1 className={"headerText"}>Sofortkäufe</h1>
                        <div className={"mainText"}>
                            Hier findest du Artikel, die sofort für dich verfügbar sind. Es handelt sich auch hier um
                            Unikate, darum sind sie auch nur in der angegebenen Größe und Ausführung vorrätig.
                        </div>
                        <div className={"mainText"}>
                            Dir gefällt ein Set/Artikel unheimlich gut, aber leider ist es die falsche Größe? Oder
                            wünschst du dir zu einem vorhandenen Kleidungsstück noch ein passendes Accessoire? Sprich
                            mich gerne an, zusammen finden wir eine Lösung!
                        </div>
                    </Typography>

                    <Grid container spacing={1} >
                        {this.state.directBuyData.map(direct => (
                            <Grid item sm={6}>
                                <DirectBuyComponent img={direct.img}
                                                    description={direct.description}
                                                    price={direct.price}
                                                    size={direct.size}/>
                                <br/>
                            </Grid>
                        ))}
                    </Grid>

                </div>
        )
            ;
    }
}

export default Sofortkaufen;