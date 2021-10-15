import React, {Component} from "react";
import {Grid, Typography} from "@material-ui/core";
import {getInstagramFeed} from "../instagram/getInstagram";
import "../design/Text.css"
import {
    MAXIMUM_LOADING_TIME,
    SITE_UNDER_CONSTRUCTION_ALL,
    SITE_UNDER_CONSTRUCTION_DIRECT_BUY
} from "../GlobalSettings";
import SiteUnderConstructionComponent from "../components/SiteUnderConstructionComponent";
import LoadingDataComponent from "../components/LoadingDataComponent";
import {delay} from "../utils/time";
import { DirectBuyItem, mapInstagramDataToDirectBuy, isDirectBuy } from "./DirectBuyMapper";
import DirectBuyComponent from "../components/DirectBuyComponent";

class DirectBuy extends Component {

    state = {
        isLoading: true as boolean,
        loadingTimer: 0 as number,
        directBuyItems: [] as DirectBuyItem[],
    };

    async componentDidMount() {
        this.doTimer();
        const items = (await getInstagramFeed()).filter(post => isDirectBuy(post)).map(mapInstagramDataToDirectBuy);
        this.setState({
            directBuyItems: items,
            isLoading: false,
        })
    }

    async doTimer() {
        for (let i = 0; i < MAXIMUM_LOADING_TIME + 1; i++) {
            const currentTime = this.state.loadingTimer;
            await delay(1000);
            this.setState({
                loadingTimer: currentTime + 1
            })
        }
    }


    render() {
        return (
            SITE_UNDER_CONSTRUCTION_ALL || SITE_UNDER_CONSTRUCTION_DIRECT_BUY ?
                <SiteUnderConstructionComponent/>
                :
                this.state.isLoading ?
                    <LoadingDataComponent isStillLoading={this.state.loadingTimer <= MAXIMUM_LOADING_TIME}/>
                    :
                    <div>
                        <Typography component="div">
                            <h1 className={"headerText"}>Sofortkäufe</h1>
                            <div className={"mainText"}>
                                Hier findest du Artikel, die sofort für dich verfügbar sind. Es handelt sich auch hier
                                um
                                Unikate, darum sind sie auch nur in der angegebenen Größe und Ausführung vorrätig.
                            </div>
                            <div className={"mainText"}>
                                Dir gefällt ein Set/Artikel unheimlich gut, aber leider ist es die falsche Größe? Oder
                                wünschst du dir zu einem vorhandenen Kleidungsstück noch ein passendes Accessoire?
                                Sprich
                                mich gerne an, zusammen finden wir eine Lösung!
                            </div>
                        </Typography>

                        <Grid container spacing={1}>
                            {this.state.directBuyItems.map(direct => (
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

export default DirectBuy;