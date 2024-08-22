import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import Footer from './Components/Footer/Footer';

import About from "./sections/AboutUs/About";
import Connect from './sections/Contact/Contact';
import Hero from './sections/Hero/Hero';
import Services from './sections/Services/Services';
import Testimonials from './sections/Testimonials/Testimonials';

import AboutComponent from "./Components/About/AboutComponent";
import ServiceComponent from "./Components/Services/ServiceComponent";

const App = () => {
    return (
        <Router>
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Hero />
                            <Services />
                            <About />
                            <Testimonials />
                            <Connect />
                        </>
                    } />
                    <Route path="/about" element={<AboutComponent />} />
                    <Route path="/services" element={<ServiceComponent />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
