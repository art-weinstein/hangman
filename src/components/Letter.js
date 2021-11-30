import React from 'react';

class Letter extends React.Component {
  render() {
    return (
      <button className="letter">
        {this.props.value}
        </button>
    );
  }
}

export default Letter;