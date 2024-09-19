document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();
    console.log('login button clicked');

    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);
})