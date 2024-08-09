function Hero() {
  return `
        <section class="hero">
            <h1>Creating Space for Mental Health in Schools</h1>
            <p>for Youth & Adults</p>
            <button class="learn-more-btn">Learn More</button>
        </section>
    `;
}
document.getElementById("hero").innerHTML = Hero();
document.getElementById("hero-component").innerHTML = Hero();
