import React from 'react';

// import './App.css';

class Polyline extends React.Component {
    
    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
      
    render(){
        return (
            <div>
            <svg width="250" height="250">
                <polyline points={this.props.points} fill="white" stroke={this.getRandomColor()} stroke-width="3" />
            </svg>
            </div>
        );
    }

}

export default Polyline;