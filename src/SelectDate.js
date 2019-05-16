import React,{Component} from 'react'
import styles from "./App.module.css";

class SelectDate extends Component{

    constructor(props){
        super(props);
        this.state = {
            selectedDtaeSlot:""
        }
    }
    handleSelectedSlotDate = (event) => {
        this.setState({selectedDtaeSlot: event.target.value})
    }

    render()
    {
        return (
            <div className={styles.gameList}>
                <label htmlFor="selectid" className={styles.spacing}>
                    Date<b className={styles.mandatory}>*</b>:
                </label>

                <input type="Date" value={this.state.selectedDtaeSlot} onChange={this.handleSelectedSlotDate}/>
            </div>
        );
    }
}
export default  SelectDate