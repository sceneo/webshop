import {CircularProgress} from "@material-ui/core";
import React from "react";

export interface LoadingDataComponentProps{
    isStillLoading: boolean
}

export default function LoadingDataComponent(props: LoadingDataComponentProps) {
    return (
        props.isStillLoading ?
            <div className={"spinner"}>
                <CircularProgress/>
            </div>
            :
            <div>
                Laden der angeforderten Elemente leider fehlgeschlagen - wir arbeiten daran!
            </div>
    );

}