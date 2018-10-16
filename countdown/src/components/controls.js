import React from 'react'

class Controls extends React.Component {
    render() {
        return (
            <div className="field is-grouped is-grouped-centered">
                <p className="control">
                    <button className="button is-dark is-outlined is-medium" disabled={this.props.paused}>
                        Resume
                    </button>
                </p>
                <p className="control">
                    <button className="button is-danger is-outlined is-medium" disabled={!this.props.paused}>
                        Pause
                    </button>
                </p>
            </div>
        )
    }
}

export default Controls