import React from "react";
import '../design/Polaroid.css'
import {Typography} from "@material-ui/core";
import {isDefined} from "../utils/Undefined";

interface GaleryComponentProps {
    img: string;
    description?: string;
}

export default function GaleryComponent(props: GaleryComponentProps) {

    return (
        <div>
            <span className="wrapper">
                <span className="item">
                    <span className="polaroid">
                       <img src={props.img} alt={"Product"}/>
                            <span className="caption">
                                {isDefined(props.description) ?
                                    <>
                                        <Typography>
                                            {props.description}
                                        </Typography>
                                    </>
                                    :
                                    <></>
                                }
                            </span>
                    </span>
                </span>
            </span>
        </div>
    );
}


