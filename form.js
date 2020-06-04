function check() {  
    var p = document.getElementById("pass").value;  
    var m=document.getElementById("mn").value;
    if(p[0].match(/[A-Z]/g) && p.match(/[0-9]/g) && !p.match(/[" "]/g) && p.match(/[^a-zA-Z\d]/g) && p.length == 8 
    && m[0].match(/[0]/g) && m.length == 11  && !m.match(/[A-Z]/g) && !m.match(/[a-z]/g) && !m.match(/[" "]/g) && !m.match(/[^a-zA-Z\d]/g))
    {
        return; 
    }
    else if(!p[0].match(/[A-Z]/g))
    {
        document.getElementById("demo").innerHTML = "the First Char Must be Upper";
        document.getElementById("demo").style.color = "red";
    }
    else if(!p.match(/[0-9]/g))
    {
        document.getElementById("demo").innerHTML = "Password Must have at Least one Digit";
        document.getElementById("demo").style.color = "red";
    }
    
    else if(p.match(/[" "]/g))
    {
        document.getElementById("demo").innerHTML = "White Space isn't Allowed";
        document.getElementById("demo").style.color = "red";
    }
    else if(p.length != 8)
    {
        document.getElementById("demo").innerHTML = "Password Length Must be 8 Chars";
        document.getElementById("demo").style.color = "red";
    }
    else if(!p.match(/[^a-zA-Z\d]/g))
    {
        document.getElementById("demo").innerHTML = "Password Must have one special char like - _ # * &";
        document.getElementById("demo").style.color = "red";
    }
    else if(!m[0].match(/[0]/g))
    {
        document.getElementById("demo2").innerHTML ="the mobile number should begin with zero(0)";
        document.getElementById("demo2").style.color = "red";
    }
    else if(m.length != 11)
    {
        document.getElementById("demo2").innerHTML ="the mobile number must be 11 numbers";
        document.getElementById("demo2").style.color = "red";
    }
    else if(m.match(/[A-Z]/g)|| m.match(/[" "]/g) || m.match(/[a-z]/g) || m.match(/[^a-zA-Z\d]/g))
    {
        document.getElementById("demo2").innerHTML ="the mobile number must have numbers only";
        document.getElementById("demo2").style.color = "red";
    }
}