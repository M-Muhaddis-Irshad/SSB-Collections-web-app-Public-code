const supabaseApi = supabase.createClient('https://xyowgkiynvypiblztdjk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5b3dna2l5bnZ5cGlibHp0ZGprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA0NDAyNDEsImV4cCI6MjA3NjAxNjI0MX0.pYmvrg0D6DSrLqI-A4IALR3Eoh_lex3vdwJ26wjsbnk')

// console.log(supabaseApi);

// Initially check that User is loggedin or not_____________________________
// const isUserLoggedIn = async () => {
//     const { data: {session}, error } = await supabaseApi.auth.getSession()

//     if (session == null) {
//         Swal.fire({
//             title: "User is not log in",
//             icon: "error",
//             showConfirmButton: false,
//             timer: 1000
//         });
//         setTimeout(() => {
//             window.location.href = 'allPages/login_signup/login/login.html';
//         }, 1000);
//     }
//     else {
//         console.log(error);
//     }

// }

// isUserLoggedIn()

// NavBar toggling__________________________________________

const navContainer = document.getElementById('navContainer');
const toggleBar = document.getElementById('toggleBar');
const navLinks = document.getElementById('navLinks');

toggleBar.addEventListener('click', () => {
    navContainer.classList.toggle('active');
    toggleBar.classList.toggle('active');
    navLinks.classList.toggle('active');
})

// Array of objects with product details____________________________________________

const container = document.getElementById('card_container');

