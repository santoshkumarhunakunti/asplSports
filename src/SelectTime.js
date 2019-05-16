import React,{Component} from 'react'
import styles from "./App.module.css";
import TimePicker from 'rc-time-picker';

class SelectTime extends Component{

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
                    From<b className={styles.mandatory}>*</b>:
                </label>

                <input type="Time" value={this.state.selectedTimeSlot} onChange={this.handleSelectedSlotTime}/>
                <div>
                    <TimePicker
                        theme="classic"
                    />
                </div>
            </div>
        );
    }
}
export default  SelectTime