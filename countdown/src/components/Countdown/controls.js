import React from 'react'

const Controls = (props) => { 
    return (
        <div className="field is-grouped is-grouped-centered">
            <p className="control">
                <button className="button is-dark is-outlined is-medium" 
                        disabled={!props.paused} 
                        onClick={props.onToggle}>
                Resume
                </button>
            </p>
            <p className="control">
                <button className="button is-danger is-outlined is-medium" 
                        disabled={props.paused} 
                        onClick={props.onToggle}>
                Pause
                </button>
            </p>
        </div>
    )
}


export default Controls