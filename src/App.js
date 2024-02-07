import './App.css';
import PageRoutes from './components/layout/PageRoutes';
import GlobalStyle from './components/styled/global.styled';
import { GlobalContextProvider } from './contexts/GlobalContext';
import { LiveStreamContextProvider } from './contexts/LiveStreamContext';
import { MemberContextProvider } from './contexts/MemberContext';

function App() {
  return (
    <>
      <GlobalContextProvider>
          <MemberContextProvider>
            <LiveStreamContextProvider>
            <GlobalStyle/>
            <div className="App" style={{display:"flex"}}>
              <PageRoutes/>
            </div>
            </LiveStreamContextProvider>       
          </MemberContextProvider>
      </GlobalContextProvider>     
    </>
  );
}

export default App;
