const getData = async(js) => {
    const response = await fetch(js);
    const data = await response.json();
    init(data);
    window.onclick = event => {
        const navBtns = document.querySelectorAll('#navMenuList li');
        if (event.target == navBtns[0] && !navBtns[0].classList.contains('active')) {
            init(data);
            navBtns.forEach(btn => btn == navBtns[0] ? btn.classList.add('active') : btn.classList.remove('active'));
            document.querySelector('#navMenuCheck').checked = false;
        } else if (event.target == navBtns[1] && !navBtns[1].classList.contains('active')) {
            navBtns.forEach(btn => btn == navBtns[1] ? btn.classList.add('active') : btn.classList.remove('active'));
            pages.forEach(page => page.id == 'pageDest' ? page.style.display = 'flex' : page.style.display = null);
            document.querySelector('#navMenuCheck').checked = false;
            window.innerWidth >= 768 ? document.body.style.backgroundImage = 'url(./assets/destination/background-destination-desktop.jpg)' : window.innerWidth >= 600 ? document.body.style.backgroundImage = 'url(./assets/destination/background-destination-tablet.jpg)' : document.body.style.backgroundImage = 'url(./assets/destination/background-destination-mobile.jpg)';
        } else if (event.target == navBtns[2] && !navBtns[2].classList.contains('active')) {
            navBtns.forEach(btn => btn == navBtns[2] ? btn.classList.add('active') : btn.classList.remove('active'));
            pages.forEach(page => page.id == 'pageCrew' ? page.style.display = 'flex' : page.style.display = null);
            document.querySelector('#navMenuCheck').checked = false;
            window.innerWidth >= 768 ? document.body.style.backgroundImage = 'url(./assets/crew/background-crew-desktop.jpg)' : window.innerWidth >= 600 ? document.body.style.backgroundImage = 'url(./assets/crew/background-crew-tablet.jpg)' : document.body.style.backgroundImage = 'url(./assets/crew/background-crew-mobile.jpg)';
        } else if (event.target == navBtns[3] && !navBtns[3].classList.contains('active')) {
            navBtns.forEach(btn => btn == navBtns[3] ? btn.classList.add('active') : btn.classList.remove('active'));
            pages.forEach(page => page.id == 'pageTech' ? page.style.display = 'flex' : page.style.display = null);
            document.querySelector('#navMenuCheck').checked = false;
            window.innerWidth >= 768 ? document.body.style.backgroundImage = 'url(./assets/technology/background-technology-desktop.jpg)' : window.innerWidth >= 600 ? document.body.style.backgroundImage = 'url(./assets/technology/background-technology-tablet.jpg)' : document.body.style.backgroundImage = 'url(./assets/technology/background-technology-mobile.jpg)';
        };
        if (event.target == document.querySelector('#navLogo')) navBtns[0].click();
        if (event.target == document.querySelector('#explore')) navBtns[1].click();
        const destBtns = document.querySelectorAll('#destMenu li');
        if (event.target == destBtns[0] && !destBtns[0].classList.contains('active')) {
            destBtns.forEach(btn => btn == destBtns[0] ? btn.classList.add('active') : btn.classList.remove('active'));
            pages[1].querySelector('img').src = data.destinations[0].images.png;
            pages[1].querySelector('h1').textContent = data.destinations[0].name;
            pages[1].querySelector('p').textContent = data.destinations[0].description;
            pages[1].querySelector('#distVal .value').textContent = data.destinations[0].distance;
            pages[1].querySelector('#timeVal .value').textContent = data.destinations[0].travel;
        } else if (event.target == destBtns[1] && !destBtns[1].classList.contains('active')) {
            destBtns.forEach(btn => btn == destBtns[1] ? btn.classList.add('active') : btn.classList.remove('active'));
            pages[1].querySelector('img').src = data.destinations[1].images.png;
            pages[1].querySelector('h1').textContent = data.destinations[1].name;
            pages[1].querySelector('p').textContent = data.destinations[1].description;
            pages[1].querySelector('#distVal .value').textContent = data.destinations[1].distance;
            pages[1].querySelector('#timeVal .value').textContent = data.destinations[1].travel;
        } else if (event.target == destBtns[2] && !destBtns[2].classList.contains('active')) {
            destBtns.forEach(btn => btn == destBtns[2] ? btn.classList.add('active') : btn.classList.remove('active'));
            pages[1].querySelector('img').src = data.destinations[2].images.png;
            pages[1].querySelector('h1').textContent = data.destinations[2].name;
            pages[1].querySelector('p').textContent = data.destinations[2].description;
            pages[1].querySelector('#distVal .value').textContent = data.destinations[2].distance;
            pages[1].querySelector('#timeVal .value').textContent = data.destinations[2].travel;
        } else if (event.target == destBtns[3] && !destBtns[3].classList.contains('active')) {
            destBtns.forEach(btn => btn == destBtns[3] ? btn.classList.add('active') : btn.classList.remove('active'));
            pages[1].querySelector('img').src = data.destinations[3].images.png;
            pages[1].querySelector('h1').textContent = data.destinations[3].name;
            pages[1].querySelector('p').textContent = data.destinations[3].description;
            pages[1].querySelector('#distVal .value').textContent = data.destinations[3].distance;
            pages[1].querySelector('#timeVal .value').textContent = data.destinations[3].travel;
        }
        const crewBtns = document.querySelectorAll('#crewMenu li');
        if (event.target == crewBtns[0] && !crewBtns[0].classList.contains('active')) {
            crewBtns.forEach(btn => btn == crewBtns[0] ? btn.classList.add('active') : btn.classList.remove('active'));
            pages[2].querySelector('img').src = data.crew[0].images.png;
            pages[2].querySelector('h4').textContent = data.crew[0].role;
            pages[2].querySelector('h1').textContent = data.crew[0].name;
            pages[2].querySelector('p').textContent = data.crew[0].bio;
        } else if (event.target == crewBtns[1] && !crewBtns[1].classList.contains('active')) {
            crewBtns.forEach(btn => btn == crewBtns[1] ? btn.classList.add('active') : btn.classList.remove('active'));
            pages[2].querySelector('img').src = data.crew[1].images.png;
            pages[2].querySelector('h4').textContent = data.crew[1].role;
            pages[2].querySelector('h1').textContent = data.crew[1].name;
            pages[2].querySelector('p').textContent = data.crew[1].bio;
        } else if (event.target == crewBtns[2] && !crewBtns[2].classList.contains('active')) {
            crewBtns.forEach(btn => btn == crewBtns[2] ? btn.classList.add('active') : btn.classList.remove('active'));
            pages[2].querySelector('img').src = data.crew[2].images.png;
            pages[2].querySelector('h4').textContent = data.crew[2].role;
            pages[2].querySelector('h1').textContent = data.crew[2].name;
            pages[2].querySelector('p').textContent = data.crew[2].bio;
        } else if (event.target == crewBtns[3] && !crewBtns[3].classList.contains('active')) {
            crewBtns.forEach(btn => btn == crewBtns[3] ? btn.classList.add('active') : btn.classList.remove('active'));
            pages[2].querySelector('img').src = data.crew[3].images.png;
            pages[2].querySelector('h4').textContent = data.crew[3].role;
            pages[2].querySelector('h1').textContent = data.crew[3].name;
            pages[2].querySelector('p').textContent = data.crew[3].bio;
        }
        const techBtns = document.querySelectorAll('#techMenu li');
        if (event.target == techBtns[0] && !techBtns[0].classList.contains('active')) {
            techBtns.forEach(btn => btn == techBtns[0] ? btn.classList.add('active') : btn.classList.remove('active'));
            window.innerWidth >= 768 ? pages[2].querySelector('img').src = data.technology[0].images.portrait : pages[3].querySelector('img').src = data.technology[0].images.landscape;
            pages[3].querySelector('h1').textContent = data.technology[0].name;
            pages[3].querySelector('p').textContent = data.technology[0].description;
        } else if (event.target == techBtns[1] && !techBtns[1].classList.contains('active')) {
            techBtns.forEach(btn => btn == techBtns[1] ? btn.classList.add('active') : btn.classList.remove('active'));
            window.innerWidth >= 768 ? pages[3].querySelector('img').src = data.technology[1].images.portrait : pages[3].querySelector('img').src = data.technology[1].images.landscape;
            pages[3].querySelector('h1').textContent = data.technology[1].name;
            pages[3].querySelector('p').textContent = data.technology[1].description;
        } else if (event.target == techBtns[2] && !techBtns[2].classList.contains('active')) {
            techBtns.forEach(btn => btn == techBtns[2] ? btn.classList.add('active') : btn.classList.remove('active'));
            window.innerWidth >= 768 ? pages[3].querySelector('img').src = data.technology[2].images.portrait : pages[3].querySelector('img').src = data.technology[2].images.landscape;
            pages[3].querySelector('h1').textContent = data.technology[2].name;
            pages[3].querySelector('p').textContent = data.technology[2].description;
        }
    };
};
getData('./data.json');
const pages = document.querySelectorAll('.page');
const init = (d) => {
    pages.forEach(page => {
        page.id == 'pageHome' ? page.style.display = 'flex' : page.style.display = null;
        window.innerWidth >= 768 ? document.body.style.backgroundImage = 'url(./assets/home/background-home-desktop.jpg)' : window.innerWidth >= 600 ? document.body.style.backgroundImage = 'url(./assets/home/background-home-tablet.jpg)' : document.body.style.backgroundImage = 'url(./assets/home/background-home-mobile.jpg)';
        if (page.id == 'pageDest') {
            page.querySelector('img').src = d.destinations[0].images.png;
            page.querySelector('h1').textContent = d.destinations[0].name;
            page.querySelector('p').textContent = d.destinations[0].description;
            page.querySelector('#distVal .value').textContent = d.destinations[0].distance;
            page.querySelector('#timeVal .value').textContent = d.destinations[0].travel;
            page.querySelectorAll('#destMenu li').forEach(li => li == page.querySelector('#destMenu li:first-child') ? li.classList.add('active') : li.classList.remove('active'));
        } else if (page.id == 'pageCrew') {
            page.querySelector('img').src = d.crew[0].images.png;
            page.querySelector('h4').textContent = d.crew[0].role;
            page.querySelector('h1').textContent = d.crew[0].name;
            page.querySelector('p').textContent = d.crew[0].bio;
            page.querySelectorAll('#crewMenu li').forEach(li => li == page.querySelector('#crewMenu li:first-child') ? li.classList.add('active') : li.classList.remove('active'))
        } else if (page.id == 'pageTech') {
            window.innerWidth >= 768 ? page.querySelector('img').src = d.technology[0].images.portrait : page.querySelector('img').src = d.technology[0].images.landscape;
            page.querySelector('h1').textContent = d.technology[0].name;
            page.querySelector('p').textContent = d.technology[0].description;
            page.querySelectorAll('#techMenu li').forEach(li => li == page.querySelector('#techMenu li:first-child') ? li.classList.add('active') : li.classList.remove('active'))
        }
    });
};
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        if (document.body.style.backgroundImage.indexOf('mobile') != -1)
            document.body.style.backgroundImage = document.body.style.backgroundImage.replace('mobile', 'desktop');
        else if (document.body.style.backgroundImage.indexOf('tablet') != -1)
            document.body.style.backgroundImage = document.body.style.backgroundImage.replace('tablet', 'desktop');
    } else if (window.innerWidth >= 600) {
        if (document.body.style.backgroundImage.indexOf('mobile') != -1)
            document.body.style.backgroundImage = document.body.style.backgroundImage.replace('mobile', 'tablet');
        else if (document.body.style.backgroundImage.indexOf('desktop') != -1)
            document.body.style.backgroundImage = document.body.style.backgroundImage.replace('desktop', 'tablet');
    } else if (window.innerWidth < 600) {
        if (document.body.style.backgroundImage.indexOf('tablet') != -1)
            document.body.style.backgroundImage = document.body.style.backgroundImage.replace('tablet', 'mobile');
        else if (document.body.style.backgroundImage.indexOf('desktop') != -1)
            document.body.style.backgroundImage = document.body.style.backgroundImage.replace('desktop', 'mobile');
    }
    if (window.innerWidth >= 768 && document.querySelector('#pageTech img').src.indexOf('landscape') != -1)
        document.querySelector('#pageTech img').src = document.querySelector('#pageTech img').src.replace('landscape', 'portrait')
    else if (window.innerWidth < 768 && document.querySelector('#pageTech img').src.indexOf('portrait') != -1)
        document.querySelector('#pageTech img').src = document.querySelector('#pageTech img').src.replace('portrait', 'landscape');
});