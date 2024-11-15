
function sortProjects(option) { // projeleri sıralama için gerekli js kodları
    const projectsContainer = document.getElementById('projects');
    const projects = Array.from(projectsContainer.getElementsByClassName('project'));

    
    if (option === 'recent') {
        projects.sort((a, b) => new Date(b.dataset.date) - new Date(a.dataset.date));
    } else if (option === 'favorites') {
        projects.sort((a, b) => b.dataset.likes - a.dataset.likes);
    }
    projects.forEach(project => projectsContainer.appendChild(project));
}
function openModal(imageSrc, description) { // burası da projeler kısmında tıkladığımda resim ve diğer gerekenler için olan kısım
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');

    modal.style.display = "block"; // Modali gösterme
    modalImage.src = imageSrc; // Resmi modalda gösterme
    modalCaption.innerHTML = description; 
}
window.onclick = function (event) {
    const modal = document.getElementById('imageModal');
    if (event.target == modal) {
        modal.style.display = "none"; // Modali gizle
    }
};
document.getElementById('contactForm').addEventListener('submit', function(event) { //form kısmında bazı gerekenleri vermedğimiz sürece bizi blocklamasını sağlaıyoruz
    event.preventDefault();  // Formun varsayılan gönderimini engeller
    const name = document.getElementById('fname').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('subject').value.trim();
    const feedback = document.getElementById('error-message');
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (name === "") {
        feedback.textContent = "Lütfen isminizi girin.";
        feedback.style.display = "block";
        return;
    }
    if (email === "") {
        feedback.textContent = "Lütfen e-posta adresinizi girin.";
        feedback.style.display = "block";
        return;
    }
    if (!emailPattern.test(email)) {
        feedback.textContent = "Geçerli bir e-posta adresi girin. (Örnek: example@domain.com)";
        feedback.style.display = "block";
        return;
    }
    if (message === "") {
        feedback.textContent = "Lütfen mesajınızı yazın.";
        feedback.style.display = "block";
        return;
    }
    feedback.style.color = "#88f";
    feedback.textContent = "Mesajınız başarıyla gönderildi!";
    feedback.style.display = "block";
    document.getElementById('contactForm').reset();
});
function showMore() { /* hakkımda kısmı daha fazla göster */
    
    const showMoreBtn = document.getElementById('showMoreBtn');
    const fullContent = document.getElementById('fullContent');
       
        if (fullContent.style.display === "none") {
            fullContent.style.display = "block";  // İçeriği göster
            showMoreBtn.textContent = "Daha Az Göster";  // Buton metnini değiştir
        } else {
            fullContent.style.display = "none";  // İçeriği gizle
            showMoreBtn.textContent = "Daha Fazla Göster";  // Buton metnini geri değiştir
        }
};
function showTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0'); //saat kısmı için gerekli js kodları

   
    const currentTime = `${hours}:${minutes}:${seconds}`;

    
    document.getElementById('clock').textContent = currentTime;
}
setInterval(showTime, 1000); // showTime fonksiyonunu her 1 saniyede bir çağır
showTime();// Sayfa yüklendiğinde saati hemen göstermek için ilk başta fonksiyonu çağırın