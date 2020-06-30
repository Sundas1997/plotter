import React from 'react';


class Polygon extends React.Component {
    
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
                <polygon points={this.props.points} fill={this.getRandomColor()} />
            </svg>
            </div>
        );
    }

}

export default Polygon;