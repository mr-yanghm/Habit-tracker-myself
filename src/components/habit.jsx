import React, { PureComponent } from "react";

class Habit extends PureComponent {
  componentDidMount() {
    // timer 시작 등, 채팅 소켓 시작 등
    console.log(`habit : ${this.props.habit.name} mounted`);
  }

  componentWillUnmount() {
    // resources  해제 등
    console.log(`habit : ${this.props.habit.name} unmounted`);
  }

  increaseCount = () => {
    this.props.onIncreaseCount(this.props.habit);
  };

  decreaseCount = () => {
    this.props.onDecreaseCount(this.props.habit);
  };

  deleteItem = () => {
    this.props.onDeleteItem(this.props.habit);
  };

  render() {
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.increaseCount}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.decreaseCount}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button className="habit-button habit-delete" onClick={this.deleteItem}>
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
