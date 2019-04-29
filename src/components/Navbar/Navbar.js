import React, { Component } from 'react';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import 'rc-slider/assets/index.css';
import './Navbar.css';

class Navbar extends Component {
  state = {
    format: 'hex',
  };

  handleChange = e => {
    const currentFormat = e.target.value;

    this.setState({ format: currentFormat });
    this.props.changeFormat(currentFormat);
  };

  render() {
    const { level, changeLevel } = this.props;
    const { format } = this.state;

    return (
      <header className="Navbar">
        <div className="logo">
          <a href="#">reactcolorpicker</a>
        </div>
        <div className="slider-container">
          <span className="slider-level">Level: {level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
        <div className="select-container">
          <Select value={format} onChange={this.handleChange}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - (255, 255, 255)</MenuItem>
            <MenuItem value="rgba">RGBA - (255, 255, 255, 1.0)</MenuItem>
          </Select>
        </div>
      </header>
    );
  }
}

export default Navbar;