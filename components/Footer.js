function Footer() {
  return `
        <footer>
            <p>SEVEN Empathy CLE</p>
            <nav>
                <ul>
                    <li><a href="#!">About SEVEN</a></li>
                    <li><a href="#!">Reach Out</a></li>
                    <li><a href="#!">Share Your Story</a></li>
                    <li><a href="#!">Contact</a></li>
                </ul>
            </nav>
        </footer>
    `;
}
document.getElementById("footer").innerHTML = Footer();
document.getElementById("footer-component").innerHTML = Footer();
