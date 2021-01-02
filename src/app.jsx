import React, { Component } from "react";
import "./app.css";
import Habits from "./components/habits";
import NavBar from "./components/navBar";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  increaseCount = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...item, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits });
  };

  decreaseCount = (habit) => {
    console.log("decreaseCount called~!");

    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...item, count: habit.count - 1 < 0 ? 0 : habit.count - 1 };
      }
      return item;
    });
    this.setState({ habits });
  };

  deleteItem = (habit) => {
    console.log("deleteItem called");
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    console.log(habits);
    this.setState({ habits });
  };

  habitAdd = (name) => {
    console.log("habitAdd called");
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <NavBar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncreaseCount={this.increaseCount}
          onDecreaseCount={this.decreaseCount}
          onDeleteItem={this.deleteItem}
          habitAdd={this.habitAdd}
        />
      </>
    );
  }
}

export default App;
