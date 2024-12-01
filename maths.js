//Find the area of a triangle where lengths of the three of its sides are given

// declaring constants for length of 3 sides of traingle
const side_1 = 8; 
const side_2 = 4; 
const side_3 = 7;

// Calculate the semi-perimeter of the triangle
const perimeter = (side_1 + side_2 + side_3) / 2;

// Use Heron's formula to calculate the area of the triangle
const area = Math.sqrt(perimeter * ((perimeter - side_1) * (perimeter - side_2) * (perimeter - side_3)));

// Log the calculated area to the console
console.log(area);
