import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// let score = 0;
// let bestScore = 0;

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: friends,
    score: 0,
    bestScore: 0,
    message: "Click a character to test your memory!",
    clicked: new Set()
  };

  setClick = id => {
    // Finds friends with specific id
    const selectFriends = this.state.friends.find(friends => friends.id === id);
    // Set this.state.clicked set includes the selected friend image, end game since it has been selected before
    if (this.state.clicked.has(selectFriends)) {
      // End game and start a new game
      this.setState(state => ({
        ...state,
        clicked: new Set(),
        message: "Sorry, you guessed incorrect!"
      }))
    } else {
      // Update score to show the number of correct friends selected or the best score
      this.setState(state => ({
        ...state,
        friends: this.shuffleFriends(state.friends),
        clicked: state.clicked.add(selectFriends),
        bestScore: Math.max(state.clicked.size, state.bestScore),
        message: "You're still in the game!"
      }))
    }
  };

  shuffleFriends = (friends) => {
    for (let i = friends.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = friends[i];
      friends[i] = friends[j];
      friends[j] = temp;
    }
    return friends
  }


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Navbar title="Memory Clicky Game" message={this.state.message} score={this.state.clicked.size} bestScore={this.state.bestScore}></Navbar>

        <Jumbotron>Jumbotron</Jumbotron>

        <div className="container">
          <div className="row">
            {this.state.friends.map(friends => (
              <FriendCard
                onClick={() => this.setClick(friends.id)}
                id={friends.id}
                key={friends.id}
                name={friends.name}
                image={friends.image}
              />

            ))}
          </div>
        </div>
        <Footer text="SpongeBob SquarePants Memory Click Game"></Footer>
      </Wrapper>
    );
  }
}

export default App;
