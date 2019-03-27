function ownFavIcon() {
    let favIconMissing = true;
    const head = document.getElementsByTagName('head');
    const links = head[0].getElementsByTagName('link');
// allows us to inject favicon
    const baseUrl = head[0].getAttribute('data-resurl');
    for (const i in links) {
        if (links.hasOwnProperty(i)) {
            const link = links[i];
            if (link.getAttribute('rel') === 'shortcut icon') {
                link.setAttribute('href', `${baseUrl}/plugin/coremedia-theme/icons/favicon.ico`);
                favIconMissing = false;
                break;
            }
        }
    }

    if (favIconMissing) {
        const favicon = document.createElement('link');
        favicon.id = 'favicon';
        favicon.rel = 'shortcut icon';
        favicon.type = 'image/vnd.microsoft.icon';
        favicon.href = `${baseUrl}/plugin/coremedia-theme/icons/favicon.ico`;
        head[0].appendChild(favicon);
    }
}

if (window.addEventListener) {
    window.addEventListener('load', ownFavIcon, false);
} else if (window.attachEvent) {
    window.attachEvent('onload', ownFavIcon);
}
