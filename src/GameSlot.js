import React,{Component} from 'react'
import styles from "./App.module.css";

class GameSlot extends Component{

    constructor(props){
        super(props);
        this.state = {
            selectedSlot:""
        }
    }
    handleSelectedSlot = (event) => {
        this.setState({selectedSlot: event.target.value})
    }

    render()
    {
        return (
            <div className={styles.gameList}>
                <label htmlFor="selectid" className={styles.spacing}>
                    Game Slot<b className={styles.mandatory}>*</b>:
                </label>

                <select id="selectid" value={this.state.selectedSlot} onChange={this.handleSelectedSlot}>
                    <option>Select timings</option>
                    <option>7:00 to 7:30</option>
                    <option>7:30 to 8:00</option>
                    <option>8:00 to 8:30</option>
                    <option>8:30 to 9:00</option>
                    <option>9:00 to 9:30</option>
                    <option>9:30 to 10:00</option>
                    <option>10:00 to 10:30</option>
                    <option>10:30 to 11:00</option>
                    <option>11:00 to 11:30</option>
                    <option>11:30 to 12:00</option>
                    <option>12:30 to 13:00</option>
                    <option>13:00 to 13:30</option>
                    <option>13:30 to 14:00</option>
                    <option>14:00 to 14:30</option>
                    <option>14:30 to 15:00</option>
                    <option>15:00 to 15:30</option>
                    <option>15:30 to 16:00</option>
                    <option>16:00 to 16:30</option>
                    <option>16:30 to 17:00</option>
                    <option>17:30 to 18:00</option>
                    <option>18:00 to 18:30</option>
                    <option>18:30 to 19:00</option>
                    <option>19:00 to 19:30</option>
                    <option>19:30 to 20:00</option>
                    <option>20:00 to 20:30</option>
                    <option>20:30 to 21:00</option>
                    <option>21:00 to 21:30</option>
                </select>
            </div>
        );
    }
}
export default  GameSlot