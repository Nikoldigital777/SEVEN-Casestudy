function Hero() {
    return `
        <div class="hero">
            <h1>Creating Space for Mental Health in Schools</h1>
            <p>for Youth & Adults</p>
            <button class="learn-more-btn">Learn More</button>
        </div>
    `;
}
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('hero-component').innerHTML = Hero();
});