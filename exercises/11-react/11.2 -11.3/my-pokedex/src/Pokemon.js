import React from 'react';

class Pokemon extends React.Component {
render() {
  //const { name, type, averageWeight, image} = this.props.pokemon;
  return (
    <div>
      <p>{this.props.name}</p>
      <p>{this.props.type}</p>
      <p>{this.props.weight}{this.props.unit}</p>
      <img src={this.props.image} />
    </div>
  )
  }
}

export default Pokemon;