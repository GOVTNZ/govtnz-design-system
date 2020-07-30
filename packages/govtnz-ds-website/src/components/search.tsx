import React from 'react';
import Button from '@govtnz/ds/build/react-ts/Button';
import './search.scss';
import '../commons/styles/components/input.scss';
import '../commons/styles/components/icon.scss';
import '../commons/styles/components/button.scss';
import '../commons/styles/components/utilities.scss';
import SearchIcon from '../commons/svgs/icon-search.svg';
import Icon from '../components/Icon';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="search">
        <form onSubmit={this.onSubmit} role="search">
          <div className="input-group">
            <label className="visually-hidden" htmlFor="search-input">
              Search Design system
            </label>
            <input
              role="searchbox"
              type="text"
              id="search-input"
              name="search-input"
              placeholder="Search Design system"
              className="g-input input input--border-white"
            />
            <div className="input-group__append">
              <Button aria-label="Submit">
                <Icon
                  className="icon icon--white"
                  role="img"
                  id={SearchIcon.id}
                  title="search submit"
                  aria-labelledby={`#unique ${SearchIcon.id}`}
                />
              </Button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
