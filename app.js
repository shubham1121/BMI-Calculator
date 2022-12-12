// console.log('I am shubham');
window.onload = function doThis() {
    var calBtn = document.querySelector("#calc-bmi");
    var resText = document.querySelector("#bmi-res");
    var height = document.querySelector("#height");
    var weight = document.querySelector("#weight");
    console.log(height.value);
    function clickHandler() {
        
        if (height.value <= 0 || weight.value <= 0) {
            resText.style.padding = "1rem";
            resText.style.border = "0.25rem solid rgb(109, 198, 227)";
            resText.innerText = 'Wrong Input Values!';
        }
        else {
            var res = ((weight.value) / Math.pow(height.value/100,2)).toFixed(2);
            
            resText.style.padding = "1rem";
            resText.style.border = "0.25rem solid rgb(109, 198, 227)";
            if(res>=30)
            {
                resText.innerText = 'Wrong Input Values!';
            }
            else
            {
                resText.innerText = 'BMI : ' + res;
            }
        }

    }
    calBtn.addEventListener(("click"), clickHandler);

}
