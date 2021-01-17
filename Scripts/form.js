const form = document.getElementById('choiceForm')

const CHOICE1_YES_URL = 'https://www.youtube.com/embed/dQw4w9WgXcQ'
const CHOICE1_NO_URL = 'https://www.youtube.com/embed/dQw4w9WgXcQ'

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const videoDiv = document.getElementById('videoDiv')
  const radioButtons1 = document.getElementsByName('field1')
  
  videoDiv.style.display = 'none'
  const yesChecked = radioButtons1[0].checked
  const noChecked = radioButtons1[1].checked
  console.log(yesChecked, noChecked)

  const frame = document.getElementById('videoFrame')

  if (yesChecked) {
    videoDiv.style.display = 'block'
    frame.setAttribute('src', CHOICE1_YES_URL)
  }
})
