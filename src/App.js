import React, { Component } from "react";
// import logo from './aspl5.png';
// import './App.module.css';
import Logo from "./Logo";
import Game from "./Game";
import Floor from "./Floor"
import styles from "./App.module.css";
import GameSlot from "./GameSlot";
import SelectDate from "./SelectDate";
//import TimePicker from "react-dropdown-timepicker";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            AsplSports: [
                {id: 1, Game: 'Select Game', Floor: []},
                {id: 2, Game: 'Carrom', Floor: [3, 6, 7]},
                {id: 3, Game: 'Table Tennis', Floor: [6,7]}
            ],

            Slot:[
                {id:1, Gameslot:'7:00 to 7:30'},
                {id:2, Gameslot:'7:30 to 8:00'},
                {id:3, Gameslot:'8:00 to 8:30'},
                {id:4, Gameslot:'8:30 to 9:00'}
            ],
            selectedGame:'Select Game'

        }
    }


    onGameChange = (event) => {
        console.log('in onGameChange:event.target:', event.target)
        this.setState({selectedGame: event.target.value})
    }

  render() {

      let gameObjects = this.state.AsplSports.filter((element)=>element.Game === this.state.selectedGame)
    return (
      <div className={styles.App}>
        <header className={styles["App-header"]}>
          {/*<img src={aspl2} className="App-sports" alt="logo" />*/}
          <Logo />
        </header>
        <Game selectedGame={this.state.selectedGame} onGameChange={this.onGameChange}/>

        <Floor floors={gameObjects[0].Floor}/>
        <SelectDate/>
        <GameSlot/>

        <div className={styles.gameList}>
          <p className={styles.spacing}>
            Number of Players<b className={styles.mandatory}>*</b>:
          </p>
          <select>
            <option>Select number of players</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
        <div className={styles.gameList}>
          <p className={styles.spacing}>
            Enter your NTID<b className={styles.mandatory}>*</b>:
          </p>
          <input type="input" placeholder="Enter Employee NTID" />
          <br />
        </div>
        <div className={styles.submitSpacing}>
          <input type="button" value="Submit" />
          <input type="button" value="Cancel" />
          </div>
      </div>
    );
  }
}
export default App;
