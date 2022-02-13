import React, {Component} from "react";

import APIURL from '../../helpers/environment';
import NotesDisplay from './coffeeNotesDisplay';
//note types and props
type Notes = {
    drinkName: string,
    drinkTemp: any,
    content: string,
    drinkSize: any
};

class DrinkNotes extends React.Component<{}, Notes> {
    constructor(props:any) {
        super(props)
        this.state = {
            drinkName: " ",
            drinkTemp: " ", 
            content: " ",
            drinkSize: " ",
        };
    }

    //compuent did mount
    componentDidMount = () => {
        Promise.all([
        fetch(`${APIURL}/drinkNote/create`),
        fetch(`${APIURL}/drinkNote/edit/:drinkNote_id`),
        fetch(`${APIURL}/drinkNote/delete/:drinkNote_id`),
        fetch(`${APIURL}/drinkNote/temp/drinkTemp`),
        fetch(`${APIURL}/drinkNote/size/:size`)
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                drinkName: json,
                drinkTemp: json,
                content: json,
                drinkSize: json
            });
        })
    ]);
}

    render() {
      return (
          <div className="mainDiv">
              <div className="Notes">
                < NotesDisplay />
              </div>
          </div>
      )  
    }
}

export default DrinkNotes;
