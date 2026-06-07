import { Bounce, ToastContainer } from 'react-toastify';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { useTheme } from './contexts/ThemeContext';


function App() {
  const { theme } = useTheme();
  return (
    <>
      <div className="dark:bg-[#252128] transition-colors duration-300">
        <div className="flex flex-col max-w-6xl mx-auto gap-22 ">
          <Header />
          <Hero />
          <Skills />
          <Profile />
          <Projects />
        </div>
      </div>
      <Footer />
      <ToastContainer position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme}
        transition={Bounce} />

    </>
  )
}

export default App
