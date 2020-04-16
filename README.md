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

### Edit in Dockerfile the ENV variable
Example:

Dockerfile
```
FROM ...
...
ENV ROWS=6
CMD ...
```

### Build image
```
$ docker build -t <username>/pascals-triangle .
```

### Run image
```
$ docker run --rm <username>/pascals-triangle
```

