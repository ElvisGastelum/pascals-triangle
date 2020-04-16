# Pascal's Triangle
## Pascal's triangle implemented in NodeJS

To run this script, you must have Docker installed on your computer, learn more at https://www.docker.com/

## Instructions for use this repository
### Clone repository
```
$ git clone https://github.com/ElvisGastelum/pascals-triangle.git
```
### Enter in folder
```
$ cd pascals-triangle
```
### Create the .env file to specify the number of rows to generate with the algorithm 
Example:
```
├── .env    <--- (This is the new file)
├── Dockerfile
├── package.json
├── package-lock.json
├── README.md
└── src
    ├── index.js
    └── pascalTriangle.js
```

.env
```
ROWS=rows-to-generate
```

### Build image
```
$ docker build -t <username>/pascals-triangle .
```

### Run image
```
$ docker run --rm <username>/pascals-triangle
```

