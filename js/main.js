
function quizInit(e) {
  // Start button disappear
  startDisappear()

  // Submit button appear
  submitAppear()

  // Showing questions
  questionsVisible()


  e.preventDefault()
}

function quizEnd(e) {
  randomAnswer()
  // Reset button appear
  document.querySelector('#reset').style.visibility = "visible"

  e.preventDefault()
}

function questionsVisible() {

  // Get parent
  const form = document.getElementById('quizForm')
  const section = document.createElement('section')

  // Insert in form
  section.innerHTML = `
  <p>Are you waiting for the train?</p>
  <label>Yes</label>
  <input name ='isWaiting' type = 'radio'>
  <label>No</label>
  <input name = 'isWaiting' type = 'radio'>

  <p>What station are you currently at?</p>
  <input type="text">

  <p>Are you late for work?</p>
  <label>Yes</label>
  <input name ='isLate' type = 'radio'>
  <label>No</label>
  <input name = 'isLate' type = 'radio'>

  <p>Do you own a car?</p>
  <label>Yes</label>
  <input name ='isCar' type = 'radio'>
  <label>No</label>
  <input name = 'isCar' type = 'radio'>

  <p>Are you in a rush?</p>
  <label>Yes</label>
  <input name ='rush' type = 'radio'>
  <label>No</label>
  <input name = 'rush' type = 'radio'>



  `
  form.appendChild(section)
}

function clearScreen() {
  const form = document.getElementById('quizForm')
  form.innerHTML = ''
  document.querySelector('#submit').style.display = 'none'


}

const startDisappear = () => {
  // Make button disappear
  document.querySelector('#startQuiz').style.display = 'none'
}

const submitAppear = () => {
  // Make button disappear
  document.querySelector('#submit').style.visibility = 'visible'
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const reset = () => {
  window.location.reload()
}

const randomAnswer = () => {

  const excuse = [
    "Delays of up to 20 minutes on the red line because our trains were only designed to operate in peak efficiency between 68.2 and 68.7 weather. Enjoy your totally packed train where the AC probably isn't working either.",
    "Delays due to Police Activity likely related to the OJ parole. Expect more delays with the inevitable 3 new documentaries",
    "Delays due to a totally unnecessary Ed Sheeren cameo that didn't result in violent vengeance.",
    "Delays due to revelation that Donald Trump Jr. had secret meetings with Russian Lawyer over Alewife Signal. 'Loved it'",
    "The MBTA would just like to remind commuters that while our service is continuously poor and unreliable, you still made the poor life choice as a grown adult to still be living in Boston. Also, the buses aren't coming, ever. You should know that by now, right?",
    "Delays due to weather that appears to be snow, but only in a liquid form. Expect severe delays while we investigate this.",
    "Delays due to another instance of Mutually Assured Influenza at State. We advise against licking the poles next time.",
    "Major delays because we are just really bad at this transit thing. That you haven't figured that out yet is on you, not us.",
    "Severe delays... well... everywhere. It's pretty much all flooded, frozen, on fire, or just generally mismanaged. So you know, typical Monday and have a wonderful day Commuters!",
    "Delays on all lines as we change our twitter password on all of our accounts from our previous password, 12345. That's also the combination to our luggage.",
    "Severe to 'you should probably just walk' delays on all the MBTA trains. In all seriousness, this sounds like it was a pretty bad situation at Central, so if you can work from home for a bit, might want to do that... You probably should just quit your job though",
    "Moderate delays due to the same old bullshit, just with a little colder weather this time. You're welcome!",
    "Delays due to a realization that it isn't right if the marquee counts upward from 2 to 5 minutes away. #TheStruggleIsReal",
    "Delays due to the disappointment of actually having to go to work today. We will now proceed in making you late to rub it in",
    "Delays due to a disabled train that is perpetually 2 minutes away from Central. We encourage you to lower your expectations.",
    "Delays because it snowed like 5 days ago, and it's PERFECTLY REASONABLE for a cold-weather transit system not to work yet",
    "Residual delays due to a lawn chair snow parking marker that gained self awareness at Andrew. We knew this day would come.",
    "Delays due to some new sexy ass recycling bins at Davis. We thought we should give you at least 8 minutes to appreciate this",
    "Delays due to an earlier disabled train from 2013. We just wanted you to lower your expectations for 2019."
  ]
  clearScreen()
  // Get parent
  const answer = document.getElementById('answer')
  // create p element
  const paragraph = document.createElement('p')

  const mbtaExcuse = excuse[getRandomInt(excuse.length)]

  paragraph.innerHTML = `
    <p class="excuse">${mbtaExcuse}</p>
  `

  answer.appendChild(paragraph)

  //numbers.sort( function() { return 0.5 - Math.random() } )

}


document.querySelector('.startQuiz').addEventListener('click', quizInit)
document.querySelector('#submit').addEventListener('click', quizEnd)
document.querySelector('#reset').addEventListener('click', reset)
