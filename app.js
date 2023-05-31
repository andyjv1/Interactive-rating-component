const form = document.querySelector("form");
const success = document.querySelector(".success");
const page = document.querySelector(".page");
const spanNumber = document.querySelector("span");
let btns = document.querySelectorAll('input')
let numberValue = []

btns.forEach(btn => btn.addEventListener("click", () => {
    clickedId = btn.getAttribute('id')

    btns.forEach(btn => {
        id = btn.getAttribute('id')
        if (clickedId === id) {
            btn.classList.add('lightGrey')
            numberValue = document.getElementById(`${clickedId}`).value
        } else {
            btn.classList.remove('lightGrey')
        }
    }
    )
    
    form.addEventListener('submit', function (e) {
    e.preventDefault();
    page.style.display = "none";
    success.style.display = "flex";
    spanNumber.innerText = numberValue
    form.reset();
});
})
)



