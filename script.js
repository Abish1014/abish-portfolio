//digital clock 
const clock = document.querySelector(".clock");

function runClock() {
    var time = new Date();
    var hrs = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var text = "AM";
    if (hrs > 12) {
        hrs = hrs - 12;
        text = "PM";
    } else if (hrs == 0) {
        hrs = 12;
        text = "AM";
    }
    hrs=hrs<10?'0'+hrs:hrs;
    min=min<10?'0'+min:min;
    sec=sec<10?'0'+sec:sec;
    clock.innerHTML = `${hrs} : ${min} : ${sec} : ${text}`;
}
runClock();
setInterval(runClock, 1000);


function downloadResume() {
    // Replace 'your_resume.pdf' with the actual path to your resume file
    var resumePath = 'Resume.pdf';

    // Create a link element
    var link = document.createElement('a');

    // Set the download attribute and create a download link
    link.download = 'Resume.pdf';
    link.href = resumePath;

    // Append the link to the body and trigger a click
    document.body.appendChild(link);
    link.click();

    // Remove the link from the body
    document.body.removeChild(link);
}

function submitForm(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way
  
    // Perform form validation
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
  
    if (!name || !email || !subject || !message) {
      alert('Please fill in all fields.');
      return;
    }
  
    // Simulate form submission (replace with actual form submission logic)
    var form = document.getElementById('contactForm');
    form.reset();
  
    // Display a confirmation message
    alert('Thank you for your message! I will get back to you soon.');
  }
  