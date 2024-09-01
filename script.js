// script.js
document.addEventListener("DOMContentLoaded", function() {
    var countdownElement = document.getElementById("countdown");
    var downloadLink = document.getElementById("download-link");
    var countdown = 10;

    var interval = setInterval(function() {
        countdown--;
        countdownElement.textContent = countdown;

        if (countdown <= 0) {
            clearInterval(interval);
            downloadLink.style.display = "block";
            downloadLink.href = getDownloadLink(); // استبدل هذا برابط الملف الفعلي
        }
    }, 1000);
});

function getDownloadLink() {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('file');
}
