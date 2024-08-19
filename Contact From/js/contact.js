document.getElementById("ContactForm").addEventListener('submit' , function (event) {
    
    /*By default, when a form is submitted, the page reloads, and the form data is sent to the server. 
      If you want to handle form data using JavaScript (e.g., via AJAX) 
                                                OR
      Perform validation before submission, you can prevent the default form submission behavior.
    */
    event.preventDefault();
    
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
 
        
    if (fname === '' || lname === '' || email === '' | subject === '' | message === '') {
        alert("please fill in all filelds");
        return;
    }
    
    //Here you can handle the form submission, e.g., sending data to a server
    console.log('Name:' , name);
    console.log('Email:' , email);
    console.log('Subject', subject);
    console.log('Message' , message);

    //Creatig a message for the form submission
    document.getElementById("formMessage").textContent = " Thank you for contacting us!";
    //Reset the form after its submission
    document.getElementById("ContactForm").reset();



});