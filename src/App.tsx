import React, { Component } from "react";
import './App.css';
import Menu from "./Menu";
import BottomNavigationBar from "./bottomnavigation/BottomNavigationBar";
import HeaderBar from "./headerbar/HeaderBar";
import {getInstagramFeed} from "./instagram/getInstagram";

class App extends Component {
    render() {
        return (
            <div>
                <HeaderBar/>
                <Menu/>
                <BottomNavigationBar/>
            </div>
        );
    }
}

export default App;