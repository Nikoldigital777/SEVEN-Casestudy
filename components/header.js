function Header() {
    return `
        <nav>
            <ul>
                <li><a href="#home">HOME</a></li>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#share">SHARE</a></li>
                <li><a href="#news">NEWS</a></li>
                <li><a href="#stories">STORIES</a></li>
                <li><a href="#resources">RESOURCES</a></li>
            </ul>
        </nav>
        <div class="logo">
            <img src="images/logo.png" alt="SEVEN Logo">
        </div>
        <button class="book-btn">BOOK</button>
    `;
}
document.addEventListener('DOMContentLoaded', function() {
    const headerComponent = document.getElementById('header-component');
    if (headerComponent) {
        headerComponent.innerHTML = Header();
    } else {
        console.error('Header component element not found');
    }
});