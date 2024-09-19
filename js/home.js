
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    const addMoneyInput = document.getElementById('input-add-money').value ;
    const pinInput = document.getElementById('input-pin').value;
    console.log(addMoneyInput, pinInput);
})