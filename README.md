# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @sosehcy/lotide`

**Require it:**

`const _ = require('@sosehcy/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual`: This assertion function prints a Pass message if the eqArrays returns true or Fail if eqArrays returns false
- `assertEqual`: This is an assertion function which takes in two parameters, compares them and prints a message  
- `assertObjectsEqual`: This is an assertion function that compares two objects and returns true or false
- `countLetters`: This function takes a string and returns an object with the letters found in that string and number of repeats
- `countOnly`: This function takes an array and an object and returns an object with counts for a specific subset of the items
- `eqArrays`: This function takes two arrays and returns true or false based on a perfect match
- `eqObjects`: This is an assertion function that compares two objects and returns true or false
- `findKey`: This function takes in an object and a callback, scans the object and returns the first key for which the callback returns a truthy value
- `findKeyByValue`: This function takes an object and a value and returns the first key which contains the given value
- `flatten`: This function takes an array and flattens the inner arrays
- `head`: This function returns the first element of an array
- `letterPositions`: This function takes a string and returns an object with letters found and their indices
- `map`: This function takes in an array and a callback function and returns a modified version of the same array
- `middle`: This function takes an array and returns the middle-most element(s)
- `tail`: This function returns the tail of an array
- `takeUntil`: This function takes an array and a callback as input, keep collecting items from the array until the callback returns a truthy value
- `without`: This function returns a subset of a given array by removing unwanted elements