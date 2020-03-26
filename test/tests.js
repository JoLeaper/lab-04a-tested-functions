const test = QUnit.test;

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function isEven(x) {
    return x % 2 === 0;
}

function getNumbers(x) {
    let array = [];
    for(let i = 1; i <= x; i++) {
        array.push(i);
    }
    return array;
}

function getEvenNumbers(x) {
    let array = [];
    for(let i = 2; i <= x; i += 2) {
        array.push(i);
    }
    return array;
}

function fizzBuzz(x) {
    let array = [];
    for(let i = 1; i < x; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            array.push('fizzbuzz');
        } else if(i % 5 === 0) {
            array.push('buzz');
        } else if(i % 3 === 0) {
            array.push('fizz');
        } else {
            array.push(i);
        }
    }
    return array;
}

test('add', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const x = 10;
    const y = 5;
    const expected = 15;
    //Act 
    // Call the function you're testing and set the result to a const
    const sum = add(x, y);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, sum);
});

test('subtract', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const x = 10;
    const y = 5;
    const expected = 5;
    //Act 
    // Call the function you're testing and set the result to a const
    const difference = subtract(x, y);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, difference);
});

test('multiply', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const x = 10;
    const y = 5;
    const expected = 50;
    //Act 
    // Call the function you're testing and set the result to a const
    const product = multiply(x, y);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, product);
});

test('divide', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected1 = 2;
    const expected2 = Infinity;
    //Act 
    // Call the function you're testing and set the result to a const
    const result1 = divide(10, 5);
    const result2 = divide(7, 0);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected1, result1);
    assert.equal(expected2, result2);
});

test('isEven', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const x = 6;
    const expected = true;
    //Act 
    // Call the function you're testing and set the result to a const
    const evenOrOdd = isEven(x);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, evenOrOdd);
});


test('getNumbers', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const x = 5;
    const expected = [1, 2, 3, 4, 5];
    //Act 
    // Call the function you're testing and set the result to a const
    const numberArray = getNumbers(x);
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(expected, numberArray);
});

test('getEvenNumbers', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const x = 9;
    const expected = [2, 4, 6, 8];
    //Act 
    // Call the function you're testing and set the result to a const
    const evenArray = getEvenNumbers(x);
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(expected, evenArray);
});


test('fizzBuzz', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const x = 16;
    const expected = [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz'];
    //Act 
    // Call the function you're testing and set the result to a const
    const fizzBuzzArray = fizzBuzz(x);
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(expected, fizzBuzzArray);
});