const pascalTriangle = require("./pascalTriangle");

const NUMBER_ROWS = process.env.ROWS;

const result = pascalTriangle(NUMBER_ROWS);

console.log(result);
