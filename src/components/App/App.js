import React, { useState } from 'react';
import Header from '../Header';
import AboutMe from '../AboutMe';
import Footer from '../Footer';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Resume from '../Resume';

function App() {
  const [projectArray] = useState([
    {
      title: 'My Garden',
      link: 'link here',
      github: 'github here',
      thumbnail: 'my-garden.png'
    },
    {
      title: 'Weather Dashboard',
      link: 'link here',
      github: 'github here',
      thumbnail: 'weather-dashboard.png'
    },
    {
      title: 'book-search',
      link: 'link here',
      github: 'github here',
      thumbnail: 'book-search.png'
    },
    {
      title: 'On The Road',
      link: 'link here',
      github: 'github here',
      thumbnail: 'otr.png'
    },
    {
      title: 'Painterly',
      link: 'link here',
      github: 'github here',
      thumbnail: 'painterly.png'
    },
    {
      title: 'Coding Quiz',
      link: 'link here',
      github: 'github here',
      thumbnail: 'coding-quiz.png'
    }
  ])

  const [renderAbout, setRenderAbout] = useState(true);
  const [renderPortfolio, setRenderPortfolio] = useState(false);
  const [renderContact, setRenderContact] = useState(false);
  const [renderResume, setRenderResume] = useState(false);

  return (
    <div>
      <div>
        <Header
          setRenderAbout={setRenderAbout}
          setRenderPortfolio={setRenderPortfolio}
          setRenderContact={setRenderContact}
          setRenderResume={setRenderResume}
        />
        <main>
          {renderAbout && <AboutMe />}
          {renderPortfolio && <Portfolio projects={projectArray} />}
          {renderContact && <Contact />}
          {renderResume && <Resume />}
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
