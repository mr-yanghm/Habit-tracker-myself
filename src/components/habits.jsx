import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

class Habits extends Component {
  increaseCount = (habit) => {
    this.props.onIncreaseCount(habit);
  };

  decreaseCount = (habit) => {
    this.props.onDecreaseCount(habit);
  };

  deleteItem = (habit) => {
    this.props.onDeleteItem(habit);
  };

  habitAdd = (name) => {
    this.props.habitAdd(name);
  };

  render() {
    return (
      <>
        <HabitAddForm habitAdd={this.habitAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              name={habit.name}
              count={habit.count}
              onIncreaseCount={this.increaseCount}
              onDecreaseCount={this.decreaseCount}
              onDeleteItem={this.deleteItem}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default Habits;