const products = [
    {
        // Mobile Accessories___________________________________

        // Rs.900/- Google 30W Charger And Cable 30W Type C to Type C Fast Charging Supported

        image: `logo_Icons/Img_s/mobile_accessories/charger1.webp`,
        image2: `logo_Icons/Img_s/mobile_accessories/img2nd/googleCharger2-1.webp`,
        name: `Google 30W Charger`,
        about: `Charger And Cable 30W Type C to C`,
        reviews: `943`,
        price: `999`,
        title: `Google-Charger`,
        category: `Mobile_Accessories`
    },
    {
        //Air 39 RGB Transparent Wireless EarBuds with Pouch
        //without Checking @ Rs. 600
        //with Checking @ Rs. 650

        image: `logo_Icons/Img_s/mobile_accessories/earphones2.webp`,
        image2: `logo_Icons/Img_s/mobile_accessories/img2nd/earphone2-2.webp`,
        name: `Air 39 EarBuds RGB Transparent`,
        about: `RGB Transparent Wireless EarBuds`,
        reviews: `652`,
        price: `799`,
        title: `Air-39`,
        category: `Mobile_Accessories`
    },
    {
        //Rs. 1000/- Bluetooth Wireless NeckBand Earphones 🎧 with long battery life (Stand By Time Approx 4 to 6 Days) Powerfull Base And Sound With microphone (Premium Quality) 

        image: `logo_Icons/Img_s/mobile_accessories/neckBand3.webp`,
        image2: `logo_Icons/Img_s/mobile_accessories/img2nd/neckBand2-3.webp`,
        name: `Wireless NeckBand`,
        about: `NeckBand Earphones 🎧 with long battery life`,
        reviews: `1,231`,
        price: `1,499`,
        title: `Wireless-Neckband`,
        category: `Mobile_Accessories`
    },
    {
        //Rs.3200/- each - Bluk’s Bx-301 Powerbank 20,000Mah With Led Display & Fast Charging with one year Official Company Warranty (Box Pack)

        image: `logo_Icons/Img_s/mobile_accessories/powerbank4.webp`,
        image2: `logo_Icons/Img_s/mobile_accessories/img2nd/powerBank2-4.webp`,
        name: `Bluk’s Bx-301 Powerbank`,
        about: `20,000Mah With Led Display & Fast Charging`,
        reviews: `7,465`,
        price: `3,999`,
        title: `Power-Bank`,
        category: `Mobile_Accessories`
    },
    {
        //Rs. 1250/- Sanag Portable Speaker High Quality Bass Sound With Cable (Box Pack) (Random Designs)

        image: `logo_Icons/Img_s/mobile_accessories/speaker5.webp`,
        image2: `logo_Icons/Img_s/mobile_accessories/img2nd/speaker2-5.webp`,
        name: `Sanag Portable Speaker`,
        about: `High Quality Bass Sound With Cable`,
        reviews: `8,973`,
        price: `1,499`,
        title: `Sanag-Speaker`,
        category: `Mobile_Accessories`
    },

    // Purse___________________________________

    {
        // Hijab High Quality Shoulder Bag
        //💝 Hijaab High Quality Bag With Digital Starp For Girls 💝
        // Smooth faux leather or coated canvas
        //Price Just 1200 Rs

        image: `logo_Icons/Img_s/purse/purse1.webp`,
        image2: `logo_Icons/Img_s/purse/img2nd/purse2-1.webp`,
        name: `Hijab Shoulder Bag`,
        about: `High Quality Bag With Digital Starp For Girls 💝`,
        reviews: `4,350`,
        price: `1,999`,
        title: `Hijab-bag`,
        category: `purse`
    },
    {
        //Louis Vuitton never full Bag 
        //AAA Quality Louis Vuitton Tote Bag 
        //Price just Rs 2000/- fixed price


        image: `logo_Icons/Img_s/purse/purse2.webp`,
        image2: `logo_Icons/Img_s/purse/img2nd/purse2-2.webp`,
        name: `Louis Vuitton Bag`,
        about: `AAA Quality Louis Vuitton Tote Bag`,
        reviews: `4,384`,
        price: `3,199`,
        title: `LV-Tote-Bag`,
        category: `purse`
    },
    {
        //Coach Medium Handbag – Variety Shop  
        //Stylish, compact & classy!  
        //Rs. 1450

        image: `logo_Icons/Img_s/purse/purse3.webp`,
        image2: `logo_Icons/Img_s/purse/img2nd/purse2-3.webp`,
        name: `Coach Medium Handbag`,
        about: `Stylish, compact & classy! Variety Shop`,
        reviews: `7,126`,
        price: `2,099`,
        title: `Coach-Handbag`,
        category: `purse`
    },
    {
        // Stylish Hijab Printed Handbag – Variety Shop  
        //Elegant design meets modern modesty!
        //Price: Rs. 1500/

        image: `logo_Icons/Img_s/purse/purse4.webp`,
        image2: `logo_Icons/Img_s/purse/img2nd/purse2-4.webp`,
        name: `Hijab Printed Handbag`,
        about: `Elegant design meets modern modesty!`,
        reviews: `3,481`,
        price: `1,949`,
        title: `Hijab-Handbag`,
        category: `purse`
    },
    {
        //High Quality Big Size Tote Bag 
        //Cynthetic Material
        //Inside Pocket
        //Rs.1350/=

        image: `logo_Icons/Img_s/purse/purse5.webp`,
        image2: `logo_Icons/Img_s/purse/img2nd/purse2-5.webp`,
        name: `Tote Bag Big Size High Quality`,
        about: `High Quality Cynthetic Material`,
        reviews: `3,048`,
        price: `1,949`,
        title: `Big-Tote-Bag`,
        category: `purse`
    },


    // Shoes___________________________________

    {
        //Skechers Arch Fit
        //Ultra light Soft n comfortable 
        //Rs.7,499.00 PKR

        image: `logo_Icons/Img_s/shoes/shoes1.webp`,
        image2: `logo_Icons/Img_s/shoes/img2nd/shoes2-1.webp`,
        name: `Skechers Arch Fit Branded`,
        about: `Ultra light Soft n comfortable!`,
        reviews: `1,323`,
        price: `8,499`,
        title: `Arch-Fit`,
        category: `shoes`
    },
    {
        //Nike Air force 1
        // Ultra light n comfortable
        //Rs.3500

        image: `logo_Icons/Img_s/shoes/shoes2.webp`,
        image2: `logo_Icons/Img_s/shoes/img2nd/shoes2-2.webp`,
        name: `Air force 1 from Nike`,
        about: `Branded Ultra light n comfortable`,
        reviews: `2,318`,
        price: `4,499`,
        title: `Nike-Air`,
        category: `shoes`
    },
    {
        // ULTRA GO SKECHERS
        // Mens Skechers 
        // Imported China 🇨🇳
        // Soft Comfortable 
        // Price Rs 4500/-

        image: `logo_Icons/Img_s/shoes/shoes3.webp`,
        image2: `logo_Icons/Img_s/shoes/img2nd/shoes2-3.webp`,
        name: `ULTRA GO SKECHERS`,
        about: `Imported China 🇨🇳 Soft Comfortable`,
        reviews: `2,185`,
        price: `5,499`,
        title: `Go-Skechers`,
        category: `shoes`
    },
    {
        // Skechers D`LUX Flex Groove 
        // Sole is best for outdoors lovers
        // Rs 8,099

        image: `logo_Icons/Img_s/shoes/shoes4.webp`,
        image2: `logo_Icons/Img_s/shoes/img2nd/shoes2-4.webp`,
        name: `Skechers D'LUX Flex Groove`,
        about: `Sole is best for outdoors lovers`,
        reviews: `2,381`,
        price: `9,099`,
        title: `D'LUX-Groove`,
        category: `shoes`
    },
    {
        // Skechers Mens Slides
        // Medicated Soft Comfortable 
        // Price 2000/- Fixed

        image: `logo_Icons/Img_s/shoes/slipper5.webp`,
        image2: `logo_Icons/Img_s/shoes/img2nd/slipper2-5.webp`,
        name: `Skechers Mens Slides`,
        about: `Medicated Soft Comfortable`,
        reviews: `8,745`,
        price: `3,499`,
        title: `Mens-Slide`,
        category: `shoes`
    },

    // Watches___________________________________

    {
        // Incomplete

        image: `logo_Icons/Img_s/watches/watch1.webp`,
        image2: `logo_Icons/Img_s/watches/img2nd/watch2-1.webp`,
        name: `Lige Foxbox Mens Watch`,
        about: `LIGE FOXBOX 0011 For Men`,
        reviews: `498`,
        price: `6,500`,
        title: `LIGE-FOXBOX`,
        category: `watch`
    },
    {
        // Rs.1500/- each - Rolex Yacht-Master Date Just With Date Heavy Master Lock Steel Buzzle Working With MODERN WATCHES NAME BOX 📦 (Premium Quality)

        image: `logo_Icons/Img_s/watches/watch2.webp`,
        image2: `logo_Icons/Img_s/watches/img2nd/watch2-2-1.webp`,
        name: `Rolex Yacht-Master`,
        about: `With Date Heavy Master Lock Steel Buzzle`,
        reviews: `3,285`,
        price: `2,199`,
        title: `Rolex-Yacht`,
        category: `watch`
    },
    {
        // BESTWIN 
        // ORIGINAL BRAND 
        // DUAL TIME WATCH 
        // WATER RESISTANCE STEEL CHAIN 
        // BUTTERFLY MASTER LOCK 
        // TRENDY STYLE 
        // ATTRACTIVE LOOK 
        // DIFFERENT COLOURS AVAILABLE 
        // RS 2600/- WITH MODERN WATCHES NAME BOX 📦



        image: `logo_Icons/Img_s/watches/watch3.webp`,
        image2: `logo_Icons/Img_s/watches/img2nd/watch2-3.webp`,
        name: `BESTWIN DUAL TIME WATCH`,
        about: `TRENDY STYLE WATER RESISTANCE`,
        reviews: `1,247`,
        price: `3,699`,
        title: `Bestwin-Watch`,
        category: `watch`
    },
    {
        // Luxury Digital LED Watches
        // Single Piece: Rs.350 With Box
        // Pack of 3: Rs.1000 With Box 🔥 
        // (For Her)

        image: `logo_Icons/Img_s/watches/watch4.webp`,
        image2: `logo_Icons/Img_s/watches/img2nd/watch2-4.webp`,
        name: `Digital LED Watche`,
        about: `Luxury design best for female`,
        reviews: `981`,
        price: `799`,
        title: `Digital-Watch`,
        category: `watch`
    },
    {
        //Arabic Marble Aura
        //Most demanding 🔥 
        //Light weight
        //Fiber watch
        //Price 1,499/- Only

        image: `logo_Icons/Img_s/watches/watch5.webp`,
        image2: `logo_Icons/Img_s/watches/img2nd/watch2-5.webp`,
        name: `Arabic Marble Aura`,
        about: `Luxury Waterproof Wrist Watch`,
        reviews: `1,647`,
        price: `2,199`,
        title: `Arabic-Aura`,
        category: `watch`
    },
]

