// // import './style.css'
// // import javascriptLogo from "./javascript.svg";
// import viteLogo from '/vite.svg'
// import {setupCounter} from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
//   `

// setupCounter(document.querySelector('#counter'))

// document.querySelector('body').innerHTML = `
//  <div class="container">
//     <div class="flex flex-col justify-center items-center bg-Dark-Grayish-Blue max-w-xs lg:max-w-2xl">

//     </div>
//  </div>
// `

// Setup api & get html element
import dice from './images/dice.svg'
import diviDk from './images/dividerdekstop.svg'
import diviMb from './images/dividermobile.svg'
const btn = document.querySelector('button')
const quote = document.querySelector('p')
const id_number = document.querySelector('h1')
const API_URL = `https://api.adviceslip.com/advice`
async function getAdvice() {
  try {
    let data = []
    const response = await fetch(API_URL)
    const {
      slip: {advice, id},
    } = await response.json()
    quote.innerText = `"${advice}"`
    id_number.innerText = `advice #${id}`
  } catch (error) {
    console.error(error)
  }
}
getAdvice()
btn.addEventListener('click', getAdvice)
