import React from "react";
import "./Clock.css"

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(ms => this.tick(ms),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() { this.setState({ date: new Date() }) }
    render() {
        return (
        <div className="Clock">
            <div className="lander">
                <h1>Welcome</h1>
                <p className="text-muted">You are well connected...
                </p>
                <h2>It is { this.state.date.toLocaleTimeString()}</h2>
            </div>
        </div>
        );
    }
}


