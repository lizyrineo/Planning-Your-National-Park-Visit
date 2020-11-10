# Project Overview

## Project Name

Plan Your National Park Visit


## Project Description

This web site will assist anyone planning to visit a National Park in the US.  The user will be able to locate a National Park by state or acitivity using drop down lists.  A list of parks will then be returned to the user.  They can click on the park name and a description of the park, a list of activities and an image will be returned. 


## API and Data Sample

I will be using the API provided by the National Parks Service, https://developer.nps.gov/api/v1/parks?activity=CA&api_key=gvphhiHHG97vMhTNAeRfJpBHEPlctO6jPByPu0ji  
Below is an example of the JSON:
```{
total: "497",
limit: "50",
start: "0",
data: [
{
id: "77E0D7F0-1942-494A-ACE2-9004D2BDC59E",
url: "https://www.nps.gov/abli/index.htm",
fullName: "Abraham Lincoln Birthplace National Historical Park",
parkCode: "abli",
description: "For over a century people from around the world have come to rural Central Kentucky to honor the humble beginnings of our 16th president, Abraham Lincoln. His early life on Kentucky's frontier shaped his character and prepared him to lead the nation through Civil War. The country's first memorial to Lincoln, built with donations from young and old, enshrines the symbolic birthplace cabin.",
latitude: "37.5858662",
longitude: "-85.67330523",
latLong: "lat:37.5858662, long:-85.67330523",
activities: [
{
id: "13A57703-BB1A-41A2-94B8-53B692EB7238",
name: "Astronomy"
},```


## Wireframes

Upload images of your wireframes to an image hosting site or add them to an assets folder in your repo and link them here with a description of each specific wireframe.
<img src= "./wireframe.png"/>


#### MVP 
I'll allow user to search for National Parks by state using the NPS API  
Using the list created by the state search, the user can select a park  
The page will display the park name, an image, the descrition of activities available



#### PostMVP  
Each park will display the directions to the park
Each park will display multiple images with a mouse click
Each park will display the park map

## Project Schedule

<img src = "./schedule.png">


## Priority Matrix

<img src = "./matrix.jpg">


## Timeframes


| Component                | Priority| Estimated Time | Time Invested| Actual Time|
| -------------------------|:--------:|:-------------:|:------------:|:----------:| 
| HTML structure           | H        |  1hr          |              |            |
| HTML links               | H        |  2hr          |              |            | 
| HTML buttons             | H        |  2hr          |              |            |
| HTML images              | H        |  1hr          |              |            |
| css background imgs      | H        |  3hr          |              |            |
| css image layout         | H        |  3hr          |              |            |
| Build state code data    | H        |  3hr          |              |            |
| JS Create loops for parks| H        |  4hr          |              |            |
| JS images for parks      | H        |  2hr          |              |            |
| JS Create dropdowns      | H        |  4hr          |              |            |
| JS Create buttons        | H        |  4hr          |              |            |
| JS Add images            | H        |  3hr          |              |            |


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.
