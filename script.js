// script.js

document.addEventListener('DOMContentLoaded', () => {
    const staticGif = document.getElementById('giftstatico');
    const giftGif = document.getElementById('gift');
    const confetti = document.body; // Reference to the body for changing the background
    const dancingBunnyLeft = document.getElementById('dancingbunny-left'); // Reference to the left dancing bunny gif
    const dancingBunnyRight = document.getElementById('dancingbunny-right'); // Reference to the right dancing bunny gif
    const instruction = document.getElementById('instruction'); // Reference to the instruction text
    const birthdayMessage = document.getElementById('birthday-message'); // Reference to the Happy Birthday message

    // Initially hide the gift.gif and confetti background
    giftGif.style.display = 'none';
    dancingBunnyLeft.style.display = 'none';
    dancingBunnyRight.style.display = 'none';
    confetti.style.backgroundImage = 'none'; // Remove the confetti background initially

    // Add event listener to the first image (static gif)
    staticGif.addEventListener('click', () => {
        // Show the gift.gif and hide the static gif
        giftGif.style.display = 'block';
        staticGif.style.display = 'none';

       // Show the dancing bunny gifs
       dancingBunnyLeft.style.display = 'block';
       dancingBunnyRight.style.display = 'block';

        // Show the confetti background
        confetti.style.backgroundImage = 'url("confetti.gif")';

        // Flash rainbow colors
        flashRainbowColors();

        // Hide the instruction text
        instruction.style.display = 'none';

        // Show the Happy Birthday message
        birthdayMessage.style.display = 'block';
    });

});

// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'swap to gift') {
        // Show the gift.gif and hide the static gif
        document.getElementById('gift').style.display = 'block';
        document.getElementById('giftstatico').style.display = 'none';
        // Show the dancing bunny gifs
        document.getElementById('dancingbunny-left').style.display = 'block';
        document.getElementById('dancingbunny-right').style.display = 'block';
        // Show the confetti background
        document.body.style.backgroundImage = 'url("confetti.gif")';
        // Flash rainbow colors
        flashRainbowColors();
        // Hide the instruction text
        document.getElementById('instruction').style.display = 'none';
        // Show the Happy Birthday message
        document.getElementById('birthday-message').style.display = 'block';
    }  else {
        // If neither "swap to gift" nor "open gift" was clicked, show an alert message
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#d8bfd8', /* pastel purple */
        '#add8e6', /* pastel blue */
        '#dda0dd', /* pastel violet */
        '#fcc3c8', /* pastel sakura pink */
        '#e0ffff', /* pastel cyan */
        '#ff5c5c', /* pastel heart red */
        '#f4edc5'  /* pastel lily */];

    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}
