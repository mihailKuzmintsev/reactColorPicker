import React, { Component } from "react";
import Palette from "./components/Palette";
import PaletteList from "./components/PaletteList";
import { Route, Switch } from "react-router-dom";

import seedColors from "./seedColors";
import { generatePalette } from "./colorHelper";
import SingleColorPage from "./components/SingleColorPage/SingleColorPage";

class App extends Component {
  findPalette = id => {
    return seedColors.find(palette => palette.id === id);
  };

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={routeProps => (
            <PaletteList palettes={seedColors} {...routeProps} />
          )}
        />
        <Route
          exact
          path="/palette/:id"
          render={routeProps => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={routeProps => (
            <SingleColorPage
              palette={generatePalette(
                this.findPalette(routeProps.match.params.paletteId)
              )}
              colorId={routeProps.match.params.colorId}
            />
          )}
        />
      </Switch>
      // <div className="App">
      //   <Palette palette={generatePalette(seedColors[6])} />
      // </div>
    );
  }
}

export default App;
