function processFormData(){
    let userName:= document.getElementById("user_name_id");
    let email:= document.getElementById("email_id");
    let movietype:= document.getElementById("comboId");

    if(userName.value.length == 0 || email.value.length == 0){
        alert("There is no user name or email data!!!");
    }else {
        document.getElementById("formDataID").style.color="blue";
        document.getElementById("formDataID").style.fontSize="15pt";
        document.getElementById("formDataID").style.fontFamily="Courier New, monospace";
        let usn: string ="<br/> User name: " + userName.value;
        let em: string ="<br/> User name: " + email.value;
        let mt: string ="<br/> User name: " + movietype.value;
        document.getElementById("formDataID").innerHTML = usn + em + mt;
        userName.value="";
        email.value="";
    }
}