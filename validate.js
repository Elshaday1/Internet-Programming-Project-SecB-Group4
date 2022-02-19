let accountList = [];
console.log(accountList);

function signUpValid(){
    var firstName = document.getElementById("fname").value;
var lastName =  document.getElementById("lname").value;
    let password = document.getElementById("pass").value;
    let confirm = document.getElementById("cpass").value;
    console.log(password);

    if(password == confirm){
        const account =
            {
                fname: firstName,
                lname: lastName,
                pword: password
            }

            accountList.push(account);

        window.localStorage.setItem("generateAccount", JSON.stringify(accountList));
        console.log(accountList);
        window.location.replace("feed.html");
        }

     else 
     {  
        alert("Password Didn't Match!");
    }
}


function logInValid(){
    var username = document.getElementById("uname").value;
    var password = document.getElementById("lpass").value;

    const accountJSON = localStorage.getItem("generateAccount");
    const accountList = JSON.parse(accountJSON);
    
    for (let i=0; i<accountList.length; i++)
    {
        if( username == accountList[i].fname && password == accountList[i].pword)
        {
            alert("Logged In");
            window.location.replace("feed.html");
        }
        else{
            alert("try again");
            window.location.replace("sign in up.html");
        }
    }
        
    }







/*var firstName = document.getElementById("fname").value;
var lastName =  document.getElementById("lname").value;
let password = document.getElementById("pass").value;
let confirm = document.getElementById("cpass").value;

JSON.stringify(password);
JSON.stringfy(confirm);

function regValidation()
    console.log("password");
    console.log("confirm");
{
    if(password == confirm)
    {
        
        const account =[
            {
                fname: firstName,
                lname: lastName,
                pword: password
            }
           
        ]

        window.localStorage.setItem("generateAccount", JSON.stringify(account));
        alert("registered");
    }
    else {
        alert("Password dont match");
        alert(password + " " + confirm);
    }
}*/
    


