const buttons = document.querySelectorAll(".faq__button");

function toggleClasses(selected) {
    const question = selected.children[0];
    const arrowIcon = selected.children[1];
    const answer = selected.nextElementSibling;

    selected.classList.toggle("faq__button--selected");
    question.classList.toggle("faq__question--selected");
    arrowIcon.classList.toggle("faq__arrow-icon--selected");
    answer.classList.toggle("faq__answer--visible");
}

function expandAnswer(e) {
    if (e.currentTarget.classList.contains("faq__button--selected")) {
        toggleClasses(e.currentTarget);
    } else {
        buttons.forEach(button => {
            if (button.classList.contains("faq__button--selected")) {
                toggleClasses(button);
            }
        });

        toggleClasses(e.currentTarget);
    }
}

buttons.forEach(button => {
    button.addEventListener("click", expandAnswer);
});
