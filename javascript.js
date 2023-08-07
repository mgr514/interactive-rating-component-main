
const submit_button = document.querySelector(['rating-submit'])
const ratingInputs = document.querySelector(['rating-inputs'])
const thankYouState = document.querySelector(['thank-you-state'])
const rating_buttons = document.querySelectorAll('input')
const score = document.getElementById('score')


let rating_value = '0';



const checkRatingValue = () => {
    rating_buttons.forEach {
        (input) => {
            if(input.checked) {
                rating_value = input.value
            }}}}


submit_button.addEventListener('click', () =>
    {
    ratingInputs.classList.add('hidden')
    thankYouState.classList.remove('hidden')
    checkRatingValue()
    score.innerHTML = rating.value
});