import React from 'react';

class EventPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <div>
          <h1>ほげええええええええええええええええええ</h1>
        </div>
      </div>
    );
  }
}

export default EventPage;
