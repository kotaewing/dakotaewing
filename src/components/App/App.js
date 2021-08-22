import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Header from '../Header';
import AboutMe from '../AboutMe';
import Footer from '../Footer';

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

        />
        <main>
        </main>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
