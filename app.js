
const heart = document.getElementById('heart');

function like() {
    if (!heart.classList.contains('fill')) {
        heart.classList.add('fill');
        heart.title = `UnLike`
        return;
    }
    else {
        heart.classList.remove('fill');
        heart.title = `Like`
    }
}

// NewsLetter Start's_____________________________________________________________

const emailRagex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

const subInp = document.getElementById('letterMail');

function inputClr() {

    if (!subInp.value.trim()) {
        Swal.fire({
            icon: "error",
            title: "Input cannot be empty",
            text: "Enter your email address"
        });
    }
    else if (!emailRagex.test(subInp.value)) {
        Swal.fire({
            icon: "error",
            title: "Email is not correct",
            text: "Check your email address"
        });
    }
    else {
        Swal.fire({
            icon: "success",
            title: "Subscription confirmed!",
            text: " You’ll now receive our latest news, tips, and updates straight to your email."
        });
        subInp.value = "";
    }
    
}

// NewsLetter End's_____________________________________________________________


// Copy right claim date___________________________________
const d = new Date();

const year = document.getElementById('date').innerText = d.getFullYear();

























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