import React, {Component} from "react";
import styles from "./App.module.css";
class Floor extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedFloor:""
        }
    }
    handleSelectedFloors = (event) => {
        this.setState({selectedFloor: event.target.value})
    }

    render()
    {
        //let floor = [3, 6, 7];

        let options = this.props.floors.map((element)=><option>{element}</option>)
            //[<option>3</option>, <option>6</option>, <option>7</option>]

        return (
            <div className={styles.gameList}>
                <label htmlFor="selectid" className={styles.spacing}>
                    Floor<b className={styles.mandatory}>*</b>:
                </label>
                <select id="selectid" value={this.state.selectedFloor} onChange={this.handleSelectedFloors}>
                    <option value="" hidden>Select floor</option>
                    {options.map((element)=>element)}
                </select>
            </div>
        );
    }
}
export default  Floor