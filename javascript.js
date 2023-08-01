const submit_button = document.querySelector('[rating-submit]');
const rating_page = document.querySelector('[data-rating-state]');
const thank_you_page = document.querySelector('[data-thank-you]');
const score = document.getElementById('score');

const rating_buttons = document.querySelectorAll('input');

let rating_value = "0";

rating_buttons.forEach(
    (input) =>
    {
        input.addEventListener('click', () =>
        {
            rating_value = input.value
        })
    }
)

const checkRatingValue = () =>
{   
    rating_buttons.forEach(
        (input) =>
        {
            if(input.checked) {
                rating_value = input.value;
            }
        }
    )
}


submit_button.addEventListener('click', () =>
{
    rating_page.classList.add('hidden');
    thank_you_page.classList.remove('hidden');
    checkRatingValue();
    score.innerHTML = rating_value;
});