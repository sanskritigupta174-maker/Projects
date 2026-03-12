import { BrowserRouter } from 'react-router-dom';
import {lazy, Suspense} from 'react';
import { Hero, Navbar} from './components';

const About = lazy(() =>
  import("./components").then((module) => ({ default: module.About })));
const Contact = lazy(() => 
  import("./components").then((module) => ({default: module.Contact})));
const Experience = lazy(() => 
  import("./components").then((module) => ({default: module.Experience})));
const Tech = lazy(() => 
  import("./components").then((module) => ({default: module.Tech})));
const Works = lazy(() => 
  import("./components").then((module) => ({default: module.Works})));
const StarsCanvas = lazy(() => 
  import("./components/canvas").then((module) => ({default: module.StarsCanvas})));

function App() 
{
  return (
    <BrowserRouter>
    <Suspense>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
       <Navbar/>
       <Hero/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        {/* <Feedbacks/> */}
        <div className='relative z-0'>
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
      </Suspense>
      </BrowserRouter>
  )
}

export default App
