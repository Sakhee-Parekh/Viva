const form = document.getElementById('choiceForm')

const CHOICE1_YES_URL = 'https://www.youtube.com/embed/dQw4w9WgXcQ'
const CHOICE2_YES_URL = 'https://www.youtube.com/embed/dQw4w6WgXcQ'
const CHOICE3_YES_URL = 'https://www.youtube.com/embed/dQw4w3WgXcQ'
const CHOICE4_YES_URL = 'https://www.youtube.com/embed/dQw4w7WgXcQ'
const CHOICE5_YES_URL = 'https://www.youtube.com/embed/dQw4w8VgXcQ'

// const CHOICE1_NO_URL = 'https://www.youtube.com/embed/dQw4w9WgXcQ'

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const videoDiv = document.getElementById('videoDiv')

  const radioButtons1 = document.getElementsByName('field1')
  const radioButtons2 = document.getElementsByName('field2')
  const radioButtons3 = document.getElementsByName('field3')
  const radioButtons4 = document.getElementsByName('field4')
  const radioButtons5 = document.getElementsByName('field5')

  
  videoDiv.style.display = 'none'
  
  const yesChecked = radioButtons1[0].checked
  const noChecked = radioButtons1[1].checked
  console.log(yesChecked, noChecked)

  const yesChecked2 = radioButtons2[0].checked
  const noChecked2 = radioButtons2[1].checked
  console.log(yesChecked2, noChecked2)

  const yesChecked3 = radioButtons3[0].checked
  const noChecked3 = radioButtons3[1].checked
  console.log(yesChecked3, noChecked3)

  const yesChecked4 = radioButtons4[0].checked
  const noChecked4 = radioButtons4[1].checked
  console.log(yesChecked4, noChecked4)

  const yesChecked5 = radioButtons5[0].checked
  const noChecked5 = radioButtons5[1].checked
  console.log(yesChecked5, noChecked5)

  const frame = document.getElementById('videoFrame')

  if (yesChecked) {
    videoDiv.style.display = 'block'
    frame.setAttribute('src', CHOICE1_YES_URL)
  }

  const frame = document.getElementById('videoFrame2')

  if (yesChecked2) {
    videoDiv.style.display = 'block'
    frame.setAttribute('src', CHOICE2_YES_URL)
  }

//   frame3 = frame
  const frame = document.getElementById('videoFrame3')

  if (yesChecked3) {
    videoDiv.style.display = 'block'
    frame.setAttribute('src', CHOICE3_YES_URL)
  }

//   frame4 = frame
  const frame = document.getElementById('videoFrame4')

  if (yesChecked4) {
    videoDiv.style.display = 'block'
    frame.setAttribute('src', CHOICE4_YES_URL)
  }

  const frame = document.getElementById('videoFrame5')

  if (yesChecked5) {
    videoDiv.style.display = 'block'
    frame.setAttribute('src', CHOICE5_YES_URL)
  }
})
