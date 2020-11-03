import React, {Component} from "react";
import './design/Background.css';
import './App.css';
import Menu from "./Menu";
import BottomNavigationBar from "./bottomnavigation/BottomNavigationBar";
import HeaderBar from "./headerbar/HeaderBar";

class App extends Component {
    render() {
        // window.history.pushState({page: "another"}, "another page", "example.html");
        // window.history.replaceState('page2', 'Title', '/page2.php');
        return (
            <div className={'Background'}>

                <HeaderBar/>
                <Menu/>
                <BottomNavigationBar/>
            </div>
        );
    }
}

export default App;