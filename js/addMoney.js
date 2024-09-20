
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    const addMoneyInput = Number(document.getElementById('input-add-money').value) ;
    const pinInput = document.getElementById('input-pin').value;
    console.log(addMoneyInput, pinInput);

    if(pinInput === '1234'){
        console.log('adding money');
        const balance = Number(document.getElementById('account-balance').innerText);
        let newBalance = balance + addMoneyInput;
        console.log(newBalance)

        // be careful the next line 
        document.getElementById('account-balance').innerText = newBalance;
        // ------------------------------->
    }
    else{
        alert('Failed to add money! Please try again');
    }
})