import React, { Component } from 'react';
import KisuItem from './kisuapp';

class Kisut extends Component {
  render() {
    return this.props.kissat.map((kissa)=>(
        <KisuItem key={kissa.id} kissa={kissa}/>
  ));
  }
}

export default Kisut;