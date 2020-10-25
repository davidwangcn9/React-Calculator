import React from "react";
import {Square} from "./Square";

export class Board extends React.Component {
    renderSquare(i) {
        return <Square value={i}
                       onClick={() => this.props.onClick(i)}/>;
    }

    renderFunctionSquare(name) {
        return <Square value={name}
                       onClick={() => this.props.onFuncClick(name)}/>;
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                    {this.renderSquare(9)}
                    {this.renderFunctionSquare('AC')}
                </div>
                <div className="board-row">
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                    {this.renderFunctionSquare('+')}
                </div>
                <div className="board-row">
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                    {this.renderFunctionSquare('-')}
                </div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderFunctionSquare('=')}
                    {this.renderFunctionSquare('*')}
                    {this.renderFunctionSquare('/')}
                </div>
            </div>
        );
    }
}
