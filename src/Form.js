import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.handleFormSubmission = this.handleFormSubmission.bind(this)
  }

  async handleFormSubmission(event) {
    event.preventDefault();
    const response = await fetch("https://restcountries.eu/rest/v2/all")
    const data = await response.json();
    this.setState({countries: data})
  }

  renderCountries() {
    return this.state.countries.map((country, index) => {
      return <p key={index}>{country.name}</p>
    })
  }

  render() {
    const { countries } = this.state
    return (
      <>
        <form onSubmit={this.handleFormSubmission}>
          <p>Search</p>
          <input type="text" name="search" id="search"/>
          <input type="submit" value="Submit"/>
        </form>
        {countries && this.renderCountries()}
      </>
    )
  }
}

export default Form;