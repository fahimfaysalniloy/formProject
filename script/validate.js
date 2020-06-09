function  formValidator(){
    var firstname=document.getElementById("fname").value;
    var lastname=document.getElementById("lname").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    document.getElementById("fname").className="";
    document.getElementById("fnm-para").className="";
    document.getElementById("lname").className="";
    document.getElementById("lnm-para").className="";
    document.getElementById("email").className="";
    document.getElementById("email-para").className="";
    document.getElementById("password").className="";
    document.getElementById("pass-para").className="";

    var status=true;
     if(firstname==null||firstname=="")
     {
         document.getElementById("fname").className="in-error-fname";
         document.getElementById("fnm-para").className="error-fname";

          status=false;
        
     }
     if(lastname==null||lastname=="")
     {
         document.getElementById("lname").className="in-error-lname";
         document.getElementById("lnm-para").className="error-lname";

         status=false;
        
     }
     var test=(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email));
     
     if (test==false)
     {
     
         document.getElementById("email").className="in-error-email";
         document.getElementById("email-para").className="error-email";

         status=false;
        
     }
    
    
     if(password.length<6)
     {
         document.getElementById("password").className="in-error-password";
         document.getElementById("pass-para").className="error-password";

         status=false;
        
     }
    
    

    
    return status;
}
