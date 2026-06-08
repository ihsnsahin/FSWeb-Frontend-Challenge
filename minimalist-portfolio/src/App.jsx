import { Bounce, ToastContainer } from 'react-toastify';
import './App.css';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { useTheme } from './contexts/ThemeContext';
import Main from './components/Main';



function App() {
  const { theme } = useTheme();
  return (
    <>
      <div className="dark:bg-[#252128] transition-colors duration-300">
        <div className="flex flex-col max-w-6xl  mx-auto gap-22 max-phone:max-w-full max-phone:px-6 max-desktop:px-6">
          <Main />
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
