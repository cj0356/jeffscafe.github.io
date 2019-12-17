import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import FilteredList from "./FilteredList";
import {temp} from "./FilteredList";
import Card from 'react-bootstrap/Card';

const pictureArray = [
    {
        photo:"/images/butter_croissant.jpg",
        text: "Project number one"
    }
    // {
    //     photo:secondProjectPhoto,
    //     text: "Project number two"
    // },
    // {
    //     photo:thirdProjectPhoto,
    //     text: "Project number three"
    // },
];

class List extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   //The state is just a list of key/value pairs (like a hashmap)
  //   //TODO (FilteredList): Add an additional state variable within this.state called "type" and set it to a default value
  //   this.state = {
  //     temp: 0
  //   };
  // }

  renderListImages() {
    let faveLabel;
    const items = this.props.items.map(item => {
      if (item.favorite) {
        faveLabel = 'Unfavorite';
      } else {
        faveLabel = 'Favorite';
      }
      return <Card id="items-style">
      <Card.Img variant="top" src= {item.picture} />
      <Card.Body>
      <Card.Title>
      {item.name}
      </Card.Title>
      <Card.Text>
      ${item.price}
      </Card.Text>
      <button id = {item.name} onClick={() => this.changeFavorite(item)}>{faveLabel}</button>
      </Card.Body>
      </Card>
    });
    return (
    <div id="items-list">
    {items}
    </div>
  );
  }

  changeFavorite(item) {
    if (item.favorite) {
      item.favorite = false;
    } else {
      item.favorite = true;
    }
    this.props.temp();
  }

  render() {
    return this.renderListImages();
  }
}

export default List;
