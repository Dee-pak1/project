document.addEventListener('DOMContentLoaded', function() {

    // Search functionality
    const searchInput = document.querySelector('.holiday__search-btn');
    const searchIcon = document.querySelector('.holiday__search .bx-search');

    if (searchInput && searchIcon) {
        searchIcon.addEventListener('click', function() {
            performSearch(searchInput.value);
        });

        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch(this.value);
            }
        });
    }

    // Countdown Timer for Beaches section
    function updateCountdown() {
        // Set the date we're counting down to (24 hours from now)
        const countDownDate = new Date().getTime() + (20 * 60 * 60 * 1000);

        // Update the countdown every 1 second
        const x = setInterval(function() {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Update the time elements
            document.querySelector('.time__block:nth-child(1) .time__number').textContent = 
                days.toString().padStart(3, '0');
            document.querySelector('.time__block:nth-child(2) .time__number').textContent = 
                hours.toString().padStart(2, '0');
            document.querySelector('.time__block:nth-child(3) .time__number').textContent = 
                minutes.toString().padStart(2, '0');
            document.querySelector('.time__block:nth-child(4) .time__number').textContent = 
                seconds.toString().padStart(2, '0');

            if (distance < 0) {
                clearInterval(x);
                document.querySelector('.beaches__wrap-time').innerHTML = "EXPIRED";
            }
        }, 1000);
    }

    // Initialize countdown
    updateCountdown();

    // Newsletter Subscription
    const newsletterForm = document.querySelector('.footer__input');
    const newsletterInput = newsletterForm.querySelector('input');
    const newsletterButton = newsletterForm.querySelector('.footer__btn');

    if (newsletterButton) {
        newsletterButton.addEventListener('click', function(e) {
            e.preventDefault();
            if (newsletterInput.value.trim() !== '') {
                alert('Thank you for subscribing to our newsletter!');
                newsletterInput.value = '';
            } else {
                alert('Please enter your email address.');
            }
        });
    }

    // Booking Form Modal and Validation
    function initializeBookingForm() {
        const bookNowButtons = document.querySelectorAll('.beaches__btn, .pri-btn');
        
        bookNowButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                showBookingForm();
            });
        });

        function showBookingForm() {
            const formHtml = `
                <div class="booking-modal">
                    <div class="booking-content">
                        <span class="close-modal">&times;</span>
                        <h2>Book Your Trip</h2>
                        <form id="bookingForm">
                            <input type="text" placeholder="Full Name" required>
                            <input type="email" placeholder="Email" required>
                            <input type="date" placeholder="Travel Date" required>
                            <select required>
                                <option value="">Select Package</option>
                                <option value="pokhara">Pokhara</option>
                                <option value="chitwan">Chitwan</option>
                                <option value="lumbini">Lumbini</option>
                                <option value="lumbini">Mustang </option>
                                <option value="lumbini">Illam</option>
                                <option value="lumbini">Janakpur</option>
                            </select>
                            <button type="submit">Book Now</button>
                        </form>
                    </div>
                </div>
            `;

            // Add modal to page
            document.body.insertAdjacentHTML('beforeend', formHtml);

            // Handle modal close
            const modal = document.querySelector('.booking-modal');
            const closeBtn = document.querySelector('.close-modal');
            
            closeBtn.onclick = () => modal.remove();
            window.onclick = (e) => {
                if (e.target === modal) modal.remove();
            };

            // Handle form submission
            const form = document.getElementById('bookingForm');
            form.onsubmit = (e) => {
                e.preventDefault();  // Prevent page reload on submit
                const fullName = form.querySelector('input[type="text"]').value;
                const email = form.querySelector('input[type="email"]').value;
                const travelDate = form.querySelector('input[type="date"]').value;
                const selectedPackage = form.querySelector('select').value;

                // Display a success message
                if (fullName && email && travelDate && selectedPackage) {
                    alert('Booking submitted successfully! We will contact you soon.');
                    modal.remove();
                } else {
                    alert('Please fill in all the fields.');
                }
            };
        }
    }

    // Initialize booking form
    initializeBookingForm();
});
