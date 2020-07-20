import React, {Component} from "react";
import {CircularProgress, Grid, Typography} from "@material-ui/core";
import {getInstagramFeed} from "../instagram/getInstagram";
import {mapInstagramDataToDirectBuy, DirectBuy, isDirectBuy} from "./DirectBuyMapper";
import DirectBuyComponent from "../components/DirectBuyComponent";

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
                    <Typography>
                        Hier kannst du Dinge finden, die ich bereits fertig habe und die sofort verfügbar sind - Wenn
                        weg,
                        dann weg.
                    </Typography>

                    <Grid container spacing={1}>
                        {this.state.directBuyData.map(direct => (
                            <Grid item sm={4}>
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