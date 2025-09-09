#### 1) What is the difference between var, let, and const?


Answer : 

**`Difference between var, let and const :`**

**`var :`**


- The scope of a `var` variable is functional or global scope.

- It can be updated and re-declared in the same scope.

- It can be declared without initialization.


**`let :`**


- The scope of a `let` variable is block scope.

- It can be updated but cannot be re-declared in the same scope.

- It can be declared without initialization.


**`const :`**


- The scope of a `const` variable is block scope.

- It can neither be updated or re-declared in any scope.

- It cannot be declared without initialization.



#### 2) What is the difference between map(), forEach(), and filter()? 


Answer : 

**`Difference between map(), forEach(), and filter() :`**

**`map() :`**


- The `map()` function receives a function as a parameter and will apply the code on each element and returns an entirely new array. It will not change the original array.

- A `map()` function returns a new array and thus it should only be used if you are going to use the returned array else one should prefer `forEach()` function.


**`forEach()`**


- The `forEach()` function receives a function as an argument and it applies the same code to every element. It will not return anything, it just applies the conditions to every element. It will not change the original array.

- The return value of `forEach()` method is undefined. The `forEach()` method does not wait until promises are resolved.


**`filter()`**


- The `filter()` method receives function as a parameter. It runs the function for each element in the array. It will return the new array which satisfies the condition applied. It will not change the original array.

- The `filter()` method will return an empty array if no value is matched with the element. It will return an array of matched values if any matching happens.

#### 3) What are arrow functions in ES6?


Answer :


- ES6 Arrow functions enable us to write functions with simpler and shorter syntax and make our code more readable and organised. The arrow functions are introduced in the ES6 version. Arrow functions provides us with a more precise approach to writing JavaScript Functions.


**`Arrow Function in JavaScript :`**

- Arrow functions are anonymous functions i.e. they are functions without a name and are not bound by an identifier. Arrow functions do not return any value and can be declared without the function keyword. They are also called Lambda Functions.

- Arrow functions do not have the prototype property like this, arguments, or super.

- Arrow functions cannot be used with the new keyword.

- Arrow functions cannot be used as constructors.

#### 4) How does destructuring assignment work in ES6?

Answer : 


**`Works of destructuring :`**

**`Array Destructuring :`**

- Use `[]` to extract values from arrays.

- Order matters when assigning variables.

- Skip elements with extra commas.

- Default values can be set: [x=default].

- Can swap variables easily: [a,b] = [b,a].


**`Object Destructuring :`**

- Use `{}` to extract object properties.

- Variable names must match property names by default.

- Can rename variables: `{prop: newVar}`.

- Default values allowed: `{prop=default}`.

- Works with nested objects: `{nested:{prop}}`.

**`Nested Destructuring :`**

- Arrays inside arrays or objects inside objects can be destructured.

- Syntax follows the same `[]` for arrays, `{}` for objects pattern.



#### 5) Explain template literals in ES6. How are they different from string concatenation?


Answer : 


**`Template literals :`**

- Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, string interpolation with embedded expressions, and special constructs called tagged templates.

- Template literals are sometimes informally called template strings, because they are used most commonly for string interpolation (to create strings by doing substitution of placeholders). However, a tagged template literal may not result in a string; it can be used with a custom tag function to perform whatever operations you want on the different parts of the template literal.


**`Difference between template literals and string concatenation :`**

**`Syntax:`**

- Concatenation uses the + operator or concat(), while template literals use backticks (`` ` ``).

**`Variable Interpolation:`**

- Template literals offer direct variable interpolation using ${variableName}, eliminating the need for + operators and making code more readable.

**`Multiline Strings:`**

- Template literals inherently support multiline strings, whereas string concatenation requires explicit newline characters (\n).

**`Readability and Maintainability:`**

- Template literals generally lead to more readable and maintainable code, especially when dealing with complex strings containing multiple variables or expressions.


