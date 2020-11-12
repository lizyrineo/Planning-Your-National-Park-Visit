// const stateParkURL = `https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&api_key=gvphhiHHG97vMhTNAeRfJpBHEPlctO6jPByPu0ji`

const form = document.querySelector('form')
async function getState(event) {
  event.preventDefault()
  let state = document.querySelector('select').value 
  console.log(state)
  try {
    const stateParkURL = `https://developer.nps.gov/api/v1/parks?stateCode=${state}&api_key=gvphhiHHG97vMhTNAeRfJpBHEPlctO6jPByPu0ji`;
    let response = await axios.get(stateParkURL)
    let parkList = response.data.data
    createList(parkList)
    console.log(parkList)
  } catch (error) {
    console.log(error)
  }
}
function createList(list) {
  let ul = document.querySelector('ul')
  list.forEach(park => {
    let li = document.createElement('li')
    console.log(park)
    li.textContent = park.fullName
    ul.append(li)
  })
}
form.addEventListener('submit', getState)
