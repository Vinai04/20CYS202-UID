function validateDetails() 
                    {
                    let a,b,c,d,e,f;
                    a=document.hello.txt.value;
                    b=document.hello.pwd.value;
                    c=document.hello.email.value;
                    d=document.hello.city.value;
                    e=document.hello.clg.value;
                    f=document.hello.ph.value;
                    g=document.hello.add.value;
                    console.log(a);
                    console.log(b);
                    if(a=="")
                    {
                        alert("Username must be filled out!");
                        return false;
                    }
                    else if(a.length <=3 || a.length>20)
                    {
                        alert("Enter the username within the range!");
                        return false;
                    }
                    else if(b.length<8 ||  b.length>24)
                    {
                        alert("Enter the password within the range!");
                        return false;
                    }
                    else if(b=="")
                    {
                        alert("Password is required!");
                        return false;
                    }
                    else if(c=="")
                    {
                        alert("Enter your email!");
                        return false;
                    }
                    else if(d=="")
                    {
                        alert("Which city do you belong to?");
                        return false;
                    }
                    else if(e=="")
                    {
                        alert("College name must be filled out!");
                        return false;
                    }
                    else if(f=="")
                    {
                        alert("Phone number is required!");
                        return false;
                    }
                    else if(g=="")
                    {
                        alert("Address must be filled!");
                        return false;
                    }

                    else
                    {
                        alert("Your response has been submitted successfully!");
                        return true;
                    }
                    
                }