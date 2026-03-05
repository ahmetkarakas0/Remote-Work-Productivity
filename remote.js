const form = document.querySelector('.question-form');
const result = document.querySelector('.result p');
const resultheader = document.querySelector('.results span');
const results = document.querySelector('.results');

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
    
    result.textContent =`Your remote work productivity: %${testPercent}`;
    resultheader.textContent =`%${testPercent}`;

    results.classList.remove('d-none');
    form.reset();
    window.scroll(0,0);

})