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
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
