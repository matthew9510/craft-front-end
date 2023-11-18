import React from 'react';
import { Wrapper } from './App.styles';
import IntuitNav from './Components/IntuitNav/IntuitNav';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Wrapper className='App' data-testid='App'>
      <IntuitNav />
      <Footer />
    </Wrapper>
  );
}

export default App;
