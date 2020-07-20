import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {removeHashtag} from "../utils/Hashtag";
import {checkIfPriceExists} from "../utils/Price";
import {checkIfSizeExists} from "../utils/Size";


interface DirectBuyComponentProps {
    img: string;
    description: string;
    price: string;
    size: string;
}

export default function DirectBuyComponent(props: DirectBuyComponentProps) {

    return (
        <div>
            <Card>
                <CardContent>
                    {/*<img src={"content/PolaroidFrame.png"} alt={"Frame"}/>*/}
                    {/*<img src={props.img} alt={"Product"}/>*/}
                    <Typography>
                        {removeHashtag(props.description)}
                    </Typography>
                    <Typography>
                        {checkIfSizeExists(props.size)}
                    </Typography>
                    <Typography>
                        {checkIfPriceExists(props.price)}
                    </Typography>
                    <Typography>
                        {props.description}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}