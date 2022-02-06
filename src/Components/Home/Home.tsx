import React from "react"
import './Home.css';
import {FaCoffee} from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import blackRec from './blacrec.png';
import coffeePour from './coffeepour.jpeg';
import {Button} from 'react-bootstrap';
import topgraph from "./coffehousetophome.svg";








class Home extends React.Component {
    constructor(props: {}) {
        super(props)
    }

    render() {
        return (
            <div>
            <div className="Home">
            <div className="homemuglogo">
                < FaCoffee size={'800px'} />
            </div>
            <text 
            className="Hometitle">
            Premium Taste{"\n"}
            Luxury Service
            </text>
            <p className="hometextpassage">
             It's finally here! Premium roasted coffee is now available{"\n"}
             in your hometown. No need to drive out of town to get{"\n"}
             your luxury coffee fix. Our coffee is made from coffee{"\n"}
             beans imported from the South American continent.{"\n"}
             GRIND HOUSE also offer specialty teas, ice coffee{"\n"}
             and other non caffeinated drinks such as luxury hot{"\n"}
             chocolate.
            </p>
            <Button variant="primary" size="lg" className="custom-btn">Home</Button>{" "}
            <div className="CoffeeMenuHome">
            <p className="menuHTitle">
            Coffee Menu @{"\n"}
            Your Finger Tips
            </p>
           
            <p className="menuHomeText">
              We offer a varity of different luxury{"\n"}
              beverages to quench your everlasting{"\n"}  
              thrist. We offer iced and hot coffee,{"\n"}
              specialze teas and custom hot{"\n"}
              chocolate for the kiddios. Not really{"\n"}
              a coffee drinker? No problem, we also{"\n"}
              offer Coca-Cola and Pespi products!{"\n"}
            </p>
            <img src={blackRec} className="blackRec"></img>
            <img src={coffeePour} className="coffeePour"></img>
            <Button variant="secondary" size="lg" id="custom-btn">Menu</Button>
            <img src={topgraph} className="top"></img>
            
           
            <div className="ReviewsHome">
          
                
            </div>
            </div>
                </div>
           
            </div>
        )
    }
}



export default Home;