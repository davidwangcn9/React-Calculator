import React from "react";
import {Board} from "./Board";

export class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: '0',
            operator: null,
            numberA: '0',
            numberB: '0',
        }
    }

    handleClick(newNumber) {
        this.setState((beforeState, props) => {
            if (beforeState.operator == null) {
                let lastValue = '0';
                if (beforeState.numberA === '0') {
                    lastValue = newNumber;
                } else {
                    lastValue = beforeState.numberA + newNumber.toString();
                }
                return {numberA: lastValue, display: lastValue};
            } else {
                let lastValue = '0';
                if (beforeState.numberB === '0') {
                    lastValue = newNumber;
                } else {
                    lastValue = beforeState.numberB + newNumber.toString();
                }
                return {numberB: lastValue, display: lastValue};
            }
        })
    }

    handleFuncClick(name) {
        if (name === "AC") {
            this.setState({
                numberA: '0',
                numberB: '0',
                operator: null,
                display: '0',
            })
        } else if (name !== "=") {
            this.setState({operator: name});
        } else {
            let calValue = 0;
            switch (this.state.operator) {
                case "+":
                    calValue = parseInt(this.state.numberA, 10) + parseInt(this.state.numberB, 10);
                    break;
                case "-":
                    calValue = parseInt(this.state.numberA, 10) - parseInt(this.state.numberB, 10);
                    break;
                case "*":
                    calValue = parseInt(this.state.numberA, 10) * parseInt(this.state.numberB, 10);
                    break;
                case "/":
                    calValue = parseInt(this.state.numberA, 10) / parseInt(this.state.numberB, 10);
                    break;
                default:
                    break;
            }
            this.setState({
                numberA: '0',
                numberB: '0',
                operator: null,
                display: calValue
            })
        }
    }

    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <div className="calScreen">{this.state.display}</div>
                    <Board
                        onClick={(i) => this.handleClick(i)}
                        onFuncClick={(name) => this.handleFuncClick(name)}
                    />
                </div>
            </div>
        );
    }
}
