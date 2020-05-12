window.onload = function (eve) {
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
    navBarTool.setAttribute('style', `right:${getComputedStyle(navBarTool).right == '0px' ? '-80%' : '0px'}`)
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