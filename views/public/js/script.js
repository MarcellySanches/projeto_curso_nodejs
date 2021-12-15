let url_atual = window.location.pathname

if(url == '/') {
    document.querySelector("#menuHome").className='nav-Link text-white active'
    
} else if(url_atual=='/noticias') {
    document.querySelector("#menuNoticias").className='nav-Link text-white active'

} else if (url_atual =='/admin') {
    document.querySelector("#menuAdmin").className='nav-Link text-white active'
}