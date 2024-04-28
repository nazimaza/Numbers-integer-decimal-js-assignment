
//  clearInput
document.getElementById("clearInput").onclick = function () {
    document.getElementById("number").innerHTML = ""
}

//   clearOutput
document.getElementById("ClearOutput").onclick = function () {
    document.getElementById("Output").innerHTML = ""
}
//Output Function
function showOutput(output){
    document.getElementById("Output").innerHTML = output
}

// Original String
function originalString(string){
  document.getElementById("originalString").innerHTML = string
}


// Round
        function round() {
            let numberInput = document.getElementById("number").value;
            if (!numberInput) {
                Toastify({
                    text: "Please Enter A Number You Want To Round.",
                    duration: 3000,           
                    gravity: "top", // `top` or `bottom`
                    position: "center", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                        background: "linear-gradient(to right, #F5DE09  , #F5DE09 )",
                        color :"black"
                    },
                    onClick: function(){} // Callback after click
                  }).showToast();
                return;
            }  
            let roundedNumber = Math.round(numberInput);  
            let html = "<h1 class='text-primary theme mb-0'>" + roundedNumber + "</h1>";
             showOutput(html)
             originalString(numberInput)
        }
// Ceil
        function ceil() {
            let numberInput = document.getElementById("number").value;
            if (!numberInput) {
                Toastify({
                    text: "Please Enter A Number You Want To Ceil.",
                    duration: 3000,
                    gravity: "top", // `top` or `bottom`
                    position: "center", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                        background: "linear-gradient(to right, #F5DE09  , #F5DE09 )",
                        color :"black"
                    },
                    onClick: function(){} // Callback after click
                  }).showToast();
                return;
            }  
            let ceilNumber = Math.ceil(numberInput);  
            let html = "<h1 class='text-primary theme mb-0'>" + ceilNumber + "</h1>";
             showOutput(html)
             originalString(numberInput)
        }


// Floor

function floor() {
    let numberInput = document.getElementById("number").value;
    if (!numberInput) {
        Toastify({
            text: "Please Enter A Number You Want To Floor.",
            duration: 3000,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #F5DE09  , #F5DE09 )",
                color :"black"
            },
            onClick: function(){} // Callback after click
          }).showToast();
        return;
    }  
    let floorNumber = Math.floor(numberInput);  
    let html = "<h1 class='text-primary theme mb-0'>" + floorNumber + "</h1>";
     showOutput(html)
     originalString(numberInput)
}


// Random Number
function randomNumber(){
    let  randomNumber=Math.random()
     showOutput(randomNumber)
}


// Throw a dice
function dice(){
    let randomNumber=Math.random()
    randomNumber= (randomNumber * 6 +1)
    let dice = Math.floor(randomNumber)
    let html = "<h1 class='text-primary theme mb-0'>" + dice + "</h1>" ;
    showOutput(html)
     originalString(randomNumber)
}


// Password
function password(){
    let randomString=""
    let possibleString= "ABCDEFGHIJKLMNOPQURSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&* ";
    for (let i = 0; i < 16; i++)
    {
        let randomNumber=Math.random()
        randomString += possibleString.charAt(Math.floor(randomNumber*possibleString.length))
    }
    let html = "<h1 class='text-primary theme mb-0'>" +  randomString + "</h1>" ;
    showOutput(html)
}


// converting String
function convertingString(){
    let numberInput = document.getElementById("number").value;
    if (!numberInput) {
        Toastify({
            text: "Please Enter A String Number You Want To convert into Number.",
            duration: 3000,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #F5DE09  , #F5DE09 )",
                color :"black"
            },
            onClick: function(){} // Callback after click
          }).showToast();
        return;
    }  
    numberInput = Number(numberInput)
    showOutput(numberInput)
}


// Controlling Length
function controllingLength(){
    let numberInput = document.getElementById("number").value;
    if (!numberInput) {
        Toastify({
            text: "Please Enter A String Number You Want To convert into Number.",
            duration: 3000,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #F5DE09  , #F5DE09 )",
                color :"black"
            },
            onClick: function(){} // Callback after click
          }).showToast();
        return;
    }  
    originalString(numberInput)
     numberInput = Number(numberInput)
     numberInput=numberInput.toFixed(2)
    showOutput(numberInput)
}

// Calculate GST
function gst(){
    let price = document.getElementById("number").value;
    if (!price) {
        Toastify({
            text: "Please Enter Price on which You want to find GST.",
            duration: 3000,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #F5DE09  , #F5DE09 )",
                color :"black"
            },
            onClick: function(){} // Callback after click
          }).showToast();
        return;
    }  
    originalString(price)
    price = Number(price)
    let tax = price * 18 / 100;
     let sum = tax + price;
    
    let html = "<h1 class='text-primary theme mb-0'>" + sum + "</h1>" ;
    showOutput(html)
}




//  Clear Output
document.getElementById("ClearOutput").onclick = function () {
    document.getElementById("Output").innerHTML = ""
    Toastify({
        text: "Output has been cleared",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: false,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    
}





       






