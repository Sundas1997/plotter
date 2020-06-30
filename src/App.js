import React from 'react';
import Circle from './Circle';
import Rectangle from './Rectangle';
import Polygon from './Polygon';
import Polyline from './Polyline';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {value : '', element: ''}
  }
  handleChange = (e) =>{ 
    this.setState({value: e.target.value}, ()=>{
      if (this.state.value?.split('')[0]?.toLowerCase() === ('r')){
        let patt = /r\s(\d)+\s(\d)+\s(\d)+\s(\d)+/;
        if(patt.test(this.state.value.toLowerCase())){
          let matched_values = this.state.value.split(' ');
          this.setState({element: <Rectangle x={matched_values[1]} y={matched_values[2]} width={matched_values[3]} height={matched_values[4]}></Rectangle>});       
        } else {
          this.setState({element: <div></div>});
        }
      } else if (this.state.value?.split('')[0]?.toLowerCase() === ('c')){
        let patt = /c\s(\d)+\s(\d)+\s(\d)+/;
        if(patt.test(this.state.value.toLowerCase())){
          let matched_values = this.state.value.split(' ');
          this.setState({element: <Circle x={matched_values[1]} y={matched_values[2]} radius={matched_values[3]}></Circle>});
        } 
        else {
          this.setState({element: <div></div>});
        }
      } else if (this.state.value?.split('')[0]?.toLowerCase() === ('p')){
        let patt = /p\s((\d)+,(\d)+\s)+/;
        if(patt.test(this.state.value.toLowerCase())){
          let matched_values = this.state.value.slice(1);
          this.setState({element: <Polygon points={matched_values}></Polygon>});       
        } 
        else {
          this.setState({element: <div></div>});
        }
      } 
      else if (this.state.value?.split('')[0]?.toLowerCase() === ('l')){
        let patt = /l\s((\d)+,(\d)+\s)+/;
        if(patt.test(this.state.value.toLowerCase())){
          let matched_values = this.state.value.slice(1);
          this.setState({element: <Polyline points={matched_values}></Polyline>});       
        } 
        else {
          this.setState({element: <div></div>});
        }
      }
      else if (this.state.value === ''){
        this.setState({element: <div></div>});
      } else{
        this.setState({element: <div><h3 className="error">Not a valid command.</h3></div>});
      }
    });
    
  }

  render(){
    return (
      <div className="App">
        <div className="sidebar">
          <div className="sidebar_header">
            <h2>Plotter</h2>
          </div>
          <div className="sidebar_container">
            <p>
              A simple implementation of a
              Plotter - which when given various drawing commands from within a text area, should be able
              draw them in real-time onto an SVG element.
            </p>
            <label>
              <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter Command"></input>
            </label>
            <h5>Instructions</h5>
            <ul>
              <li>
                R (X Coordinate) (Y Coordinate) (Width) (Height) - Should Draw a rectangle with the
                parameters marked onto the SVG 
              </li>
              <li> 
                C (CX Coordinate) (CY Coordinate) (Radius) - Should Draw a circle with the
                parameters marked onto the SVG
              </li>
              <li>
                P (X1,Y1) (X2,Y2) (X3,Y3) ..... (Xn,Yn) - Should draw a polygon onto the SVG with
                the points specified
              </li> 
              <li>
                L (X1,Y1) (X2,Y2) (X3,Y3) ..... (Xn,Yn) - Should draw a polyline onto the SVG with
                the points specified
              </li> 
            </ul>
           
          </div>
        </div>
        <div className="element_container">
          {this.state.element}
        </div>
      </div>
    );
  }
}

export default App;
