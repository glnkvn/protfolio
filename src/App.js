import React from 'react';
import { Footer } from './layout';
import { Skills, Projects } from './components';

function App() {
  return (
    <main>
      <h1>Wellcome to my portfolio!</h1>
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}

export default App;