import Header from './components/Header';
import Hero from './components/Hero';
import Main from './components/Main';
import WhatIOffer from './components/Offer'
import Skills from './components/Skills';
import ProjectsSection from './components/Projects';
import BlogSection from './components/Blog';
import ContactSection from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero></Hero>
      <Main />
      <WhatIOffer />
      <Skills />    
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
      <Footer />

    </>
  );
}

export default App;
