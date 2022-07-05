# Fire, Grass, Water, David
This site was made to create a simple and fun game to show how pure javascript works in a real-world scenario.
It is a modification of the rock, paper, scissors game that uses fire, grass and water as the elements and also adds in David as the fourth element which beats everything else.  This game allows users to select between the 4 elements to play against the computer.

![Responsice Mockup](media/love_maths_mockup.png)

## Features 


### Existing Features


- __The Game Area__

  - This section will allow the user to play the  game. The user will be able to select one of four buttons to play against the computer. 
   -Each button represents an element,  fire, grass, water and David. 
   -The computer automatically generates a random response so it is a game of luck for the user.



- __The Score Area__

  - This section will allow the user to see exactly how many times they have won vs how many times the computer won. The first to 5 wins.

   __The Results Area__
 - This section lets the play know who one each round and by what means.



### Features Left to Implement

- Another feature idea I would like to implement is to add icons or images instead of the buttons to make the game more responsive and fun.
-I would also like to make the game more responsive on mobile devices.

## Testing 

I tested this site out by clicking all of the buttons to make sure they worked.
I made sure that each button represented the correct element and that the scores were being added up correctly.
I made sure that the game was over after either the player or computer reach 5.
I tested it out on multiple screen sizes to make sure the game was still playable on a variety of devices.


### Validator Testing 

- HTML
    - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/#textarea)
- CSS
    - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Fcode-institute-org.github.io%252Flove-maths%252F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- JavaScript
    - No errors were found when passing through the official [Jshint validator](https://jshint.com/)
      - The following metrics were returned: 
      - There are 11 functions in this file.
      - Function with the largest signature takes 2 arguments, while the median is 0.
      - Largest function has 10 statements in it, while the median is 3.
      - The most complex function has a cyclomatic complexity value of 4 while the median is 2.

### Unfixed Bugs

You will need to mention unfixed bugs and why they were not fixed. This section should include shortcomings of the frameworks or technologies used. Although time can be a big variable to consider, paucity of time and difficulty understanding implementation is not a valid reason to leave bugs unfixed. 

## Deployment

 
- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://code-institute-org.github.io/love-maths/


## Credits 

This site was my main inspiration for my project:
https://github.com/farellukas/rock-paper-scissors/blob/main/script.js

I liked how simple they made everything so looked at each function and method on W3 schools they had used and then modifed the code to fit my own project.

I originally started doing this project by following the tutorial below but ran into issues along the way with the javascipt not working so started all over as it was too complicated for me at this time:

https://sebhastian.com/rock-paper-scissors-javascript/

I also used looked at this tutorial:

https://www.geeksforgeeks.org/rock-paper-and-scissor-game-using-javascript/

 I followed this page to compare the player selection/choice against all of the computer choices to to get an outcome of either winner or tie: https://www.w3schools.com/js/js_switch.asp 

 I followed https://www.geeksforgeeks.org/javascript-template-literals/  to create template literals and refer variables in a string.

 I created a p element and append it to the document as per https://www.w3schools.com/jsref/met_document_createelement.asp

 I followed https://www.w3schools.com/jsref/met_node_appendchild.asp to add the results to display as the child.



### Content 

- The text for the Home page was taken from Wikipedia Article A
- Instructions on how to implement form validation on the Sign Up page was taken from [Specific YouTube Tutorial](https://www.youtube.com/)
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)
