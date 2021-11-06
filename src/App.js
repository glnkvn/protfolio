import React from 'react';
import { Footer , Header } from './layout';
import { Skills, Projects, About } from './components';

function App() {
  return (
    <main>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}

export default App;