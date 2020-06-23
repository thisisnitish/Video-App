import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

const KEY = 'AIzaSyCS6PI0d-fhDaIKpT8rAI2sxmZjlCoZWWU';


class App extends React.Component {

    onTermSubmit = term => {
        youtube.get("/search", {
          params: {
            q: term,
            type: 'video',
            part: "snippet",
            maxResults: 5,
            key: KEY
          }
        });
    }


    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
            </div>
        );
    }
}

export default App;