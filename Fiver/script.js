function dohvatiKnjige() {
    const search = document.getElementById('search').value;
    const author = document.getElementById('author').value;

    const xhr = new XMLHttpRequest();
    xhr.open("GET", `dohvati_knjige.php?search=${search}&author=${author}`, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const rezultat = JSON.parse(xhr.responseText);
            ispisiRezultate(rezultat);
        }
    };
    xhr.send();
}

function ispisiRezultate(knjige) {
    const tbody = document.getElementById('rezultatiBody');
    tbody.innerHTML = ''; // Očisti prethodne rezultate

    if (knjige.length > 0) {
        knjige.forEach(knjiga => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${knjiga.naslov}</td><td>${knjiga.autor}</td><td>${knjiga.godina}</td>`;
            tbody.appendChild(row);
        });
    } else {
        tbody.innerHTML = '<tr><td colspan="3">Nema rezultata.</td></tr>';
    }
}


    // Animacija sekcija
    document.querySelectorAll("section").forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(30px)";
        setTimeout(() => {
            section.style.transition = "all 1.2s ease";
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        }, 300);
    });

    // Navigacija između stranica s animacijom
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function (event) {
            if (this.getAttribute("href").includes(".html")) {
                event.preventDefault();
                document.body.style.opacity = 0;
                setTimeout(() => {
                    window.location.href = this.getAttribute("href");
                }, 500);
            }
        });
    });