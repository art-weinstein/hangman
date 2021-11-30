import React from 'react';
import Letter from './Letter';

class LetterList extends React.Component {
  renderLetter(i) {
    return <Letter value={i} />
  }

  render() {

    return (
      <div>
        <div className="board-row">
          {this.renderLetter('a')}
          {this.renderLetter('b')}
          {this.renderLetter('c')}
          {this.renderLetter('d')}
          {this.renderLetter('e')}
          {this.renderLetter('f')}
          {this.renderLetter('g')}
          {this.renderLetter('h')}
          {this.renderLetter('i')}
          {this.renderLetter('j')}
          {this.renderLetter('k')}
          {this.renderLetter('l')}
          {this.renderLetter('m')}
        </div>
        <div className="board-row">
          {this.renderLetter('n')}
          {this.renderLetter('o')}
          {this.renderLetter('p')}
          {this.renderLetter('q')}
          {this.renderLetter('r')}
          {this.renderLetter('s')}
          {this.renderLetter('t')}
          {this.renderLetter('u')}
          {this.renderLetter('v')}
          {this.renderLetter('w')}
          {this.renderLetter('x')}
          {this.renderLetter('y')}
          {this.renderLetter('z')}
        </div>
      </div>
    );
  }
}

export default LetterList;