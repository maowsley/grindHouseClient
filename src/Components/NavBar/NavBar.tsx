import React from "react"
import './NavBar.css';








class Navbar extends React.Component {
    constructor(props: {}) {
        super(props)
    }

    render() {
        return (
            <div className="NavBar">
              
                <div className="LogoText">GRINDHOUSE</div>
                <div className="CoffeeSearchHome">Menu</div>
                <div className="HomeHome">Home</div>
                <div className="ReviewsH">Reviews</div>
                <div className="CoffeeNotesH">CoffeeNotes</div>
            
            </div>

        )
    }
}



export default Navbar;