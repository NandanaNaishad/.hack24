// JavaScript to handle navigation
document.getElementById('makeOrderBtn').addEventListener('click', function() {
    // Redirect to the Order Options page
    window.location.href = 'payment.html'; // Ensure this path is correct
});

// Optional: Define functions for payment options if needed
function payUPI() {
    // Handle UPI payment option
    alert('UPI payment selected');
}

function payCOD() {
    // Handle Cash on Delivery payment option
    alert('Cash on Delivery selected');
}
