//Rectangles
function makeLine(size){
    let line = '';
    for (let i = 0; i < size; i++){
        line += '#';
    }
    return line;
}

function makeSquare(size){
    let square = '';
    for (let i = 0; i < size; i++){
        square += '\n' + makeLine(size);
    }
    return square;
}

function makeRectangle(width, height){
    let rectangle = '';
    for (let i = 0; i < height; i++){
        rectangle += makeLine(width) + '\n';
    }
    return rectangle.slice(0, -1);
}

//triangles
function makeDownwardStairs(height){
    let stairs = '';
    for (let i = 0; i < height; i++){
        stairs += makeLine(i + 1) + '\n'
    }
    return stairs.slice(0, -1);
}

function makeSpaceLine(numSpaces, numChars){
    let spaceLine = '';
    for (let i = 0; i < numSpaces; i++){
        spaceLine += ' ';
    }
    for (let i = 0; i < numChars; i++){
        spaceLine += '#';
    }
    for (let i = 0; i < numSpaces; i++){
        spaceLine += ' ';
    }
    return spaceLine;
}

function makeIsoscelesTriangle(height){
    let isoscelesTriangle = '';
    for (i = 0; i < height; i++){
        isoscelesTriangle += (makeSpaceLine(height - i - 1, 2 * i + 1) + '\n');
    }
    return isoscelesTriangle.slice(0, -1);
}

// diamonds

function reverse(str) {
    let lettersArray = str.split('');
    let reversedLettersArray = lettersArray.reverse();
    return reversedLettersArray.join('');
}

function makeDiamond(height){
    let diamond = '';
    diamond += makeIsoscelesTriangle(height)
    diamond += '\n' + reverse(diamond)
    return diamond;
}
console.log(makeDiamond(5));