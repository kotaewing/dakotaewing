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
      title: 'On The Road',
      link: 'https://ontheroadapp.herokuapp.com/',
      github: 'https://github.com/kotaewing/OnTheRoad',
      thumbnail: 'otr.png'
    },
    {
      title: 'Painterly',
      link: 'https://painter1y.herokuapp.com/',
      github: 'https://github.com/kotaewing/painterly',
      thumbnail: 'painterly.png'
    },
    {
      title: 'My Garden',
      link: 'https://kotaewing.github.io/my-garden/',
      github: 'https://github.com/kotaewing/my-garden',
      thumbnail: 'my-garden.png'
    },
    {
      title: 'book-search',
      link: 'https://dke-book-search.herokuapp.com/',
      github: 'https://github.com/kotaewing/book-search',
      thumbnail: 'book-search.png'
    },
    {
      title: 'Weather Dashboard',
      link: 'https://kotaewing.github.io/my-weather-dashboard/',
      github: 'https://github.com/kotaewing/my-weather-dashboard',
      thumbnail: 'weather-dashboard.png'
    },
    {
      title: 'Coding Quiz',
      link: 'https://kotaewing.github.io/coding-quiz/index.html',
      github: 'https://github.com/kotaewing/coding-quiz',
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
