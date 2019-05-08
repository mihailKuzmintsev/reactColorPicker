import React, { Component } from "react";
import ColorBox from "../ColorBox";
import Navbar from "../Navbar";
import Footer from "../Footer";

class SingleColorPage extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex" };
    this._shades = this.getShades(this.props.palette, this.props.colorId);
  }

  changeFormat = format => {
    this.setState({ format });
  };

  getShades = (palette, colorId) => {
    let shades = [];

    for (let shade in palette.colors) {
      shades.push(palette.colors[shade].find(color => colorId === color.id));
    }
    return shades.slice(1);
  };

  render() {
    const { format } = this.state;
    const { emoji, paletteName } = this.props.palette;

    const colorBoxes = this._shades.map(color => {
      return (
        <ColorBox
          color={color[format]}
          name={color.name}
          key={color.name}
          showMore={false}
        />
      );
    });

    return (
      <div className="Palette">
        <Navbar changeFormat={this.changeFormat} showLevels={false} />
        <div className="Palette-colors">{colorBoxes}</div>
        <Footer emoji={emoji} paletteName={paletteName} />
      </div>
    );
  }
}

export default SingleColorPage;
