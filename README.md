Link to the work-in-progress pen right [here](https://codepen.io/borntofrappe/full/zjNKYG/).

# The Task 

Build a JavaScript Calculator similar in functionality to this excellent [example](https://codepen.io/freeCodeCamp/full/rLJZrA).

Specifically, fulfill the following user stories:

- [x] it is possible to add, subtract, multiply, divide two numbers

- [x] it is possible to clear the typed number with a clear button

- [ ] it is possible to chain multiple operations, which are resolved only at the press of the equal button

With regards to the second point, the referenced example presents two distinct buttons, with the following meaning:

- **ce**: clear entry; remove the current input, without affecting prior operations. In chaining two or three computations, it erases only the last one displayed on the calculator.
- **ac**: all clear; remove all input, regardless of whether prior computations are present. This option allows to start afresh from a blank slate.

# Plan

- [x] build a makeshift calculator with CSS grid properties
- [x] the grid ought to be at least seven rows tall and four columns wide, with the following UI components: numbers from 0 to 9, decimal separator, operator signs and clear options 
- [x] in the JS script file listen for click events on all buttons
- [x] implement the calculator logic when particular data-value attributes are triggered

# Notes

**Script Update**

The project is good project in terms of programming an application which has multiple paths. It is indeed possible to fall under different scenarios: an operator sign is included before a digit, an operator sign is included following another operator sign. You get the gist.

There is a perfect case, in which a number is included right before an operator, a number follows and the equal sign is then pressed. It is already a challenge to code for that case.

But there are also edge cases which need to be considered.

I do believe that with the testing of different regular expressions and if/else statements looking at what is included in the display, the project so far does already a good job to solve its main task.

That being said, it is not a finished, polished product. Beside the simple fact that I obviously forgot the dot, decimal separator, the JavaScript file needs an upgrade to consider all possible cases.

Moreover, the script needs to allow for multiple operations, which are resolved only when the equal sign is pressed.

**Aesthetics**

Considering the style of the project, it'd be rather neat to have the digits change in style as the operator signs are included in the display. Meaning, the dislpay leaves the prior digit(s) visible in a smaller scale to leave sppace for the new digit, to be displayed boldly and clearly.

It could also be suggested that the calculator needs not exceeding a certain number of caracthers. After around 14 characters, the calculator should not allow for further input and following an operation it should perhaps return an error of overflow.

The `fourOhFour()` function ironically posted at the end comes unironically to help this further edge case.
