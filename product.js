const h1 = document.getElementById('h1')

let title;
if (window.location.pathname === `/product.html`){
    const searchParams = new URLSearchParams(window.location.search)
    h1.innerHTML = searchParams;
    
}