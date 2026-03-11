function validateForm(){
    let userName = document.forms["checkout-form"]["name"].value;
    userName = userName.trim();
    if(userName === ""){
        alert("Please input your name!")
        return false
    }
    return true;
}