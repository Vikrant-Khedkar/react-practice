import React from 'react'
import Navbar from './Navbar'
import Herosection  from './HeroSection';
import Appsection from './AppSection';
import Cardsection from './CardsSection';
import Footer from './FooterSection';

const App = () => {
    return(
        <div>
        <Navbar/>
        <Herosection/>
        <Appsection/>
        <Cardsection/>
        <Footer/>
        </div>
    );
};

export default App;