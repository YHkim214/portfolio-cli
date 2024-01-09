import './App.css';
import Main from './pages/Main';
import Header from './pages/Header';
import Footer from './pages/Footer';
import { BrowserRouter } from 'react-router-dom';
import { MemberContextProvider } from './contexts/MemberContext';

function App() {
  return (
    <MemberContextProvider>
      <BrowserRouter>
        <div className="App">
          <Header/>
          <Main/>
          <Footer/>
        </div>
      </BrowserRouter>
    </MemberContextProvider>
  );
}

export default App;
