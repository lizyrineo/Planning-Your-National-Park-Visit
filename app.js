

const form = document.querySelector('form')

//This gets a state's park data from the API
async function getState(event) {
  //This prevents the form from reloading the page
  event.preventDefault()
  //This grabs the selected state from the dropdown menu
  let state = document.querySelector('select').value 
  console.log(state)
  //This tries to get info from the API and print it
  try {
    //This plugs the 'state' variable from above into URL
    const stateParkURL = `https://developer.nps.gov/api/v1/parks?stateCode=${state}&api_key=gvphhiHHG97vMhTNAeRfJpBHEPlctO6jPByPu0ji`;
    let response = await axios.get(stateParkURL)
    //This pulls the actual park list from the JSON response
    let parkList = response.data.data
    //This sends the list of parks to the 'createList' function
    createList(parkList)
    console.log(parkList)
  } catch (error) {
    console.log(error)
  }
}
//This clears the '#park-list' <ul> in the DOM
function clearParkList() {
  const parkList = document.querySelector("#park-list");
  parkList.innerHTML = null
}
//This takes in a list of parks and prints them to the page
function createList(list) {
  //This clears the <ul>
  clearParkList()
  //This selects the <ul>
  let ul = document.querySelector('ul')
  //This executes the entire code block for each 'park' in the list
  list.forEach(park => {
    //This creates the new <li>
    let li = document.createElement('li')
    console.log(park)
    //This adds the park name to the <li>, then adds the <li> to the <ul>
    li.textContent = park.fullName
    ul.append(li)
    //This adds the listener to the <li> when its clicked, it runs 'getParkData and provides this park's data
    li.addEventListener("click", () => {
      getParkData(park) 
    })
  })
}
//This is the listener for the main form - invokes 'getState' on submit
form.addEventListener('submit', getState);
//This is just testing the listeners
function clicked() {
  console.log('click');
  
}
//This selects the <li>
let li = document.querySelector('li');
//This clears out the '#park-info' <div> in the DOM
function clearParkData() {
  const parkInfo = document.querySelector("#park-info");
  parkInfo.innerHTML = null
}
//This takes in a single park's data, then displays it in the '#park-info' <div>
function getParkData(park) {
  //This clears out the <div>
  clearParkData()
  //This makes a new <div>
  let div = document.createElement('div')
  //This makes a new <p> then adds the park description
  let p = document.createElement('p')
    console.log(park)
    p.textContent = park.description
  //This adds the <p> and a new <img> to the <div>
  div.append(p)
  div.append(showParkImage(park.images))
  //This finds the '#park-info' <div> and adds the newly created <div> to it
  const parkInfo = document.querySelector("#park-info");
  parkInfo.append(div);
}

let parkImage = document.querySelector("#park-image")
//This takes an array of images for a park and chooses one at random
//then returns the image as a fully built image element
function showParkImage(images) {
  console.log(images)
  //This picks a random index in the array's range
  let imageIndex = Math.floor(Math.random() * images.length)
  //This creates a new <img> element, sets its 'src' to the random images's URL
  let image = document.createElement("img");
  image.setAttribute("src", images[imageIndex].url)
  //This returns <img> as a DOM element, not only as a URL string
  //when this is returned inside 'getParkData' above, it can be plugged directly into the <div>
  return image
}
  





















