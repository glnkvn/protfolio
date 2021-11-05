import React from 'react';
import { Footer } from './layout';
import { Skills, Projects, About } from './components';

function App() {
  return (
    <main>
      <h1>Wellcome to my portfolio!</h1>
      <About />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}

export default App;