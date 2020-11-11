const DOMAIN = 'https://developer.nps.gov/api/v1/parks'
const API_KEY = 'gvphhiHHG97vMhTNAeRfJpBHEPlctO6jPByPu0ji';
const BASE_URL = `${DOMAIN}?activity=CA&api_key=${API_KEY}&`;

// let stateCode = document.querySelector(stateAbbr)
// let parkName = document.data.fullName
// let parkInfo = document.data.description
// let parkDirections = document.data.directions
const stateAbbr = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY',]
// let dataContainer = document.querySelector('park-info')

//create drop down list from array
let getState = document.getElementById("#choose-state")

for (let i = 0; i < stateAbbr.length; i++) {
  let option = stateAbbr[i];
  let el = document.createElement('option')
  el.textContent = option;
  console.log(stateAbbr)
}





//create dynamic dropdown list
const getStates = async () => {
  const url = `https://developer.nps.gov/api/v1/parks?${states}&api_key=gvphhiHHG97vMhTNAeRfJpBHEPlctO6jPByPu0ji`;

  try {
    const response = await axios.get(url)
    console.log(response.data)
    const list = Object.keys(response.data)

    // stateCode(parkList)
  } catch (error) {
    console.log(error)
  }
}

getStates(stateAbbr)


//creating dropdown
function optionValues(list) {
  const select = document.querySelector('#choose-state')
  return list.forEach((stateAbbr) => {
    const option = document.createElement('option')
    console.log(states)
    //set value
    option.value = state
    //set text content
    option.textContent = state
    select.append(option)
  })
}
// const stateAbbr = [
//   'AL',
//   'AK',
//   'AZ',
//   'AR',
//   'CA',
//   'CO',
//   'CT',
//   'DE',
//   'FL',
//   'GA',
//   'HI',
//   'ID',
//   'IL',
//   'IN',
//   'IA',
//   'KS',
//   'KY',
//   'LA',
//   'ME',
//   'MD',
//   'MA',
//   'MI',
//   'MN',
//   'MS',
//   'MO',
//   'MT',
//   'NE',
//   'NV',
//   'NH',
//   'NJ',
//   'NM',
//   'NY',
//   'NC',
//   'ND',
//   'OH',
//   'OK',
//   'OR',
//   'PA',
//   'RI',
//   'SC',
//   'SD',
//   'TN',
//   'TX',
//   'UT',
//   'VT',
//   'VA',
//   'WA',
//   'WV',
//   'WI',
//   'WY',
// ]
// optionValues(stateAbbr)


// //grab value from dropdown
// function getValue(event) {
//   event.preventDefault()
//   const optionValue = document.querySelector('select').value
//   // console.log(optionValue)
//   getState(optionValue)
// }
// // getValue()

// async function getState(state) {
//   const url = `https://developer.nps.gov/api/v1/parks?stateCode=${state}&api_key=gvphhiHHG97vMhTNAeRfJpBHEPlctO6jPByPu0ji`;
//   try {
//     const response = await axios.get(url)
//     // console.log(response.data.message)
//     const stateParks = response.data.message
    
//     parkInfo(stateParks)
//   } catch (error) {
//     console.log(error)
//   }
// }
// function parkInfo(description) {
//   const activites = document.createElement('Park-Info')

// }