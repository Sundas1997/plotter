## Plotter

A simple implementation of a Plotter - which when given various drawing commands from within a text area, should be able draw them in real-time onto an SVG element.

### Valid Shapes and Instructions

- R (X Coordinate) (Y Coordinate) (Width) (Height) - Should Draw a rectangle with the parameters marked onto the SVG
- C (CX Coordinate) (CY Coordinate) (Radius) - Should Draw a circle with the parameters marked onto the SVG
- P (X1,Y1) (X2,Y2) (X3,Y3) ..... (Xn,Yn) - Should draw a polygon onto the SVG with the points specified
- L (X1,Y1) (X2,Y2) (X3,Y3) ..... (Xn,Yn) - Should draw a polyline onto the SVG with the points specified

## Run the project

Execute the following commands to run the project:

### npm install (to install dependencies)
### npm start (to start the development server)

### npm build (to create deployment ready build: OPTIONAL)
