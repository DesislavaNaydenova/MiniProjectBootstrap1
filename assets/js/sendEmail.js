function sendMail(contactForm) {
    emailjs.send("service_x622bv9","desislava", {
        "from_name" : contactForm.name.value,
        "from_email" : contactForm.email.value,
        "message" : contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("Success", response);
        },
        function(error) {
            console.log("FAILED" , error);
        }
    );

    return false;
}