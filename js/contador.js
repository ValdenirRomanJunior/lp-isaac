const secondContainer= document.querySelector('#seconds')
const minutesContainer= document.querySelector('#minutes')
const hoursContainer= document.querySelector('#hours')
const daysContainer= document.querySelector('#days')

const quinzeDiasMais = new Date().getFullYear()+1;
const  newyearTime = new Date( `January 01 ${quinzeDiasMais} 00:00:00`)

const updateCountdowns = () => {

    const currentTime = new Date();
    const difference= newyearTime-currentTime

    const days = Math.floor(difference /1000/60/60/600)
    const hours = Math.floor(difference /1000/60/60) %24
    const minutes = Math.floor(difference /1000/60) %60
    const seconds = Math.floor(difference /1000) %60

  secondContainer.textContent=seconds <10 ? '0' + seconds : seconds
  minutesContainer.textContent=minutes <10 ? '0' + minutes : minutes
  hoursContainer.textContent=hours <10 ? '0' + hours : hours
  daysContainer.textContent=days <10 ? '0' + days : days


}

setInterval(updateCountdowns, 1000)