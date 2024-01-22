import './App.css';
import Layout from './components/Layout';
import GlobalStyle from './components/styled/global.styled';

function App() {
  return (
    <>
      <GlobalStyle/>
      <div className="App" style={{display:"flex"}}>
        <Layout/>
      </div>
    </>
  );
}

export default App;
