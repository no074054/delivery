window.disableScroll = function () {

    const widthScroll = window.innerWidth - document.body.offsetWidth;

    document.body.style.cssText = `
        position: relative;
        overflow: hidden;
        height: 100vh;
        padding-right: ${widthScroll}px;
    `;
}

window.enableScroll = function () {
    document.body.style.cssText = '';
}

/* window.disableScroll = function () {

    const widthScroll = window.innerWidth - document.body.offsetWidth;

    document.body.dbScrollY = window.scrollY;
    //document.body.dataset.scrollY = window.scrollY;

    document.body.style.cssText = `
        position: fixed;
        top: ${-window.scrollY}px;
        left: 0;
        width: 100%;
        overflow: hidden;
        height: 100vh;
        padding-right: ${widthScroll}px;
    `;
}

window.enableScroll = function () {
    document.body.style.cssText = '';
    window.scroll({ top: document.body.dbScrollY });
} */