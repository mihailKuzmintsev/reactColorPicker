import React, { Component } from 'react';
import Palette from './components/Palette';
import { Route, Switch } from 'react-router-dom';

import seedColors from './seedColors';
import { generatePalette } from './colorHelper';

class App extends Component {
  findPalette = id => {
    return seedColors.find(palette => palette.id === id);
  };

  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <h1>Root reactPalettePage</h1>} />
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
      </Switch>
      // <div className="App">
      //   <Palette palette={generatePalette(seedColors[6])} />
      // </div>
    );
  }
}

export default App;
