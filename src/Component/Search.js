import React from 'react';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onSearchListener: props.onSearch,
            searchQuery: ""
        };
    }

    onChangeHandler = (event) => {
        this.setState({ searchQuery: event.target.value });
    };

    onKeyDownHandler = (event) => {
        if (event.key === 'Enter') {
            this.onSearchHandler();
        }
    }

    onSearchHandler = () => {
        this.state.onSearchListener(this.state.searchQuery);
    };

    render() {
        return (
            <div className="container">
                <input className="searchBox" type="text" placeholder="Search FAQ" onChange={this.onChangeHandler} onKeyDown={this.onKeyDownHandler} />
                <div className="search"></div>
                {/*<button className="searchButton" type="submit" onClick={this.onSearchHandler}>Search</button>*/}
            </div>
        );
    }
}
