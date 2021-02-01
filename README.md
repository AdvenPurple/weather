# weather

## Notes
Weather app assignment

### Date
Uploading it on January 31st, 2021

### Time spent
On and off through the weekend, a bit short of 6 hours to come up with the final deliverable code.

Part of that on/off time was also dedicated to investigating tools and frameworks, for example:
While I had decided on Express from the get-go, I was not so sure about how to approach the UI stretch goal.
I spent some time looking into Angular, since I was curious about setting up a project from scratch, but I 
realized I would be going way too deep into new territory for the sake of a rather straight forward UI.

### Assumptions made
For the sake of simplicity I only considered the use case provided by the assignment's description, that is:
only requests based on city names despite the fact that OpenWeatherMap's API does allow for alternative requests.

### Shortcuts/Compromises made
My overall UI is definitely a shortcut, for example I left the UI's JavaScript within the HTML file instead of
placing it in it's own dedicated file within a dedicated folder. My approach to error handling also boils down to 
having verbose alerts popping up to the user. 

Ideally I would have implemented some additional logic and methods to deal with some scenarios. For example 
queeing up a retry after a while when OpenWeatherMap returns a 429 - Too Many Requests response. I also don't 
make it incredibly clear that, as a user, you can search for "Vancouver, US" and "Vancouver, CA" instead of 
being limited to ONLY using ciy names and hoping it retrieves the right one. I do display the Country data in
the result though, so that at least you know what you are actually getting from the system. 

### Stretch goals attempted
- Connected the API to an actual source of weather data instead of some mock information
- implemented a basic but functional UI component that does some minor error handling and blocks empty queries from being made


### Instructions to run assignment locally
- Download from github
- extract content (if applicable)
- cd into the directory
- run "npm start"
- use your browser to visit "localhost:3000"
- use Insomnia,  Postman, curl, etc to call "localhost:3000/city/<name of a city> to test the API portion alone

### What did you not include in your solution that you want us to know about?
Did not implement any sort of Authentication 

### Your feedback on this technical challenge
Honestly really enjoyed wrking on this assignment, more than I expected. I do feel that the gap between the 
required goal and the combined stretch goals is a bit too wide though, there's so much optional content that
doing only the base challenge would not fill me with confidence about my odds as an applicant.
