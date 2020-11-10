const DOMAIN = 'https://developer.nps.gov/api/v1/parks';
const API_KEY = 'gvphhiHHG97vMhTNAeRfJpBHEPlctO6jPByPu0ji';
const BASE_URL = `${DOMAIN}?activity=CA&api_key=${API_KEY}&`;

let dataContainer = document.querySelector('park-name')

async function getPark(stateCode) {
  const url = 'https://developer.nps.gov/api/v1/parks?activity=CA&api_key=gvphhiHHG97vMhTNAeRfJpBHEPlctO6jPByPu0ji'
  try {
    const response = await axios.get(url)
    // console.log(response.data.message)
    const stateCode = response.data.message
    
    stateCode(parkList)
  } catch (error) {
    console.log(error)
  }
}

getData()

function optionValues(list) {
  const select  = document.querySelector('#choose-state')
  return list.forEach((states) => {
    const option = document.createElement('option')
    console.log(states)
    //set value
    option.value = `${states}`
    //set text content
    option.textContent = `${states}`
    select.append(option)
  })
}

