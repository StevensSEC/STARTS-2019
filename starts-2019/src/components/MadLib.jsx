import React, { Component } from 'react';

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
const webFonts = [
    'Arial',
    'Arial Black',
    'Tahoma',
    'Trebuchet MS',
    'Verdana',
    'Century Gothic',
    'Geneva',
    'Lucida',
    'Lucida Sans',
    'Lucida Grande',
    'Courier',
    'Courier New',
    'Georgia',
    'Times',
    'Times',
    'Times New Roman',
    'MS Serif',
    'New York',
    'Palatino',
    'Palatino Linotype',
    'Lucida Console',
    'Monaco',
]
function getRandomFont() {
    return webFonts[Math.floor(Math.random() * webFonts.length)];
}
const entryStyle = {
    display:'inline-flex',
    alignItems:'center',
    textAlign:'center',
    borderStyle:'solid',
    backgroundColor:'white',
    border:'5px solid red',
}
const textStyle = {

}
const nameStyle = {
    color: getRandomColor(),
    fontFamily: getRandomFont(),
}
const madlibStyle = {
    color: getRandomColor(),
    fontFamily: getRandomFont(),
}

class MadLib extends Component {
    constructor() {
        super()
        // this.preText = this.props.preText;
    }
    state = {}
    render() { 
        return (
            <div style={entryStyle}>
                <h4 style={textStyle}>{this.props.preText + " "}</h4>
                <h1 style={nameStyle}>{this.props.name + " "}</h1>
                <h4 style={textStyle}>{this.props.midText + " "}</h4>
                <h1 style={madlibStyle}>{this.props.madlib + " "}</h1>
                <h4 style={textStyle}>{this.props.postText}</h4>
            </div>
        );
    }
}
 
export default MadLib;