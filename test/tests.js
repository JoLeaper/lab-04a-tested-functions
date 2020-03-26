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
    debugger;
    for(let i = 2; i < x; i + 2) {
        array.push(i);
    }
    return array;
}

// function fizzBuzz() {
    // for (let i = 0; i < number, i++) {
    //     let
    // }
    // for(let i = 0; i < Array.length; i++)
    // if (array[i])
//}
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
    const x = 10;
    const y = 5;
    const expected = 2;
    //Act 
    // Call the function you're testing and set the result to a const
    const quotient = divide(x, y);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, quotient);
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
    const x = 9;
    const expected = [2, 4, 6, 8];
    //Act 
    // Call the function you're testing and set the result to a const
    debugger;
    const evenArray = getNumbers(x);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, evenArray);
});