import React from "react";
import './Polaroid.css'
import {Typography} from "@material-ui/core";
import {checkIfSizeExists} from "../utils/Size";
import {checkIfPriceExists} from "../utils/Price";

interface DirectBuyComponentProps {
    img: string;
    description: string;
    price: string;
    size: string;
}

export default function DirectBuyComponent(props: DirectBuyComponentProps) {

    return (
        <div>
            <span className="wrapper">
                <span className="item">
                    <span className="polaroid">
                       <img src={props.img} alt={"Product"} />
                            <span className="caption">
                                 <Typography>
                                    {checkIfSizeExists(props.size)}
                                 </Typography>
                                <Typography>
                                     {checkIfPriceExists(props.price)}
                                </Typography>
                                <Typography>
                                    {props.description}
                                </Typography>
                            </span>
                    </span>
                </span>
            </span>
        </div>
    );
}


