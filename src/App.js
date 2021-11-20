import { Container } from './styles/Container.styled';
import { Navbar, Intro, Stack, Work } from './components/index'
// import { GlobalStyles } from './styles/Global';


function App() {

  return (
    <div className="App">
      {/* <GlobalStyles> not working : */}
      <Container>
        <Navbar />
        <Intro />
        <Stack />
        <Work />
      </Container>
      {/* </GlobalStyles> */}
    </div>
  );
}
export default App;

