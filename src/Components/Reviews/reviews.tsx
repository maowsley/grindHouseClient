
import React, { Component } from 'react';
import { render } from 'react-dom';
import APIURL from '../../helpers/environment';
import ReviewsDisplay from "./reviewsDisplay";

type DataNotes = {
    title: string,
    content: string,
    rating: number,
}

class DrinkReviews extends React.Component<{}, DataNotes> {
    constructor(props:any) {
        super(props)
        this.state = {
            title: " ",
            content: " ",
            rating: 0
        };
    }


    componentDidMount = () => {
        Promise.all([
            fetch(`${APIURL}/reviews/create`),
            fetch(`${APIURL}/reviews/edit/:review_id`),
            fetch(`${APIURL}/reviews/rating/:rating`),
            fetch(`${APIURL}/reviews/delete/review_id`),
            fetch(`${APIURL}/reviews/`)
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    title: json,
                    content: json,
                    rating: json
                    
                });
            })
        ]);
    }

    render() {
        return(
            <div className='mainDiv'>
                <div className='reviewss'>
                    < ReviewsDisplay />
                </div>
            </div>
        )
    }


}


export default DrinkReviews;