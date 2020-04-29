window.onload = function (eve) {
    let lis = document.querySelectorAll(".contactPerson>li");
    let back = document.querySelector(".thisContact span:nth-child(1)");
    lis.forEach(item => {
        item.addEventListener('click', changePage);
    })

    back.addEventListener('click', changePage);

    window.addEventListener('resize', changePage);
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
