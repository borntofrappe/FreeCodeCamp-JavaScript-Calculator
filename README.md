Link to the working pen right [here](https://codepen.io/borntofrappe/full/zjNKYG/).

# The Task 

Build a JavaScript Calculator similar in functionality to this excellent [example](https://codepen.io/freeCodeCamp/full/rLJZrA).

Specifically, fulfill the following user stories:

- [x] it is possible to add, subtract, multiply, divide two numbers

- [x] it is possible to clear the typed number with a clear button

- [x] it is possible to chain multiple operations, which are resolved only at the press of the equal button

With regards to the second point, the referenced example presents two distinct buttons, with the following meaning:

- **ce**: clear entry; remove the current input, without affecting prior operations. In chaining two or three computations, it erases only the last one displayed on the calculator.
- **ac**: all clear; remove all input, regardless of whether prior computations are present. This option allows to start afresh from a blank slate.

# Plan

- [x] build a makeshift calculator with CSS grid properties
- [x] the grid ought to be at least seven rows tall and four columns wide, with the following UI components: numbers from 0 to 9, decimal separator, operator signs and clear options 
- [x] in the JS script file listen for click events on all buttons
- [x] implement the calculator logic when particular data-value attributes are triggered

# Notes

**Script**

The project is good practice in terms of programming an application which has multiple paths. It is indeed possible to fall under different scenarios: an operator sign is included before a digit, an operator sign is included following another operator sign. You get the gist.

There is a perfect case, in which a number is included right before an operator, a number follows and the equal sign is then pressed. It is already a challenge to code for that case.

But there are also edge cases which need to be considered.

I do believe that with the testing of different regular expressions and if/else statements looking at what is included in the display, the project so far does already a good job to solve its main task.

That being said, it is not a finished, polished product. Beside the simple fact that I obviously forgot the dot, decimal separator, the JavaScript file needs an upgrade to consider all possible cases.

Moreover, the script needs to allow for multiple operations, which are resolved only when the equal sign is pressed.

**Aesthetics**

Considering the style of the project, it'd be rather neat to have the digits change in style as the operator signs are included in the display. Meaning, the dislpay leaves the prior digit(s) visible in a smaller scale to leave sppace for the new digit, to be displayed boldly and clearly.

It could also be suggested that the calculator needs not exceeding a certain number of caracthers. After around 14 characters, the calculator should not allow for further input and following an operation it should perhaps return an error of overflow.

The `fourOhFour()` function ironically posted at the end comes unironically to help this further edge case.

# Lessons Learned

As briefly expressed, it is mightily important to map out the different paths the application can take. Even for a small scale project such as for this JavaScript calculator, there are several alternatives which need to be considered. 

What if someone types something unexpected, what if an operator is typed twice, a decimal separator is typed twice. Something along those lines.

Planning out the different scenarios allows to provide a solid, confident code-base.

Beside this planning, of course errors may always occur. This is where a default, 404, catch-all solution may fit. Plan for the paths you expect, include an error message if something unexpected occurs.

**Paths**

The buttons fundamentally describe the paths which the application can take, and it is therefore extremely helpful to analyze their different purpose as to code according to their implications.

- digits: whenever a digit-button is pressed, display said number in the main-display. 
- operators: display the operator in the main display, but only if a number is included in the main display itself.
- decimal separator: display the dot, but only if a number is included in the main display, and only if a dot is not present in the same display.
- equal sign: display the result of the different operations in the main display. In order to accommodate for multiple, chained operations, the application makes use of a main display and a chain display. In this last one, numbers and operators are included whenever an operator is typed. The equal sign button shuold push the operator/digits into the chain display and compute the expression.
- entry clear: erase the text in the main display, but don't alter previous inclusions which are now stored in the chain display
- all clear: erase all text from the calculator, regardless of the display split.

**In practice** 

The mentioned instructions already map out a series of features which are to be included in the simple application. When they are implemented in practice however, it is possible to assess the presence of edge cases previously left without thought.

Consider the following situation: the user types in a chain operation, he/she presses the clear entry button on an operator and not a number. In this instance, the calculator doesn't have an option to include an alternative operator, and it allows to include only another number.

Of course it is possible to then check and safeguard the application from these unexpected occurrences. It is indeed possible to check the value of the chain operation and act accordingly. 

The lessons here is: plan for the paths of which you can think. Move on to implent the features behind them. As you code and then experiment with the features, jot down unexpected occurrences. Go back to the planning phase to consider those instances cases as well.
