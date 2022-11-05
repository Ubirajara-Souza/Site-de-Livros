import Header from "./components/header";
import Search from "./components/search";
import LastReleases from "./components/lastReleases";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Search />
      <LastReleases />
    </AppContainer>
  );
}

export default App;
