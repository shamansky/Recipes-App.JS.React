import React, { Component } from 'react';
import './App.css';
import Form from './components/Form.js';
import Recipes from './components/Recipes.js';

const API_KEY = "77dba38e57a20aa7a8da6324a84906ef";

class App extends Component {
  state = {
    recipes: []
  }
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=9`);
    // console.log(recipeName);

    const data = await api_call.json();
    // console.log(data.recipes[0].source_url);
    this.setState({recipes: data.recipes});
    console.log(this.state.recipes);
  }
  // componentDidMount = () => {
  //   const json = localStorage.getItem("recipes");
  //   const recipes = JSON.parse(json);
  //   this.setState({ recipes });
  // }
  // componentDidUpdate = () => {
  //   const recipes = JSON.stringify(this.state.recipes);
  //   localStorage.setItem("recipes", recipes);
  // }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
        <Recipes recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default App;
