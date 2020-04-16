const pascalTriangle = require("./pascalTriangle");
const dotenv = require("dotenv");

dotenv.config();

const NUMBER_ROWS = process.env.ROWS;

const result = pascalTriangle(NUMBER_ROWS);

console.log(result);
