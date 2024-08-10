function Footer() {
    return `
        <footer>
            <video autoplay loop muted playsinline class="footer-background">
                <source src="videos/footer-background.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <div class="footer-content">
                <p>SEVEN Empathy CLE</p>
                <nav>
                    <ul>
                        <li><a href="#!">About SEVEN</a></li>
                        <li><a href="#!">Reach Out</a></li>
                        <li><a href="#!">Share Your Story</a></li>
                        <li><a href="#!">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    `;
}
document.getElementById("footer-component").innerHTML = Footer();