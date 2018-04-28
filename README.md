Link to the work-in-progress pen right [here]().

# The Task 

Build a JavaScript Calculator similar in functionality to this excellent [example](https://codepen.io/freeCodeCamp/full/rLJZrA).

Specifically, fulfill the following user stories:

- [ ] it is possible to add, subtract, multiply, divide two numbers

- [ ] it is possible to clear the typed number with a clear button

- [ ] it is possible to chain multiple operations, which are resolved only at the press of the equal button

With regards to the second point, the referenced example presents two distinct buttons, with the following meaning:

- **ce**: clear entry; remove the current input, without affecting prior operations. In chaining two or three computations, it erases only the last one displayed on the calculator.
- **ac**: all clear; remove all input, regardless of whether prior computations are present. This option allows to start afresh from a blank slate.

# Plan

- [x] build a makeshift calculator with CSS grid properties
- [x] the grid ought to be at least seven rows tall and four columns wide, with the following UI components: numbers from 0 to 9, decimal separator, operator signs and clear options 
- [x] in the JS script file listen for click events on all buttons
- [ ] implement the calculator logic when particular data-value attributes are triggered

# Lessons Learned
