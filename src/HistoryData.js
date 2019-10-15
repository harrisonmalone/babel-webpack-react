import React from 'react';
import ReactDOM from 'react-dom';

class CountriesData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {countriesData: null};
    this.getCountries = this.getCountries.bind(this)
  }

  getCountries() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => this.setState({countriesData: data}))
  }

  makeCountriesText() {
    return this.state.countriesData.map((country, index) => {
      if (country.region === "Americas") {
        return (
          <p key={index}>
            {country.name} is in the {country.region}
          </p>
        )
      } else {
        return <p key={index}>{country.name} is in {country.region}</p>
      }
    })
  }

  render() {
    const { countriesData } = this.state
    if (!countriesData) {
      return (
        <button onClick={this.getCountries}>Get event data</button>
      )
    } else {
      return this.makeCountriesText()
    }
  }
}

ReactDOM.render(<CountriesData />, document.getElementById('root'))