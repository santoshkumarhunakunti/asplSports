import React,{Component} from 'react'
import styles from "./App.module.css";
class Game extends Component{

constructor(props){
       super(props);
       this.state = {
           selectedGame:""
       }
}
    handleSelectedGames = (event) => {
        this.setState({selectedGame: event.target.value})
    }

render()
    {
        return (
            <div className={styles.gameList}>
                <label htmlFor="selectid" className={styles.spacing}>
                    Game<b className={styles.mandatory}>*</b>:
                </label>
                <select id="selectid" value={this.props.selectedGame} onChange={this.props.onGameChange}>
                    <option>Select game</option>
                    <option>Carrom</option>
                    <option>Table Tennis</option>
                </select>
            </div>
        );
    }
}
export default  Game