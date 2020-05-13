window.onload = function (eve) {
    document.addEventListener('click', back)
    document.querySelector('div.searchIcon').addEventListener('click', search)
    document.querySelector('div.menuIcon').addEventListener('click', menu)
    document.querySelector('div.close').addEventListener('click', menu)
    if (location.pathname.includes('message')) {
        let lis = document.querySelectorAll(".contactPerson>li");
        let back = document.querySelector(".thisContact span:nth-child(1)");
        lis.forEach(item => {
            item.addEventListener('click', changePage);
        })

        back.addEventListener('click', changePage);

        window.addEventListener('resize', changePage);
    } else if (
        location.pathname.includes('newPaint') ||
        location.pathname.includes('newChapter') ||
        location.pathname.includes('newNovel') ||
        location.pathname.includes('newWork')
    ) {
        let select = document.querySelector('.newSelect select');
        select.addEventListener('change', newWork)
    }
}

function menu(event) {
    let navBarTool = document.querySelector('div.navBarTool');
    navBarTool.setAttribute('style', `right:${getComputedStyle(navBarTool).right == '0px' ? '-100%' : '0px'}`)
}

function back(event) {
    let navBarTool = document.querySelector('div.navBarTool');
    let paths = Array.from(event.path).map(item => {
        return item.className
    })
    let is = false
    paths.forEach(item => {
        if (item && item.includes('mask')) {
            is = true;
        }
    })
    if (is) {
        navBarTool.setAttribute('style', `right:-100%`)
    }
}

function search() {
    let ul = document.querySelector('.navBarIcon ul');
    if (getComputedStyle(ul).display == 'flex') {
        document.querySelector('.search').setAttribute('style', "display: inherit;")
        document.querySelector('.searchBar').setAttribute('style', "width: 80%;")
        document.querySelector('.searchIcon').setAttribute('style', "right: 0.25rem;")
        document.querySelector('.navBarIcon ul').setAttribute('style', "display: none;")
    } else if (getComputedStyle(ul).display == 'none') {
        document.querySelector('.search').setAttribute('style', "display: none;")
        document.querySelector('.searchBar').setAttribute('style', "width: 10%;")
        document.querySelector('.searchIcon').setAttribute('style', "right: calc(24px + 0.5rem);")
        document.querySelector('.navBarIcon ul').setAttribute('style', "display: flex;")
    }
}

function changePage(event) {
    let thisContact = document.querySelector(".thisContact");
    let contactArea = document.querySelector(".contactArea");
    let footer = document.querySelector(".footer");
    let chatroomArea = document.querySelector(".chatroomArea");

    if (window.innerWidth <= 768 && event.type != "resize") {
        getComputedStyle(thisContact).display == 'none' ?
            thisContact.setAttribute('style', 'display:flex') :
            thisContact.setAttribute('style', 'display:none')
        getComputedStyle(contactArea).display == 'none' ?
            contactArea.setAttribute('style', 'display:block') :
            contactArea.setAttribute('style', 'display:none')
        getComputedStyle(footer).display == 'none' ?
            footer.setAttribute('style', 'display:block') :
            footer.setAttribute('style', 'display:none')
        getComputedStyle(chatroomArea).display == 'none' ?
            chatroomArea.setAttribute('style', 'display:block') :
            chatroomArea.setAttribute('style', 'display:none')
    } else {
        thisContact.setAttribute('style', '')
        contactArea.setAttribute('style', '')
        footer.setAttribute('style', '')
        chatroomArea.setAttribute('style', '')
    }
}

function newWork(event) {
    if (event.target.value == 0) {
        console.log(location.href)
        location.href = "./newWork.html"
    } else if (event.target.value == 1) {
        location.href = "./newPaint.html"
    }
}

function fontSize(number) {
    if (location.pathname.includes('/novel')) {
        document.querySelector('.workContent').setAttribute('style', `font-size: ${number}rem;`)
    }
}