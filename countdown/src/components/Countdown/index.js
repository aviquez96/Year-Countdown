import React from 'react'
import Timer from './timer.js'
import Controls from './controls.js'
import moment from 'moment'
import Datepicker from './datepicker.js'

class Countdown extends React.Component {
    state = {
        currentDate: moment(),
        nextDate: moment({year: moment().year() + 1}),
        paused: false
    }

    getRemaningTime () {
        let {currentDate, nextDate} = this.state
        let difference = nextDate.diff(currentDate);

        return moment.duration(difference);
    } 

    tick () {
        this.setState ({
            currentDate: moment()
        });
    }

    componentDidMount () {
        this.resume();
    }

    componentWillUnmount() {
        this.pause();
    }

    // Having a method used by a child with the arrow function replaces the this.function = this.function.bind(this)
    // as the context of "this" is still the one of the parent class, which is, in this case, Countdown.
    handleToggle = () =>  {
        this.setState ((prevState, props) => {
            const paused = !prevState.paused
            if (paused) {
                this.pause();
            } else {
                this.resume();
            }
            return {
                paused
            }
        })
    }
    
    pause () {
        clearInterval(this.interval);
    }

    resume () {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    handleDateReset = (nextDate) => {
        this.setState({
            nextDate: nextDate
        })
    }
    
    render () {
        const {paused} = this.state,
            duration = this.getRemaningTime();

        return (
            <section className="hero is-primary is-bold is-fullheight has-text-centered">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            New Year is coming up!
                        </h1>
                        <section className="section">
                            <Timer duration={duration}/>
                        </section>
                        <Datepicker onDateReset={this.handleDateReset}/>
                        <Controls paused={paused} onToggle={this.handleToggle}/>
                    </div>
                </div>
            </section>
        )
    }
}

export default Countdown