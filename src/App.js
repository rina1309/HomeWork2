import React from 'react';
import './App.css';

class TwoBlocks extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      blocks: ['red', 'blue'],
    }
  }
  changeBlock(i) {
    const blocks = [...this.state.blocks];
    blocks.reverse()
    this.setState({ blocks })
  }

  render(){
    return(
      <div className='container'>
        <div className={this.state.blocks[0]} onClick={() => this.changeBlock(0)}></div>
        <div className={this.state.blocks[1]} onClick={() => this.changeBlock(1)}></div>
      </div>
    )
  }
}

export default TwoBlocks;
