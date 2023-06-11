// Setup api & get html element
const main = document.querySelector('main')
const btn = document.querySelector('button')
const quote = document.querySelector('p')
const id_number = document.querySelector('h1')
const API_URL = `https://api.adviceslip.com/advice`
async function getAdvice() {
  try {
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
btn.addEventListener('click', () => {
  // blur-md animate-pulse
  let loading = 2500
  let mulai = setInterval(() => {
    main.classList.add('animate-pulse', 'blur-md')
    btn.disabled = true
    btn.classList.add('cursor-not-allowed')
  }, 0)
  setTimeout(() => {
    getAdvice()
    clearInterval(mulai)
    main.classList.remove('animate-pulse', 'blur-md')
    btn.disabled = false
    btn.classList.remove('cursor-not-allowed')
  }, loading)
})
