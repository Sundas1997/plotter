import React from 'react';


class Rectangle extends React.Component {
    
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
                    <rect x={this.props.x} y={this.props.y} width={this.props.width} height={this.props.height} 
                    fill={this.getRandomColor()} />
                </svg>
            </div>
        );
    }

}

export default Rectangle;