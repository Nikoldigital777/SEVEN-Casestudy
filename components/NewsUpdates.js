function NewsUpdates() {
  return `
        <section class="news-updates">
            <h2>News & Updates</h2>
            <div class="news-item">
                <img src="images/news1.png" alt="YMFA Certification Unlocked">
                <h3>YMFA Certification Unlocked!</h3>
                <p>Interested in becoming certified in Youth Mental Health First Aid? Please read for more information and how to sign up.</p>
                <p class="date">Feb 10, 2023</p>
                <a href="#!" class="read-more-btn">Read More</a>
            </div>
            <div class="news-item">
                <img src="images/news2.png" alt="Day 1: Becoming a Mental Health First Aid Instructor">
                <h3>Day 1: Becoming a Mental Health First Aid Instructor</h3>
                <p>Today marks the first day of my journey of becoming an instructor for Mental Health First Aid instructor for Youth.</p>
                <p class="date">Feb 6, 2023</p>
                <a href="#!" class="read-more-btn">Read More</a>
            </div>
            <div class="news-item">
                <img src="images/news3.png" alt="Entering 2023">
                <h3>Entering 2023</h3>
                <p>This is a bit of a personal post I hope you’ll allow. This morning, as my immigrant parents are visiting their home in Laos.</p>
                <p class="date">Jan 12, 2023</p>
                <a href="#!" class="read-more-btn">Read More</a>
            </div>
        </section>
    `;
}
document.getElementById("news-updates").innerHTML = NewsUpdates();
document.getElementById("news-updates-component").innerHTML = NewsUpdates();
