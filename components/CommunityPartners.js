function CommunityPartners() {
  return `
        <section class="community-partners">
            <h2>Thank You to Our Community Partners</h2>
            <div class="carousel">
                <img src="images/partner1.png" alt="Partner 1">
                <img src="images/partner2.png" alt="Partner 2">
                <img src="images/partner3.png" alt="Partner 3">
            </div>
        </section>
    `;
}
document.getElementById("community-partners").innerHTML = CommunityPartners();
document.getElementById("community-partners-component").innerHTML =
  CommunityPartners();
