import React from 'react'
import Timer from './timer.js'
import Controls from './controls.js'
import moment from 'moment'
import Datepicker from './datepicker.js'

class Countdown extends React.Component {
    state = {
        duration: this.getRemaningTime(),
        paused: false
    }

    getRemaningTime () {
        let now = moment();
        let newYear = moment({year: now.year() + 1});
        let difference = newYear.diff(now);

        return moment.duration(difference);
    } 

    tick () {
        this.setState ({
            duration: this.getRemaningTime()
        });
    }

    componentDidMount () {
        this.resume();
    }

    componentWillUnmount() {
        this.pause();
    }

    // Having a method used by a child with the arrow function replaces the this.function = this.function.bind(this)
    // as the context of "this" is still the one of the parent class, in this case, Countdown.
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
    
    render () {
        return (
            <section className="hero is-primary is-bold is-fullheight has-text-centered">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            New Year is coming up!
                        </h1>
                        <section className="section">
                            <Timer duration={this.state.duration}/>
                        </section>
                        <Datepicker />
                        <Controls paused={this.state.paused} onToggle={this.handleToggle}/>
                    </div>
                </div>
            </section>
        )
    }
}

export default Countdown