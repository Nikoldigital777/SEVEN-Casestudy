function Header() {
    return `
        <header>
            <div class="logo">
                <img src="images/logo.png" alt="SEVEN Logo">
            </div>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#share">Share</a></li>
                    <li><a href="#news">News</a></li>
                    <li><a href="#stories">Stories</a></li>
                    <li><a href="#resources">Resources</a></li>
                </ul>
            </nav>
            <button class="book-btn">Book</button>
        </header>
    `;
}
document.getElementById('header').innerHTML = Header();
document.getElementById('header-component').innerHTML = Header();
