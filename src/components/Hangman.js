import React from 'react';
import LetterList from './LetterList';
class Hangman extends React.Component {
  render() {
    return (
      <div className="hangman">
        <div className="hangman-board">
          <LetterList />
        </div>
        <div className="hangman-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Hangman;