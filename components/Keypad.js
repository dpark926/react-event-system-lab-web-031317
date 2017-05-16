import React from 'react';

class Keypad extends React.Component {
  logging() {
    console.log('Entering password...')
  }

  render() {
    return (
      <input type='password' onKeyUp={this.logging}></input>
    )
  }
}

export default Keypad;
