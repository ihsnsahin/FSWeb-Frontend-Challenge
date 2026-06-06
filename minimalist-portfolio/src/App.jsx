import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Skills from './components/Skills';


function App() {


  return (
    <>
      <div className="flex flex-col max-w-6xl mx-auto gap-22">
        <Header />
        <Hero />
        <Skills />
        <Profile />
        <Projects />
      </div>
      <Footer />
    </>



  )
}

export default App
