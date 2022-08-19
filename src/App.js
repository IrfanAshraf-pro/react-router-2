import './App.css';
import {BrowserRouter as Router,Routes,Route, } from 'react-router-dom'
import Layout from './components/Layout';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Post from './components/pages/Post';
import Home from './components/pages/Home';
import PostLayOut from './components/PostLayout';
import PostDetail from './components/pages/PostDetail';

function App() {

  return (
    <>
      
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='post' element={<PostLayOut />}>
              <Route path=":category" element={<PostDetail />} />
              <Route index element={<Post/>}/>
              
            </Route>
            <Route index element={<Home />} />

            </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
