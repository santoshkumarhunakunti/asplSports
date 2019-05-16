import React,{Component} from 'react'
import styles from "./App.module.css";

class Players extends Component{

    constructor(props){
        super(props);
        this.state = {
            selectedPlayers:""
        }
    }
    handleSelectedPlayers = (event) => {
        this.setState({selectedPlayers: event.target.value})
    }

    render()
    {
        return (
            <div className={styles.gameList}>
                <label htmlFor="selectid" className={styles.spacing}>
                    Number of players<b className={styles.mandatory}>*</b>:
                </label>

                <select value={this.state.selectedPlayers} onChange={this.handleSelectedPlayers}>
                <option>Select number of players</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
            </select>
            </div>
        );
    }
}
export default  Players