import React from "react";
import {Wrapper, Greeting, RouterWrapper, StyledLink} from "./App.styles";
import IntuitNav from "./components/intuit-nav";
import Footer from "./components/footer";
import InterviewSpace from "./components/interview-space";
import PriorDevExperienceAtIntuit from "./components/prior-experience-at-intuit";
import {Route, Routes, Outlet} from "react-router-dom";
function App(): JSX.Element {
  return (
    <Wrapper className="App" data-testid="App">
      <StyledLink to="/">
        <IntuitNav />
        <Greeting>
          Hello again Intuit, it&apos;s a pleasure to be back!
        </Greeting>
      </StyledLink>
      <RouterWrapper>
        <Routes>
          <Route path="/" element={<PriorDevExperienceAtIntuit />} />
          <Route path="/interview-workspace" element={<InterviewSpace />} />
        </Routes>
        <Outlet />
      </RouterWrapper>
      <Footer />
    </Wrapper>
  );
}

export default App;
