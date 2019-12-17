import React, { Component } from "react";
import List from "./List";
import Navigation from "./Navigation";
import Ournavbar from "./Ournavbar";
import FilteredList from "./FilteredList";

class Labels extends Component {
  constructor(props) {
    super(props);

    //The state is just a list of key/value pairs (like a hashmap)
    //TODO (FilteredList): Add an additional state variable within this.state called "type" and set it to a default value
    this.state = {
    typeLabel  : "",
    sortingLabel  : "",
    favoritesLabel  : ""
    };
    this.updateState = this.updateState.bind(this);
  }

  updateState(nextProps) {
    this.setState({ typeLabel: nextProps.typeLabel, sortingLabel: nextProps.sortingLabel, favoritesLabel: nextProps.favoritesLabel });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props != nextProps) {
      this.updateState(nextProps);
    }
  }

render(){
  let itemTypeLabel;
  if (this.state.typeLabel == "all" || this.state.typeLabel == "") {
    itemTypeLabel = "All Items";
  } else if (this.state.typeLabel == "beverage") {
    itemTypeLabel = "All Beverages"
  } else if (this.state.typeLabel == "iced") {
    itemTypeLabel = "Iced Beverages"
  } else if (this.state.typeLabel == "hot") {
    itemTypeLabel = "Hot Beverages"
  } else if (this.state.typeLabel == "caffeine free") {
    itemTypeLabel = "Caffeine Free Beverages"
  } else if (this.state.typeLabel == "sweet") {
    itemTypeLabel = "Sweet Baked Goods"
  } else if (this.state.typeLabel == "savory") {
    itemTypeLabel = "Savory Baked Goods"
  } else if (this.state.typeLabel == "gluten free") {
    itemTypeLabel = "Gluten Free Baked Goods"
  } else {
    itemTypeLabel = "All Baked Goods"
  }
  let sortingTypeLabel;
  if (this.state.sortingLabel == "none" || this.state.sortingLabel == "") {
    sortingTypeLabel = "None";
  } else {
    sortingTypeLabel = "Popularity";
  }
  let favoritesTypeLabel;
  if (this.state.favoritesLabel == "all" || this.state.favoritesLabel == "") {
    favoritesTypeLabel = "All Items";
  } else {
    favoritesTypeLabel = "Favorites Only"
  }
  return (
    <div class="labels-list" >
    <div id="box">
      Item Type: {itemTypeLabel}
    </div>
    <div id="box">
      Sorting Method: {sortingTypeLabel}
    </div>
    <div id="box">
      Favorites: {favoritesTypeLabel}
    </div>
    </div>
  );
}
}

export default Labels;
