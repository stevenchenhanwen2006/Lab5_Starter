// explore.js

const synth = window.speechSynthesis;

window.addEventListener('DOMContentLoaded', init);

function init() {
  synth.addEventListener('voiceschanged', addVoiceList);

  let input_text = document.querySelector('#text-to-speak');
  let press_button = document.querySelector('#explore button');
  press_button.addEventListener('click', () => {
    console.log(input_text.value);
    utterText(input_text.value);
  });

}

/**
 * Adds the list of available voices to the voice selection dropdown.
 * This function is called when the 'voiceschanged' event is triggered on the speech synthesis object.
 */
function addVoiceList() {
    const voices = synth.getVoices();
    console.log(voices);
    for(const voice of voices) {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.setAttribute('data-lang', voice.lang);
      option.setAttribute('data-name', voice.name);
      document.querySelector('#voice-select').appendChild(option);
    }
}

/**
 * Speaks the given text using the selected voice from the dropdown menu.
 * Changes the image to an open-mouthed smile while speaking and reverts it back to a closed-mouthed smile when done.
 * @param {string} text - The text to be spoken.
 */
function utterText(text) {
    let utterThis = new SpeechSynthesisUtterance(text);
    const selectedOption = document.querySelector('#voice-select')
      .selectedOptions[0].getAttribute('data-name');
    console.log(selectedOption);
    for(const voice of synth.getVoices()) {
      if(voice.name === selectedOption) {
        utterThis.voice = voice;
      }
    }
    let smile_image = document.querySelector('#explore img');
    synth.speak(utterThis);
    utterThis.addEventListener('start', () => {
      smile_image.src = 'assets/images/smiling-open.png';
    });
    utterThis.addEventListener('end', () => {
      smile_image.src = 'assets/images/smiling.png';
    });
}