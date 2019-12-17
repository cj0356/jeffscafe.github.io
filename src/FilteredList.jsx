import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import List from "./List";
import Navigation from "./Navigation";
import Ournavbar from "./Ournavbar";
import Search from "./Search";
import Labels from "./Labels";

class FilteredList extends Component {
  constructor(props) {
    super(props);

    //The state is just a list of key/value pairs (like a hashmap)
    //TODO (FilteredList): Add an additional state variable within this.state called "type" and set it to a default value
    this.state = {
      type: "all",
      toggleFavorites: "all",
      toggleSorting: "none"
    };
  }


  /*
   * This function gets called every time a new filter type is selected in the dropdown. Your job is to handle the state
   * changes that should occur when a new filter type is selected.
   */
  onSelectFilterType = event => {
    //TODO Set the state of the filter type in this.state
    this.setState({ type: event });
  };

  onSelectAll = () => {
    //TODO Set the state of the filter type in this.state
    this.setState({ type: "all"});
    this.setState({ toggleFavorites: "all"});
  };

  onSelectFavorites = event => {
    this.setState({ toggleFavorites: event });
  };

  onSelectSort = event => {
    this.setState({ toggleSorting: event });
  };

  sortPopularity = () => {
    if (this.state.toggleSorting == "popularity") {
      return this.props.items.sort((a, b) => (a.popularity < b.popularity ? -1 : 1));
     } else {
       return this.props.items.sort((a, b) => (a.order < b.order ? -1 : 1));
     }
  };

  temp() {
    this.forceUpdate();
  }

  /*
   * This function should determine whether the item being passed in matches the type
   * that we are filtering on. Remember that the selected type we are filtering on is stored
   * in this.state!
   * Input: An element from your List component
   * Output: true or false
   */
  matchesFilterType = item => {
    if (this.state.toggleFavorites == "favorites") {
      if (item.favorite) {
        if (this.state.type == "all") {
          return true
        }
        if (item.type.toLowerCase() == this.state.type) {
          return true
        } if (item.subtype.toLowerCase() == this.state.type) {
          return true
        } else {
          return false
        }
      } else {
        return false
      }
    } else {
      if (this.state.type == "all") {
        return true
      }
      if (item.type.toLowerCase() == this.state.type) {
        return true
      } if (item.subtype.toLowerCase() == this.state.type) {
        return true
      } else {
        return false
      }
    }
  }

  /*
   * The function is passed into a builtin filter() function. filter() calls this function on every element
   * in the list. If this function returns true for a given element, filter() will add that element to its
   * return list.
   */
  filterAndSearch = item => {
    this.sortPopularity();
    this.searchItem = item;
    return item.name.toLowerCase().search(this.props.searchItem) !== -1 && this.matchesFilterType(item);
  }

  render() {
    return (
      <React.Fragment>
      <div className="filter-list">
        <div class="dropdown-list">
        <DropdownButton title="Beverages" id="dropdown-basic-button">
          <Dropdown.Item eventKey="beverage" onSelect={this.onSelectFilterType}>
            All Beverages
          </Dropdown.Item>
          <Dropdown.Item eventKey="iced" onSelect={this.onSelectFilterType}>
            Iced
          </Dropdown.Item>
          <Dropdown.Item eventKey="hot" onSelect={this.onSelectFilterType}>
            Hot
          </Dropdown.Item>
          <Dropdown.Item eventKey="caffeine free" onSelect={this.onSelectFilterType}>
            Caffeine Free
          </Dropdown.Item>
        </DropdownButton>
        <DropdownButton title="Baked Goods" id="dropdown-basic-button">
          <Dropdown.Item eventKey="baked good" onSelect={this.onSelectFilterType}>
            All Baked Goods
          </Dropdown.Item>
          <Dropdown.Item eventKey="sweet" onSelect={this.onSelectFilterType}>
            Sweet
          </Dropdown.Item>
          <Dropdown.Item eventKey="savory" onSelect={this.onSelectFilterType}>
            Savory
          </Dropdown.Item>
          <Dropdown.Item eventKey="gluten free" onSelect={this.onSelectFilterType}>
            Gluten Free
          </Dropdown.Item>
        </DropdownButton>
        <DropdownButton title="Sorting" id="dropdown-basic-button">
          <Dropdown.Item eventKey="popularity" onSelect={this.onSelectSort}>
            Popularity
          </Dropdown.Item>
          <Dropdown.Item eventKey="none" onSelect={this.onSelectSort}>
            None
          </Dropdown.Item>
        </DropdownButton>
        <DropdownButton title="Favorites" id="dropdown-basic-button">
          <Dropdown.Item eventKey="favorites" onSelect={this.onSelectFavorites}>
            Display Favorites Only
          </Dropdown.Item>
          <Dropdown.Item eventKey="all" onSelect={this.onSelectFavorites}>
            Display All Items
          </Dropdown.Item>
        </DropdownButton>
        <button id="display-button" onClick={this.onSelectAll}>Display All</button>
        </div>
        <br/>
        <Labels typeLabel={this.state.type} favoritesLabel={this.state.toggleFavorites} sortingLabel={this.state.toggleSorting}/>
        <List items={this.props.items.filter(this.filterAndSearch)} temp={() => this.temp()} />
      </div>
      </React.Fragment>
    );
  }
}

export default FilteredList;
