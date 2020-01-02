import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  // One way to resolve Context issue
  //   constructor(){
  //       super();
  //       this.onSubmitForm = this.onSubmitForm.bind(this);
  //   }

  // Second way to resolve context issue make Error fucntion iside a class
//   onSubmitForm = event => {
//     event.preventDefault();
//     console.log(this.state.term);
//   };

  // Third way to resolve context issuecall simple function as Arrow function 
  onSubmitForm(event){
    event.preventDefault();
    this.props.handleSearch(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={(event) => this.onSubmitForm(event)}>
          <div className="field">
            <h3 style={{textAlign: 'center'}}>Images Search Engine</h3>
            <input
              placeholder="Type image term and press enter e.g. cars"
              onChange={event => {
                this.setState({ term: event.target.value });
              }}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
