# Project Overview

## Project Name

Plan Your National Park Visit


## Project Description

This web site will assist anyone planning to visit a National Park in the US.  The user will be able to locate a National Park by state or acitivity using drop down lists.  A list of parks will then be returned to the user.  They can click on the park name and a description of the park, a list of activities and an image will be returned. 


## API and Data Sample

I will be using the API provided by the National Parks Service, https://www.nps.gov/subjects/developer/index.htm. Below if an example of the JSON:
data: [
{
id: "6DA17C86-088E-4B4D-B862-7C1BD5CF236B",
url: "https://www.nps.gov/acad/index.htm",
fullName: "Acadia National Park",
parkCode: "acad",
description: "Acadia National Park protects the natural beauty of the highest rocky headlands along the Atlantic coastline of the United States, an abundance of habitats, and a rich cultural heritage. At 3.5 million visits a year, it's one of the top 10 most-visited national parks in the United States. Visitors enjoy 27 miles of historic motor roads, 158 miles of hiking trails, and 45 miles of carriage roads.",
latitude: "44.409286",
longitude: "-68.247501",
latLong: "lat:44.409286, long:-68.247501",
activities: [
{
id: "09DF0950-D319-4557-A57E-04CD2F63FF42",
name: "Arts and Culture"
},


## Wireframes

Upload images of your wireframes to an image hosting site or add them to an assets folder in your repo and link them here with a description of each specific wireframe.

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 
Using the NPS API, the user will be able to access the database
I'll add one required dropdown to select state and one optional dropdown to select activity
Display the park name, address and image



#### PostMVP  
Add a third button to show the user the map
Allow user to get directions
Add a button to see the current weather using a second API


## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Nov 9| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|Nov 10| Project Approval | Incomplete
|Nov 12| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Nov 13| Pseudocode / actual code | Incomplete
|Nov 16| MVP | Incomplete
|Nov 17| Presentations | Incomplete

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day. Students usally put in around 40+ hours into their project 1.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.
