

var contactRef=firebase.database().ref().child("dvscom/contactenquiry");
document.getElementById("contactF").addEventListener("submit",submitform);
function submitform(e){
    e.preventDefault();
    var name=getInputVal('name');
    var email=getInputVal('email');
    var subject=getInputVal('subject');
    var message=getInputVal('message');

console.log("submitted");
    saveForm(name,email,subject,message);
    document.getElementById("contactF").reset();

}




function getInputVal(id){
return document.getElementById(id).value;
}


function saveForm(name,email,subject,message)
{
    var newContactRef=contactRef.push();
 
    newContactRef.set({
        name :name,
       email :email,
       subject :subject,
       message :message

    });
    $(".success").css("display","block");
    $(".success-none").css("display","none");
    
}