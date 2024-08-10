function CommunityPartners() {
    return `
        <section class="community-partners">
            <h2>Thank You to Our Community Partners</h2>
            <div class="partner-logos">
                <img src="images/partner1.png" alt="Partner 1">
                <img src="images/partner2.png" alt="Partner 2">
                <img src="images/partner3.png" alt="Partner 3">
                <img src="images/partner4.png" alt="Partner 4">
                <!-- Add more partner logos as needed -->
            </div>
        </section>
    `;
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('community-partners-component').innerHTML = CommunityPartners();
});