$("#mymodal").click(function(){

    // Save the first name as a variable
    var name = $("#name").val();
    var name = $("#email").val();
    var name = $("#message").val();
  
   // Set HTML of .modal-body
  
   $(".modal-body").html("Thank you, " + name + " Your message has been sent!" )
  
    // Clear all fields in form
    $ (".form-control").val("");
   

    if (name){
        $(".modal-body").html("Thank you," + name + ". your message has been sent!");
    }else {
        $(".modal-body").html(".Sorry, Your message was not sent");
    }

  });