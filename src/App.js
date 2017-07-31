import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import Results from "./components/Results";
import Search from "./components/Search";

class App extends Component {
  render() {
    return (
      <div>
        <Container text>
          <Search />
          <Results />
        </Container>
      </div>
    );
  }
}

export default App;
