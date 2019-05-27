import React from "react";

export default class counter extends React.Component {
    render() {
        BaseAudioContext;
        return (
            <div>
                <div>count: {this.props.count}</div>
                <button onClick={this.props.increment}>increment</button>
                <button onClick={this.props.decrement}>decrement</button>
            </div>
        );
    }
}