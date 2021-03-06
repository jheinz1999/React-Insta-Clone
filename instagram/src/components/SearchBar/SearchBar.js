import React from 'react';

import {SearchBarContainer, SearchLogoSection, SearchInputSection, SearchInput, SearchIcon, SearchButtons, CustomDiv, CompassSymbol} from './SearchBarStyles';

import logo from './logo.png';

export default class SearchBar extends React.Component {

  constructor() {

    super();

    this.state = {

      searchText: ''

    }

  }

  handleChange = e => {

    this.setState({searchText: e.target.value}, () => this.props.searchFunc(this.state.searchText));

  }

  render() {

    return (

      <SearchBarContainer>

        <SearchLogoSection>

          <p className="fab fa-instagram" style={{cursor: 'pointer'}} onClick={() => this.props.addPost(true)}></p>
          <p className='divider'>|</p>
          <img src={logo} alt='logo'></img>

        </SearchLogoSection>

        <CustomDiv>

          <SearchInputSection>

            <SearchInput type='text' placeholder='Search' onChange={this.handleChange} value={this.state.searchText} />
            <SearchIcon className={this.state.searchText === '' ? 'fas fa-search' : 'invisible'}></SearchIcon>

          </SearchInputSection>

        </CustomDiv>

        <SearchButtons>

          <CompassSymbol className='right far fa-compass'></CompassSymbol>
          <p className='right far fa-heart'></p>
          <p className='right far fa-user' onClick={() => this.props.setUsername('')}></p>

        </SearchButtons>

      </SearchBarContainer>

    );

  }

}
