document.getElementsByClassName("formm")[0].onsubmit= function(e){
    e.preventDefault(); // prevent page reload
let name=document.getElementById("fname").value;
let address=document.getElementById("address").value;
let course=document.getElementById("course").value;
let BloodGroup=document.getElementById("Sname").value;
let ContactNo=document.getElementById("contact").value;
    //i wnt to set main div visibilty none  and divisibility of class result true after clicking button submit and set 
    document.getElementById("entername").innerText="Name : "+name;
    document.getElementById("enteraddress").innerHTML="Address : "+address;
    document.getElementById("entercourse").innerHTML="Course : "+course;
    document.getElementById("enterBloodGroup").innerHTML="BloodGroup  : "+BloodGroup;
    document.getElementById("enterContact").innerHTML="ContactNo : "+ContactNo;

    document.getElementsByClassName("container")[0].style.display="none";
    document.getElementsByClassName("result")[0].style.display="block";

};
