import React, { Component } from "react";
import List from "./List";
import Navigation from "./Navigation";
import Ournavbar from "./Ournavbar";
import FilteredList from "./FilteredList";

class Search extends Component {
  constructor(props) {
    super(props);

    //The state is just a list of key/value pairs (like a hashmap)
    //TODO (FilteredList): Add an additional state variable within this.state called "type" and set it to a default value
    this.state = {
      search: "",
    };
  }

  //Sets the state whenever the user types on the search bar
  onSearch = event => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  }



render(){
  return (
    <React.Fragment>
    <div>
    <Navigation isHomePage/>
    <br/>
    <input id="search-box" type="text" placeholder="Search" onChange={this.onSearch}/>
    <br/>
    <br/>
    <FilteredList searchItem={this.state.search} items={this.props.items} displayFunc={() => this.onSe}/>
    </div>
    </React.Fragment>
  );
}
}

export default Search;
