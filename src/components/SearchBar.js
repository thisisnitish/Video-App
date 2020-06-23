import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' };            //term refers to the search input

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    };

    onFormSubmit = event => {
        event.preventDefault();                //browser does not attempt to automatically submit the form anytime user submits it

       //TODO: Make sure we call
       //callback from parent component 
    };

    render() {
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={this.onInputChange}        //this is the event handler which will invoke to change the input in the searchBar
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;