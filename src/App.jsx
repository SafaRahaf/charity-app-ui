import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// import Data from './data';
// import Login from './pages/Login';
// import Home from './pages/Home';
// import About from './pages/About';
// import Header from './Header';
// import Footer from './Footer';
// import Contect from './Contect';
// import News from './News';
// import SingleProduct from './components/SingleProduct';

function App() {
  return (
    <div>
      hellow world!
      {/* <Router>
        <>
          <Header />
        </>
        <Routes>
          <>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/users/signin" element={<Login />} />
            <Route path="/contect" element={<Contect />} />
            <Route path="/news" element={<News />} />
            {Data.map((data) => (
              <Route
                key={data.id}
                path={`/singleproduct/:${data.id}`}
                element={<SingleProduct data={data} />}
              />
            ))}
          </>
        </Routes>
        <>
          <Footer />
        </>
      </Router> */}
    </div>
  );
}

export default App;
