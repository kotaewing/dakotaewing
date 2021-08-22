import React, { useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../Header';
import AboutMe from '../AboutMe';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [categories] = useState([
    {
      name: 'About Me',
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: 'Portfolio', description: "Portraits of people in my life" },
    { name: 'Contact', description: 'Delicious delicacies' },
    {
      name: 'Resume',
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

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
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
        />
        <main>
          {!contactSelected ? (
            <>

            </>
          ) : (
            <p>This is default</p>
          )}
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
