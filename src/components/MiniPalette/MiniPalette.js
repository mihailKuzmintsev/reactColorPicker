import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "5px",
    position: "relative",
    padding: "0.5rem",
    overflow: "hidden"
  },
  colors: {
    backgroundColor: "#dae1e4",
    height: "150px",
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden",
    display: "flex",
    flexWrap: "wrap"
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    color: "black",
    fontSize: "1rem",
    paddingTop: "0.5rem"
  },
  emoji: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem"
  },
  miniColor: {
    height: "25%",
    width: "20%",
    display: "inline-block"
  }
};

function MiniPalette(props) {
  const { classes, paletteName, emoji, colors } = props;

  const miniColors = colors.map(color => (
    <div
      className={classes.miniColor}
      style={{ backgroundColor: color.color }}
      key={color.name}
    />
  ));

  return (
    <div className={classes.root} onClick={props.handleClick}>
      <div className={classes.colors}>{miniColors}</div>
      <div className={classes.title}>
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
      </div>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
