import React from 'react'
import moment from 'moment'
import Controls from './controls.js'

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
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    render () {
        const duration = this.state.duration;
        
        return (
            <section className="hero is-primary is-bold is-fullheight has-text-centered">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            New Year is coming up!
                        </h1>
                        <section className="section">
                            <nav className="level">
                                <div className="level-item has-text-centered">
                                    <div>
                                    <p className="heading">Days</p>
                                    <p className="title">{Math.floor(duration.asDays())}</p>
                                    </div>
                                </div>
                                <div className="level-item has-text-centered">
                                    <div>
                                    <p className="heading">Hours</p>
                                    <p className="title">{Math.floor(duration.hours())}</p>
                                    </div>
                                </div>
                                <div className="level-item has-text-centered">
                                    <div>
                                    <p className="heading">Minutes</p>
                                    <p className="title">{Math.floor(duration.minutes())}</p>
                                    </div>
                                </div>
                                <div className="level-item has-text-centered">
                                    <div>
                                    <p className="heading">Seconds</p>
                                    <p className="title">{Math.floor(duration.seconds())}</p>
                                    </div>
                                </div>
                            </nav>
                        </section>
                        <Controls paused={this.state.paused}/>
                    </div>
                </div>
            </section>
        )
    }
}

export default Countdown;