import React, { PureComponent, Fragment } from "react";
import Button from "restaurant/Button";
console.log("this is app.jsx");
class App extends PureComponent {
  componentDidMount() {}

  render() {
    return (
      <Fragment>
        <h1>Browse Frontend</h1>
        <Button></Button>
      </Fragment>
    );
  }
}

export default App;
