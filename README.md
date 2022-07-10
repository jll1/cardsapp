# Cards Application Subly

Created an initial state and a function to set the state. 

Asynchronous getjson function to fetch the url data, change to json object, and extract the media object.  

Set the media object as the state.  

useEffect to call the asynchronous getjson function.

Return all cards on one page, using ternary operators to check the status of the objects that determine what the card shows. Alternatively it could count the json objects and use an index to display each card one by one or on a button click.  

Separated cards into functional components.  

Used a circle loader instead of a bar loader.  

Used the JavaScript Moment library to change updatedAt datetime to describe how long ago. Included in App.tsx, Installed using: npm install moment --save 

nodemodules not included, when repository is downloaded, cd to cards folder, run 'npm -i' to install node modules, then run 'npm start', and go to localhost:3000/ on the browser

[Source](github.com/jll1/cardsapp)