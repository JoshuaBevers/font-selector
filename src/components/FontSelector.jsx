import React, { Component } from 'react';

class FontSelector extends Component {
    state = {
        font: 'fantasy'
    }

    changeHandle = (event) => {
        this.setState({
            font: event.target.value
        })
    }

    render() {
        const fontArray = ['cursive', 'fantasy', 'Times New Roman', 'monospace', 'serif']
        return (
            <div>
                <h1 style={{fontFamily: `${this.state.font}`}}>Quote</h1>
                <select value={this.state.font} onChange={this.changeHandle}>
                    {fontArray.map(font => <option value={font}>{font}</option>)}
                </select>
            </div>
        )
    }
}

export default FontSelector;