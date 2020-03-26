const test = QUnit.test;

function add(numberOne, numberTwo) {
    return numberOne + numberTwo;
}

function subtract(numberOne, numberTwo) {
    return numberOne - numberTwo;
}

function multiply(numberOne, numberTwo) {
    return numberOne * numberTwo;
}

function divide(numberOne, numberTwo) {
    return numberOne / numberTwo;
}

function isEven(number) {
    return number % 2 === 0;
}

function getNumbers(number) {
    let array = [];
    for(let i = 1; i <= number; i++) {
        array.push(i);
    }
    return array;
}

function getEvenNumbers(number) {
    let array = [];
    for(let i = 2; i <= number; i += 2) {
        array.push(i);
    }
    return array;
}

function fizzBuzz(number) {
    let array = [];
    for(let i = 1; i < number; i++) {
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
    const expected = 15;
    //Act 
    // Call the function you're testing and set the result to a const
    const sum = add(10, 5);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, sum);
});

test('subtract', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = 5;
    //Act 
    // Call the function you're testing and set the result to a const
    const difference = subtract(10, 5);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, difference);
});

test('multiply', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = 50;
    //Act 
    // Call the function you're testing and set the result to a const
    const product = multiply(10, 5);
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
    const expected = true;
    //Act 
    // Call the function you're testing and set the result to a const
    const evenOrOdd = isEven(6);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, evenOrOdd);
});


test('getNumbers', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = [1, 2, 3, 4, 5];
    //Act 
    // Call the function you're testing and set the result to a const
    const numberArray = getNumbers(5);
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(expected, numberArray);
});

test('getEvenNumbers', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = [2, 4, 6, 8];
    //Act 
    // Call the function you're testing and set the result to a const
    const evenArray = getEvenNumbers(9);
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(expected, evenArray);
});


test('fizzBuzz', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz'];
    //Act 
    // Call the function you're testing and set the result to a const
    const fizzBuzzArray = fizzBuzz(16);
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(expected, fizzBuzzArray);
});