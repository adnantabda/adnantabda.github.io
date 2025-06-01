import Header from './components/Header';
import Hero from './components/Hero';
import Main from './components/Main';
import Skills from './components/Skills';
import ProjectsSection from './components/Projects';
import ContactSection from './components/Contact';
import Footer from './components/Footer';
import AboutMe from './components/Main';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
