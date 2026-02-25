import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    const savedVotes = JSON.parse(localStorage.getItem("votes"));

    this.state = {
      votes: savedVotes || {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
      },
      winner: null,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.votes !== this.state.votes) {
      localStorage.setItem("votes", JSON.stringify(this.state.votes));
    }
  }

  handleVote = (id) => {
    this.setState((prevState) => ({
      votes: {
        ...prevState.votes,
        [id]: prevState.votes[id] + 1,
      },
    }));
  };

  showResults = () => {
    const { votes } = this.state;

    let maxVotes = -1;
    let winnerId = null;

    Object.entries(votes).forEach(([id, count]) => {
      if (count > maxVotes) {
        maxVotes = count;
        winnerId = id;
      }
    });

    this.setState({
      winner: {
        id: winnerId,
        count: maxVotes,
      },
    });
  };

  clearResults = () => {
    const emptyVotes = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

    localStorage.removeItem("votes");

    this.setState({
      votes: emptyVotes,
      winner: null,
    });
  };

  render() {
    const { votes, winner } = this.state;

    const emojis = {
      1: "😀",
      2: "😊",
      3: "😎",
      4: "🤩",
      5: "😍",
    };

    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h1>Голосування за найкращий смайлик</h1>

        <div style={{ fontSize: "50px", marginBottom: "20px" }}>
          {Object.entries(emojis).map(([id, emoji]) => (
            <span
              key={id}
              onClick={() => this.handleVote(id)}
              style={{ cursor: "pointer", margin: "0 15px" }}
            >
              {emoji}
              <div style={{ fontSize: "20px" }}>{votes[id]}</div>
            </span>
          ))}
        </div>

        <button
          onClick={this.showResults}
          style={{
            padding: "10px 20px",
            margin: "10px",
            background: "green",
            color: "white",
            border: "none",
            borderRadius: "6px",
          }}
        >
          Show Results
        </button>

        <button
          onClick={this.clearResults}
          style={{
            padding: "10px 20px",
            margin: "10px",
            background: "red",
            color: "white",
            border: "none",
            borderRadius: "6px",
          }}
        >
          Очистити результати
        </button>

        {winner && (
          <div style={{ marginTop: "30px" }}>
            <h2>Переможець:</h2>
            <div style={{ fontSize: "60px" }}>{emojis[winner.id]}</div>
            <h3>Кількість голосів: {winner.count}</h3>
          </div>
        )}
      </div>
    );
  }
}
