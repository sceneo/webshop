import React, {Component} from "react";
import {Grid, Typography} from "@material-ui/core";
import {getInstagramFeed} from "../instagram/getInstagram";
import {mapInstagramDataToDirectBuy, DirectBuy} from "./DirectBuyMapper";
import DirectBuyComponent from "../components/DirectBuyComponent";

class Sofortkaufen extends Component {

    state = {
        showSpinner: true as boolean,
        directBuyData: [] as DirectBuy[],
    };


    async componentDidMount() {
        this.setState({
            directBuyData: (await getInstagramFeed()).map(mapInstagramDataToDirectBuy),
        })
    }

    render() {


        return (
            <div>
                <Typography>
                    Hier kannst du Dinge finden, die ich bereits fertig habe und die sofort verfügbar sind - Wenn weg,
                    dann weg.
                </Typography>

                <Grid container>
                    {this.state.directBuyData.map(direct => (
                        <Grid item sm={4}>
                            <DirectBuyComponent img={direct.img} description={direct.description} price={direct.price}
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