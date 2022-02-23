$(document).ready(() => {
    $("#signUp").submit((event) => {
      event.preventDefault();
      var firstName = $("#firstName").val();
      var lastName = $("#lastName").val();
      var dob = $("#dob").val();
      var email = $("#email").val();
      var contact = $("#contact").val();
      var city = $("#city").val();
      var gender = $("#gender").val();
      var password = $("#password").val();
    
  
      $.ajax({
        url: "http://localhost:3000/users",
        method: "POST",
        required :"true",
        data: {
          firstName: firstName,
          lastName: lastName,
          dob: dob,
          email: email,
          contact: contact,
          city: city,
          Gender: gender,
          password: password,
        },
        success:(x)=>{
            
            window.location ="index.html";
            alert(x.firstName+" added successfully");
        },
        error:(e)=>{
            alert("error occured");
        }
      });
    });
    
  });
  
  
  