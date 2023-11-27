import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import NavBar from './components/navBar';
import Theme from './theme/theme'
import Details from './components/Details';
import SectionContextProvider from './context/SectionContextProvider';
import MapContextProvider from './context/MapContextProvider';
import Home from './pages/Home';
import AboutComponent from './components/AboutComponent';
import BackgroundComponent from './components/BackgroundComponent';
import ContactsComponent from './components/ContactsComponent';
import NewsComponent from './components/NewsComponent';
import Footer from './components/Footer';
import Map from './components/Map';


function App() {
  const queryClient = new QueryClient();

  return (
    <Theme>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            {/* Add your routes here */}
            <Route path='/' element={<>
              <SectionContextProvider>
                <Home />
              </SectionContextProvider>
              <Footer />
            </>} />

            <Route path='/datails' element={<>
              <NavBar />
              <Details />
              <Footer />
            </>} />
            <Route path='/about' element={<>
              <NavBar />
              <AboutComponent />
              <Footer />
            </>} />
            <Route path='/contacts' element={<>
              <NavBar />
              <BackgroundComponent>
                <ContactsComponent />
              </BackgroundComponent>
              <Footer />
            </>} />
            <Route path='/news' element={<>
              <NavBar />
              <BackgroundComponent>
                <NewsComponent />
              </BackgroundComponent>
              <Footer />
            </>} />
            <Route path='/map' element={<>
              <MapContextProvider>
                <NavBar />
                <Map />
              </MapContextProvider>
            </>} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </Theme>
  );
}

export default App;
//"prop-types": "^15.8.1",