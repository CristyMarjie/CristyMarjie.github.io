//imports
const radioMulti = document.querySelector('#multiType');  
const radioOne = document.querySelector('#oneType');       
const topRadioBtn = document.querySelectorAll('input[name="typeOfProduct"]');
const chkbx = document.querySelector('#existingProd');  
// const modalInstruction = new bootstrap.Modal.getOrCreateInstance('#howtoordermodal');
const myModalEl = document.getElementById('instructionModal')
const modal = new bootstrap.Modal(myModalEl)



radioMulti.addEventListener("click", () => {
    chkbx.checked = false;
    modal.show();
    // show the output:
    // output.innerText = selectedSize ? `You selected ${selectedSize}` : `You haven't selected any size`;
});

radioOne.addEventListener("click", () => {
    chkbx.checked = true;
});

