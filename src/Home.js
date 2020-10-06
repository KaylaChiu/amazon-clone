import React from 'react'
import Product from './Product';

import './Home.css';

function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
            />
            <h1>It seems a baby app, oh shit!</h1>
            
            <div className="home__row">
                <Product 
                    id="123123123"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Pagerback"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
                />
                <Product 
                    id="123123124"
                    title="Jenga Classic Game"
                    price={10.30}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81OAWwX3djL._AC_SY879_.jpg"
                />
            </div>
            
            <div className="home__row">
                <Product 
                    id="123123125"
                    title="CX L SUM Magnetic Dart Board, Indoor Outdoor Dart Games for Kids with 12pcs Magnetic Darts, Safety Toy Games, Rollup Double Sided Board Game Set for Gifts"
                    price={22.88}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61Sldt3TswL._AC_SX425_.jpg"
                />
                <Product 
                    id="123123126"
                    title="Monopoly Classic Game"
                    price={33.00}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81qy%2BMXuxDL._AC_SX425_.jpg"
                />
                <Product 
                    id="123123127"
                    title="Catan The Board Game, Multicolor"
                    price={8.10}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81%2Bokm4IpfL._AC_SX425_.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                    id="123123128"
                    title="Exploding Kittens Card Game - Party Pack for Up to 10 Players - Family-Friendly Party Games - Card Games for Adults, Teens & Kids"
                    price={22.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81GxMOxUDvL._AC_SX425_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
