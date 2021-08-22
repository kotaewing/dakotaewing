import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Header from '../Header';
import AboutMe from '../AboutMe';
import Footer from '../Footer';
import Portfolio from '../Portfolio';

function App() {
  const [projectArray] = useState([
    {
      title: 'My Garden',
      description: 'The description goes here',
      link: 'link here',
      github: 'github here',
      thumbnail: 'thumbnail here'
    },
    {
      title: 'My Garden',
      description: 'The description goes here',
      link: 'link here',
      github: 'github here',
      thumbnail: 'thumbnail here'
    },
    {
      title: 'My Garden',
      description: 'The description goes here',
      link: 'link here',
      github: 'github here',
      thumbnail: 'thumbnail here'
    },
    {
      title: 'My Garden',
      description: 'The description goes here',
      link: 'link here',
      github: 'github here',
      thumbnail: 'thumbnail here'
    },
    {
      title: 'My Garden',
      description: 'The description goes here',
      link: 'link here',
      github: 'github here',
      thumbnail: 'thumbnail here'
    },
    {
      title: 'My Garden',
      description: 'The description goes here',
      link: 'link here',
      github: 'github here',
      thumbnail: 'thumbnail here'
    }
  ])

  const [renderAbout, setRenderAbout] = useState(true);
  const [renderPortfolio, setRenderPortfolio] = useState(false);
  const [renderContact, setRenderContact] = useState(false);
  const [renderResume, setRenderResume] = useState(false);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: 'dark',
        },
      })
  );

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header
          renderAbout={renderAbout}
          setRenderAbout={setRenderAbout}
          renderPortfolio={renderPortfolio}
          setRenderPortfolio={setRenderPortfolio}
          renderContact={renderContact}
          setRenderContact={setRenderContact}
          renderResume={renderResume}
          setRenderResume={setRenderResume}
        />
        <main>
          {renderAbout && <AboutMe />}
          {renderPortfolio && <Portfolio />}
          {renderContact && <AboutMe />}
          {renderResume && <AboutMe />}
        </main>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
