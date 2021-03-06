import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImagesList from "../components/ImagesList";
import Spinner from "../components/Spinner";
import "../components/ImagesList.css";

class App extends React.Component {
  // constructor(){
  //     super();
  //     // this.onSearchSubmit = this.onSearchSubmit.bind(this);
  // }
  state = { images: [], isSearching: false, term: "" };
  async onSearchSubmit(term) {
    // One way to get the response asyncronously
    // axios.get('https://api.unsplash.com/search/photos',{
    //     params: { query: term},
    //     headers: {
    //         Authorization: 'Client-ID 383c80b11dfa5f6c5c86433762751fa44150320454937fa85a071a5ae745c977'
    //     }
    // }).
    // then(response => {
    //     console.log(response.data.results)
    // });

    this.setState({ isSearching: true, term });
    // Second Way to get the response asyncronously
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });
    this.setState({ images: response.data.results, isSearching: false });
    debugger;
  }
  renderContent() {
    if (this.state.isSearching) {
      return <Spinner message={`Loading ${this.state.term} results ...`} />;
    }
    if (this.state.term !== "") {
      return (
        <div className="images-list">
          <ImagesList images={this.state.images} term={this.state.term} />
        </div>
      );
    }
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar handleSearch={event => this.onSearchSubmit(event)} />
        {this.renderContent()}
      </div>
    );
  }
}

export default App;
