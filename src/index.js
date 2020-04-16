const pascalTriangle = require("./pascalTriangle");
const dotenv = require("dotenv");

dotenv.config();

const number = pascalTriangle(process.env.NUMBER);

console.log(number);
