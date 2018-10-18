import React from 'react'

const Timer = (props) => {
    return (
        <nav className="level">
            <div className="level-item has-text-centered">
                <div>
                    <p className="heading">Days</p>
                    <p className="title">{Math.floor(props.duration.asDays())}</p>
                </div>
            </div>
            <div className="level-item has-text-centered">
                <div>
                    <p className="heading">Hours</p>
                    <p className="title">{Math.floor(props.duration.hours())}</p>
                </div>
            </div>
            <div className="level-item has-text-centered">
                <div>
                    <p className="heading">Minutes</p>
                    <p className="title">{Math.floor(props.duration.minutes())}</p>
                </div>
            </div>
            <div className="level-item has-text-centered">
                <div>
                    <p className="heading">Seconds</p>
                    <p className="title">{Math.floor(props.duration.seconds())}</p>
                </div>
            </div>
        </nav>
    )
}


export default Timer;