// set initial count
let count = 0;

//  select value & buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

// console.log(btns);

// loop over all buttons and do a function when click event listener is activated
btns.forEach(function (btn) {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList;
        
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('increase')){
            count++;
        }
        else{
            count=0;
        }
        if(count>0 ){
            value.style.color = 'green';
        }
        if(count<0){
            value.style.color = 'red'
        }
        if(count==0){
            value.style.color = '#222'
        }
        value.textContent=count;
        // console.log(e.currentTarget.classList);
    });
});
