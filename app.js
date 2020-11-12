const DOMAIN = 'https://developer.nps.gov/api/v1/parks'
const API_KEY = 'gvphhiHHG97vMhTNAeRfJpBHEPlctO6jPByPu0ji';
const BASE_URL = `${DOMAIN}?activity=CA&api_key=${API_KEY}&`;

let stateCode = document.querySelector(stateAbbr)
let parkName = document.querySelector(fullName)
let parkInfo = document.querySelector(description)
let parkDirections = document.querySelector(directons)

// let parkImage = document.data.image
const stateAbbr = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY',]
// let dataContainer = document.querySelector('park-info')

//create drop down list from array
function createDropDown(array) {
  let getState = document.querySelector("#choose-state")

  for (let i = 0; i < array.length; i++) {
    let option = array[i];
    let stateList = document.createElement('option')
    stateList.textContent = option;
    stateList.value = option;
    getState.append(stateList)
  }
}
createDropDown(stateAbbr)

// //add event listener when state is clicked

// stateList.addEventListener('click', handleClickEvent)
// const handleClickEvent = function () {
//   const getParks = async () => {
  
//     let parkName = document.data.fullName
  
//     const url = `https://developer.nps.gov/api/v1/parks?${fullName}&api_key=gvphhiHHG97vMhTNAeRfJpBHEPlctO6jPByPu0ji`;
  
//     try {
//       const response = await axios.get(url)
//       console.log(response.data)
//       const list = Object.keys(response.data)
//     } catch (error) {
//       console.log(error)
//     }
//   }
  
//   getParks(fullName)
  
// }

// // write function to select park
// axios.get(url, headers)
// .then((res) => {
//   const response = res.data.results
//   // console.log(response.data.results)
  
//   response.forEach((park) => {
//     console.log(park)

    
//     const parkDiv = document.querySelector('#choose-park')
//     btn.addEventListener('click', function() {
//       const parkNameDiv = document.createElement('div')
//     parkNameDiv.className = 'park-div'
//       parkDiv.append(parkNameDiv)
//       const parkName = park.name.fullName
//     name.textContent = `${fullName}`
//     parkDiv.append(name)
//     }
//     // console.log(parkDiv)
    
//     const activityDiv = document.querySelector('#show-activity')
//     btn.addEventListener('click', function() {
//       const parkActivityDiv = document.createElement('div')
//       const activity = park.activities.name
//     parkActivityDiv.className = 'acticity-div'
//       parkActivityDiv.append(activityDiv)
//       const parkName = park.data.activity
//       info.textContent = `Activities: ${activities}`
//     parkDiv.append(activity)
//     }
    
//     const directionsDiv = document.querySelector('#show-directions')
//     btn.addEventListener('click', function () {
//       const parkDirectionsDiv = document.createElement('div')
//       const directions = park.data.directions
//       directionsDiv.className = 'acticity-div'
//       directionsDiv.append(parkDirectionsDiv)
//       info.textContent = `Directions: ${directionsInfo}`
//       parkDiv.append(directions)
//     }
  
//     const img = document.createElement('img')
//     btn.addEventListener('click', function () {
//     img.setAttribute('src', park.data.images.url)
//     parkDiv.append(img)
//   }

