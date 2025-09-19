// const products = [{
//     title: "mobile-phone",
//     price: "1200",
//     image: "./download.jpeg",
//     categories: "phone"
// }, 
// {
//     title: "mobile-phone2",
//     price: "2000",
//     image: "./phone.jpg",
//     categories: "car"
// },
// {
//     title: "mobile-phone3",
//     price: "2100",  
//     image: "./phone.jpg"
// },
// {
//     title: "mobile-phone4",
//     price: "2300",
//     image: "./phone.jpg"
// },
// {
//     title: "mobile-phone5",
//     price: "2500",
//     image: "./phone.jpg"
// },
// ]
// let title;
// if (window.location.pathname == "/home.html") {

//     const searchParams = new URLSearchParams(window.location.search);
//     for (const [key, value] of searchParams.entries()) {
//         if (key === "title") {
//             title = value;
//         }
//         console.log(`${key}, ${value}`);
//     }
//     console.log(title)
    
//     const currentProduct = products.find((urlTitle) => urlTitle.title === title)
//     console.log(currentProduct)
//     let priceDiv = document.getElementById("priceDiv")
//     priceDiv.innerText = `$ ${currentProduct.price}`
// }

// const RenderProducts = () => {
//     let card_container = document.getElementById("card_container")
//     products.map((data, index) => {
//         console.log(data)
//         card_container.innerHTML += `
//         <div>
//             <img src=${data.image} height="200" width="200" />
//             <a href="/home.html?title=${data.title}">${data.title}</a>
//         </div>
//         `
//     })
// }
// if (window.location.pathname == "/") {

//     RenderProducts()
// }