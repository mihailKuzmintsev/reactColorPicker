import React, { Component } from "react";
import "./ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";

class ColorBox extends Component {
  state = {
    copied: false
  };

  onCopyColor = () => {
    this.setState({ copied: true }, () => {
      setTimeout(() => {
        this.setState({ copied: false });
      }, 1500);
    });
  };

  render() {
    const { color, name, moreURL, showMore } = this.props;
    const { copied } = this.state;

    return (
      <CopyToClipboard text={color} onCopy={this.onCopyColor}>
        <div className="ColorBox" style={{ backgroundColor: color }}>
          <div
            className={`copy-overlay ${copied && "show"}`}
            style={{ backgroundColor: color }}
          />
          <div className={`copy-msg ${copied && "show"}`}>
            <h1>copied!</h1>
            <p>{color}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span>{name}</span>
            </div>
            <button className="copy-button">Copy</button>
          </div>

          {showMore && (
            <Link to={moreURL} onClick={e => e.stopPropagation()}>
              <span className="see-more">More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
