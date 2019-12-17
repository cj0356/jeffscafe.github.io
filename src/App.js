import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import FilteredList from "./FilteredList";
import Search from "./Search";


const coffeeshop = [
  { name: "Butter Croissant", type: "Baked Good", subtype: "Sweet", picture: "/images/butter_croissant.jpg", favorite: false, popularity: 1, order: 1, price: 3.25},
  { name: "Almond Croissant", type: "Baked Good", subtype: "Sweet", picture: "/images/almond_croissant.jpg", favorite: false, popularity: 11, order: 2, price: 4.25},
  { name: "Macarons", type: "Baked Good", subtype: "Sweet", picture: "/images/macarons.jpg", favorite: false, popularity: 10, order: 3, price: 1.75},
  { name: "Chocolate Chip Cookie", type: "Baked Good", subtype: "Sweet", picture: "/images/chocolate_chip_cookie.jpg", favorite: false, popularity: 18, order: 4, price: 2.75},
  { name: "Breakfast Sandwich", type: "Baked Good", subtype: "Savory", picture: "/images/breakfast_sandwhich.jpg", favorite: false, popularity: 9, order: 5, price: 6.55},
  { name: "Baguette", type: "Baked Good", subtype: "Savory", picture: "/images/baguette.jpg", favorite: false, popularity: 17, order: 6, price: 4.55},
  { name: "Ham & Cheese Croissant", type: "Baked Good", subtype: "Savory", picture: "/images/ham_and_cheese_croissant.jpg", favorite: false, popularity: 8, order: 7, price: 5.75},
  { name: "Chocolate Donut", type: "Baked Good", subtype: "Gluten Free",picture: "/images/chocolate_donut.jpg", favorite: false, popularity: 22, order: 8, price: 3.95},
  { name: "Brownie", type: "Baked Good", subtype: "Gluten Free", picture: "/images/brownie.jpg", favorite: false, popularity: 7, order: 9, price: 4.15},
  { name: "Fudge Cake", type: "Baked Good", subtype: "Gluten Free", picture: "/images/fudge_cake.jpg", favorite: false, popularity: 13, order: 10, price: 5.75},
  { name: "Frappuccino", type: "Beverage", subtype: "Iced", picture: "/images/frappucino.jpg", favorite: false, popularity: 12, order: 11, price: 5.35},
  { name: "Cold Brew", type: "Beverage", subtype: "Iced", picture: "/images/cold_brew.jpg", favorite: false, popularity: 16, order: 12, price: 4.95},
  { name: "Iced Vanilla Latte", type: "Beverage", subtype: "Iced", picture: "/images/iced_vanilla_latte.jpg", favorite: false, popularity: 2, order: 13, price: 4.95},
  { name: "Drip Coffee", type: "Beverage", subtype: "Hot",picture: "/images/drip_coffee.jpg", favorite: false, popularity: 3, order: 14, price: 2.95},
  { name: "Herbal Tea", type: "Beverage", subtype: "Hot", picture: "/images/herbal_tea.jpg", favorite: false, popularity: 20, order: 15, price: 2.25},
  { name: "Chai Tea Latte", type: "Beverage", subtype: "Hot", picture: "/images/chai_tea_latte.jpg",favorite: false, popularity: 4, order: 16, price: 4.95},
  { name: "Hot Coco", type: "Beverage", subtype: "Caffeine Free", picture: "/images/coco.jpg", favorite: false, popularity: 5, order: 17, price: 3.55},
  { name: "Lemonade", type: "Beverage", subtype: "Caffeine Free",  picture: "/images/lemonade.jpg", favorite: false, popularity: 6, order: 18, price: 3.15},
  { name: "Orange Juice", type: "Beverage", subtype: "Caffeine Free",  picture: "/images/orange_juice.jpg", favorite: false, popularity: 14, order: 19, price: 4.05},
  { name: "Cranberry Juice", type: "Beverage", subtype: "Caffeine Free",  picture: "/images/cranberry_juice.jpg", favorite: false, popularity: 21, order: 20, price: 4.05},
  { name: "Apple Juice", type: "Beverage", subtype: "Caffeine Free", picture: "/images/apple_juice.jpg", favorite: false, popularity: 19, order: 21, price: 4.05},
  { name: "Aloe Juice", type: "Beverage", subtype: "Caffeine Free",  picture: "/images/aloe_juice.jpg", favorite: false, popularity: 15, order: 22, price: 4.15},

];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search items={coffeeshop} />
      </div>
    );


  }
}

export default App;
