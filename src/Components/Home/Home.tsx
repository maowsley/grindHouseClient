import React from "react"
import './Home.css';
import {FaCoffee} from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';






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
            <div className="ReviewsHome">
                
            </div>
            </div>
                </div>
           
            </div>
        )
    }
}



export default Home;