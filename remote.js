const form = document.querySelector('.question-form');
const result = document.querySelector('.result p');
const resultheader = document.querySelector('.results span');
const results = document.querySelector('.results');
const rap = document.querySelector('.german');


form.addEventListener('submit',e => {
    const checkedValues = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value];
    e.preventDefault();
    let testPercent = 0;
    checkedValues.forEach( answers => {
        if( answers === 'N'){
            testPercent += 20;
        }
        console.log(testPercent);
    });
    rap.textContent = "";
    result.textContent =""; 

    results.classList.remove('d-none');
    form.reset();
    window.scroll(0,0);
    setTimeout(() => {
        result.textContent =`Your remote work productivity: %${testPercent}`;  

    }, 3502);

    let messageMy = "Your remote work productivity"
    let looper = 0;
    const daktilo = setInterval(() => {
        rap.textContent += messageMy[looper];
        looper++;
        if(looper == messageMy.length){
            clearInterval(daktilo);
        }
    },32)

    if(testPercent === 0) {
        resultheader.textContent =`%${testPercent}`;
        return;
    }
    
    let percentFirst = 0;
    const percentFunction = setInterval( () => {
        percentFirst++;
        resultheader.textContent =`%${percentFirst}`;
        if (percentFirst == testPercent) {
            clearInterval(percentFunction);
        }



    },21)


})