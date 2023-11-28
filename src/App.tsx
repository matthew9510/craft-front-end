import React from "react";
import {Wrapper} from "./App.styles";
import IntuitNav from "./components/intuit-nav/IntuitNav";
import Footer from "./components/footer/Footer";

function App(): JSX.Element {
  return (
    <Wrapper className="App" data-testid="App">
      <IntuitNav />
      <Footer />
    </Wrapper>
  );
}

export default App;
