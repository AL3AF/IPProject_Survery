// Add event listener to the form submit event
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var name = document.getElementById("name").value; // Retrieve the value of the "name" input field
    var email = document.getElementById("email").value; // Retrieve the value of the "email" input field
    var age = document.getElementById("age").value; // Retrieve the value of the "age" input field
    var rating = document.querySelector('input[name="rating"]:checked').value; // Retrieve the value of the selected radio button with the name "rating"
    var visit = document.getElementById("visit").value; // Retrieve the value of the "visit" input field
    var comment = document.getElementById("comment").value; // Retrieve the value of the "comment" input field
    var subscribe = document.getElementById("subscribe").checked; // Retrieve the value of the "subscribe" checkbox
  
    // Display the entered data
    document.getElementById("result").innerHTML = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Age:</strong> ${age}</p>
      <p><strong>Website Rating:</strong> ${rating}</p>
      <p><strong>Last Visit Date:</strong> ${visit}</p>
      <p><strong>Comments:</strong> ${comment}</p>
      <p><strong>Subscribe to Newsletter:</strong> ${subscribe ? "Yes" : "No"}</p>
    `;
  
    // Clear form inputs
    document.getElementById("myForm").reset();
  });
  