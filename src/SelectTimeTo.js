import React,{Component} from 'react'
import styles from "./App.module.css";

class SelectTimeTo extends Component{

    constructor(props){
        super(props);
        this.state = {
            selectedTimeSlot:""
        }
    }
    handleSelectedSlotTime = (event) => {
        this.setState({selectedTimeSlot: event.target.value})
    }

    render()
    {
        return (
            <div className={styles.gameList}>
                <label htmlFor="selectid" className={styles.spacing}>
                    To<b className={styles.mandatory}>*</b>:
                </label>

                <input type="Time" value={this.state.selectedTimeSlot} onChange={this.handleSelectedSlotTime}/>
            </div>
        );
    }
}
export default  SelectTimeTo