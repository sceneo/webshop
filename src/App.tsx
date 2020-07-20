import React, { Component } from "react";
import './design/Background.css';
import './App.css';
import Menu from "./Menu";
import BottomNavigationBar from "./bottomnavigation/BottomNavigationBar";
import HeaderBar from "./headerbar/HeaderBar";

class App extends Component {
    render() {
        return (
            <div className={'Background'}>
                <HeaderBar/>
                <Menu />
                <BottomNavigationBar/>
            </div>
        );
    }
}

export default App;