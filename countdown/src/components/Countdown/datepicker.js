import React from 'react'
import moment from 'moment'

class Datepicker extends React.Component {
    state = {
        date: '' 
    }

    // Arrow functions preserve the context of the function
    handleDateChange = (e) => {
        this.setState({
            date: e.target.value
        })
    }

    handleDateSubmit = (e) => {
        // Prevents the page from refreshing, which allows the state to be changed when the button is
        e.preventDefault();
        // we wrap this.state.date in moment() to change the date from a string into an object
        this.props.onDateReset(moment(this.state.date));
    }

    render () {
        const {date} = this.state

        return ( 
            <form action="" onSubmit={this.handleDateSubmit}>
                <div className="field is-grouped is-grouped-centered" style={{marginBottom: 40}}>
                    <p className="control">
                        <input  className="input is-medium is-rounded" 
                                value={date} 
                                onChange={this.handleDateChange}
                                type="text" 
                                placeholder="Type a date..."/>
                    </p>
                    <p className="control">
                        <button className="button is-light is-outlined is-medium is-rounded">
                        Reset
                        </button>
                    </p>
                </div>
            </form>
        )
    }
}

export default Datepicker;