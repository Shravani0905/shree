// JavaScript to handle button click and reveal the proposal message
document.getElementById('proposal-btn').addEventListener('click', function() {
    // Reveal the proposal message when the button is clicked
    document.getElementById('proposal-message').style.display = 'block';
    // Hide the proposal button after it has been clicked
    document.getElementById('proposal-btn').style.display = 'none';
});
document.getElementById('yes-btn').addEventListener('click', function() {
    // Reveal the proposal message when the button is clicked
    document.getElementById('yes-msg').style.display = 'block';
    // Hide the proposal button after it has been clicked
    document.getElementById('yes-btn').style.display = 'none';
});
document.getElementById('no-btn').addEventListener('click', function() {
    // Reveal the proposal message when the button is clicked
    document.getElementById('no-msg').style.display = 'block';
    // Hide the proposal button after it has been clicked
    document.getElementById('no-btn').style.display = 'none';
});