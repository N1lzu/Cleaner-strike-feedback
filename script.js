document.getElementById("feedback-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const feedback = document.getElementById("feedback").value;

    console.log("Feedback Submitted:");
    console.log("Email:", email);
    console.log("Feedback:", feedback);

    // Näytä viesti käyttäjälle
    alert("Thank you for your feedback!");

    // Tyhjennä kentät
    document.getElementById("feedback-form").reset();

    // Tiedot voit lähettää palvelimelle esim. Fetch- tai XMLHttpRequest-API:lla:
    // fetch("YOUR_API_ENDPOINT", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ email, feedback }),
    // }).then(response => response.json()).then(data => {
    //     console.log("Server Response:", data);
    // }).catch(error => {
    //     console.error("Error submitting feedback:", error);
    // });
});