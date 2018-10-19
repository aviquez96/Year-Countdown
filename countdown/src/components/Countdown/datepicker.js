import React from 'react'

const Datepicker = (props) => {
    return (
        <form action="">
            <div className="field is-grouped is-grouped-centered" style={{marginBottom: 40}}>
                <p className="control">
                    <input className="input is-medium is-rounded" type="text" placeholder="Type a date..."/>
                </p>
                <p className="control">
                    <a className="button is-light is-outlined is-medium is-rounded">
                    Reset
                    </a>
                </p>
            </div>
        </form>
    )
}

export default Datepicker;