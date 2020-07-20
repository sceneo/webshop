import React from "react";
import './Polaroid.css'
import {Typography} from "@material-ui/core";
import {removeHashtag} from "../utils/Hashtag";
import {checkIfSizeExists} from "../utils/Size";
import {checkIfPriceExists} from "../utils/Price";
// import Typography from "@material-ui/core/Typography";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import {removeHashtag} from "../utils/Hashtag";
// import {checkIfPriceExists} from "../utils/Price";
// import {checkIfSizeExists} from "../utils/Size";
// <div>
//     <Card>
//         <CardContent>
//             <img src={"content/PolaroidFrame.png"} alt={"Polaroid"} className={'polaroid'}/>
//             <img src={props.img} alt={"Product"} className={'polaroidimage'}/>
//             <Typography>
//                 {removeHashtag(props.description)}
//             </Typography>
//             <Typography>
//                 {checkIfSizeExists(props.size)}
//             </Typography>
//             <Typography>
//                 {checkIfPriceExists(props.price)}
//             </Typography>
//             <Typography>
//                 {props.description}
//             </Typography>
//         </CardContent>
//     </Card>
// </div>

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


