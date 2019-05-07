import React, { Component } from "react";
import ColorBox from "../ColorBox";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./Palette.css";

export default class Palette extends Component {
  state = {
    level: 500,
    format: "hex"
  };

  changeLevel = level => {
    this.setState({ level });
  };

  changeFormat = format => {
    this.setState({ format });
  };

  render() {
    const { colors, emoji, paletteName, id } = this.props.palette;
    const { level, format } = this.state;

    const colorBoxes = colors[level].map(color => (
      <ColorBox
        color={color[format]}
        name={color.name}
        key={color.id}
        moreURL={`/palette/${id}/${color.id}`}
      />
    ));
    return (
      <div className="Palette">
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          changeFormat={this.changeFormat}
        />
        <div className="Palette-colors">{colorBoxes}</div>
        <Footer emoji={emoji} paletteName={paletteName} />
      </div>
    );
  }
}