// Product Cards creating_________________________________________________________

products.forEach((products, index) => {

    const { title, image, image2, name, about, reviews, price } = products

    container.innerHTML += `
                <div class="card" id="card-${index}">

                <a class="text-decoration-none text-black" href="allPages/product/product.html?title=${title}">

                    <div class="img_div" id='image-${index}' style="background-image: url(${image});">
                    </div>
                    <div class="product_content">

                        <div class="prdctName_n_Hrt">
                            <h6 class="prdctName">${name}</h6>
                        </div>

                        <div class="aboutProduct">${about}</div>

                        <div class="starRevwCnt">
                            <span class="stars">
                                <i class="star material-icons">star</i>
                                <i class="star material-icons">star</i>
                                <i class="star material-icons">star</i>
                                <i class="star material-icons">star</i>
                                <i class="starHalf material-icons">star_half</i>
                            </span>
                            <span class="prdct_Review_Count">(${reviews} Reviews)</span>
                        </div>

                        <div class="prdctPrice">Rs ${price}</div>
                    </div>

                </a>

                <i class="heart material-icons" id="heart-${index}"  title="Like">favorite</i>

            </div>

    `

    setTimeout(() => {

        // Heart Icon fill_________________________________________________________________
        const heart = document.getElementById(`heart-${index}`)

        heart.addEventListener('click', (event) => {
            event.stopPropagation();
            heart.classList.toggle('fill');
            heart.title = heart.classList.contains('fill') ? 'DisLike' : 'Like';
        });


        // // Cards hover effect_____________________________________________________________________---
        const card = document.getElementById(`card-${index}`);
        const img = document.getElementById(`image-${index}`);

        card.addEventListener('mouseover', () => {
            img.style.backgroundImage = `url(${image2})`;
            img.classList.add('transformImg');
        })
        card.addEventListener('mouseout', () => {
            img.style.backgroundImage = `url(${image})`;
            img.classList.remove('transformImg');
        })

    }, 0);

});


// NewsLetter_____________________________________________________________

const emailRagex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

const subscribeInput = document.getElementById('letterMail');

function SubscribeEmailChecking() {

    if (!subscribeInput.value.trim()) {
        Swal.fire({
            icon: "error",
            title: "Input can't be empty",
            text: "Enter your email address"
        });
    }
    else if (!emailRagex.test(subscribeInput.value)) {
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
        subscribeInput.value = "";
    }

}


// CopyRight-Claim Date___________________________________

const d = new Date();

const year = document.getElementById('year').innerText = d.getFullYear();

// async function out() {
//     const { error } = await supabaseApi.auth.signOut()
//     alert(error);
    
// }

// out()