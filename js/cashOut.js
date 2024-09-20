
document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();

    // Read listener
    const cashOut = Number(document.getElementById('input-cash-out').value) ;
    const cashPin = document.getElementById('cash-out-pin').value ;

    if(cashPin === '1234'){
        const balance = Number(document.getElementById('account-balance').innerText);
        const newBalance = balance - cashOut ;
        
        // be careful the next line
        document.getElementById('account-balance').innerText = newBalance;

    }
    else{
        alert('Failed to cash out! please try again later')
    }

});