import React, { Component } from "react";
import ColorBox from "../ColorBox";

class SingleColorPage extends Component {
  constructor(props) {
    super(props);
    this._shades = this.getShades(this.props.palette, this.props.colorId);
  }

  getShades = (palette, colorId) => {
    let shades = [];

    for (let shade in palette.colors) {
      shades.push(palette.colors[shade].find(color => colorId === color.id));
    }
    console.log(shades);
    return shades.slice(1);
  };

  render() {
    const colorBoxes = this._shades.map(color => {
      console.log(color);
      return (
        <ColorBox
          color={color["hex"]}
          name={color.name}
          key={color.id}
          showMore={false}
        />
      );
    });

    return (
      <div className="Palette">
        <h1>Single COlor Page</h1>
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}

export default SingleColorPage;
