
// const experis = document.querySelectorAll('');

// window.addEventListener('scroll' ,  checkboxes);

// experi()

// function experi() {
//     const triggerbottom_experi = window.innerHeight / 5 * 4 ;


//     experis.forEach((experi) => {
//         const experitop = experi.getBoundingClientRect().top;


//         if(experitop < triggerbottom_experi) {
//             experi.classList.add('show');
//         } else {
//             experi.classList.remove('show');
//         }
//     });
// }



const observerleft = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('showleft');

        }
        /* We need animation only once , so remove else part
        else {
            entry.target.classList.remove('show');

            
        } */
    });
});

const hiddenElementsleft = document.querySelectorAll('.hiddenleft');
hiddenElementsleft.forEach((el) => observerleft.observe(el));




const observerright = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('showright');

        }
        /* We need animation only once , so remove else part
        else {
            entry.target.classList.remove('show');

            
        } */
    });
});

const hiddenElementsright = document.querySelectorAll('.hiddenright');
hiddenElementsright.forEach((el) => observerright.observe(el));



/* ends here */






/* Uncover the headings */


const observer_uncover = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('uncover');

        }
        /* We need animation only once , so remove else part 
        else {
            entry.target.classList.remove('show');

            
        } */
    });
});

const hiddenElements_uncover = document.querySelectorAll('.cover');
hiddenElements_uncover.forEach((el) => observer_uncover.observe(el));





















/* All SCROLL TIRGEER in research.html*/ 

const researches = document.querySelectorAll('.project-item');

window.addEventListener('scroll' ,  checkboxes);

checkboxes()

function checkboxes() {
    const triggerbottom_research = window.innerHeight / 5 * 4 ;


    researches.forEach((research) => {
        const researchtop = research.getBoundingClientRect().top;


        if(researchtop < triggerbottom_research) {
            research.classList.add('show');
        } else {
            research.classList.remove('show');
        }
    });
}

 /* For research part ends here */