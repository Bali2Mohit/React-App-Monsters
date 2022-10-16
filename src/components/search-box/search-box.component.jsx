import { Component } from "react";
import './search-box.style.css';

class SearchBox extends Component {
  render() {
    const { placeholder, className, onChangeHandler } = this.props;
    return (
      <div>
        <input
          className={`search-box ${className}`}
          type="search"
          placeholder={placeholder}
          onChange={onChangeHandler}
        />
      </div>
    );
  }
}

export default SearchBox;
