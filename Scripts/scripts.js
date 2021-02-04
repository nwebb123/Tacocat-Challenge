//This is saying "document, grab element by id(button) and listen for when it is clicked, 
//and when clicked, execute this anonymous function
document.getElementById("flipBtn").addEventListener("click", function () {

    let inputWord = document.getElementById("input1").value;
    let lowerInput = inputWord.toLowerCase().replace(/\s|\'|\"/g, ''); //Regex that ensures any input is made lowercase
    let reverseWord = "";

    for (let i = inputWord.length - 1; i >= 0; i--) {
        reverseWord += inputWord.charAt(i);

    }

    //step 3
    //spit it back out
    document.getElementById("reverseOutput").innerHTML = reverseWord;

    if (lowerInput == reverseWord) {
        Swal.fire("It's a Palindrome!");
    } else {
        Swal.fire("Nope, not a palindrome. Try again!")
    }

})


//Adding validation to ensure the user only enters appropriate characters for the Palindrome
document.querySelectorAll(".lettersOnly").addEventListener("keydown", function (evt) {

    let character = (evt.which) ? evt.which : evt.keyCode;    //Turnery Operator; this is more explicit; I'm assigning some value to the variable character. That value will either be e.which or e.keyCode depending on whether e.which is

    console.log(character)
    if (character >= 97 && character <= 122 || character >= 65 && character <= 90 || character == 8) {
        return true;
    }
    else {
        evt.preventDefault();
        return false;
    }


});