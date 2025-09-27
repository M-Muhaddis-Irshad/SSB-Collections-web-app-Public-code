const Container = document.getElementById('cardContainer')


// Card's Data__________________________________________________________

const products = [
    {
        // Mobile Accessories___________________________________

        // Rs.900/- Google 30W Charger And Cable 30W Type C to Type C Fast Charging Supported

        image: `../../logo_Imgs/Img_s/mobile_accessories/charger1.webp`,
        image2: `../../logo_Imgs/Img_s/mobile_accessories/img2nd/googleCharger2-1.webp`,
        name: `Google 30W Charger`,
        description: `Google 30W Charger And Cable 30W Type C to Type C Fast Charging Supported`,
        reviews: `943`,
        price: `999`,
        title: `Google-Charger`,
        category: `Mobile_Accessories`
    },
    {
        //Air 39 RGB Transparent Wireless EarBuds with Pouch
        //without Checking @ Rs. 600
        //with Checking @ Rs. 650

        image: `../../logo_Imgs/Img_s/mobile_accessories/earphones2.webp`,
        image2: `../../logo_Imgs/Img_s/mobile_accessories/img2nd/earphone2-2.webp`,
        name: `Air 39 EarBuds RGB Transparent`,
        description: `RGB Transparent Wireless EarBuds`,
        reviews: `652`,
        price: `799`,
        title: `Air-39`,
        category: `Mobile_Accessories`
    },
    {
        //Rs. 1000/- Bluetooth Wireless NeckBand Earphones 🎧 with long battery life (Stand By Time Approx 4 to 6 Days) Powerfull Base And Sound With microphone (Premium Quality) 

        image: `../../logo_Imgs/Img_s/mobile_accessories/neckBand3.webp`,
        image2: `../../logo_Imgs/Img_s/mobile_accessories/img2nd/neckBand2-3.webp`,
        name: `Wireless NeckBand`,
        description: `NeckBand Earphones 🎧 with long battery life`,
        reviews: `1,231`,
        price: `1,499`,
        title: `Wireless-Neckband`,
        category: `Mobile_Accessories`
    },
    {
        //Rs.3200/- each - Bluk’s Bx-301 Powerbank 20,000Mah With Led Display & Fast Charging with one year Official Company Warranty (Box Pack)

        image: `../../logo_Imgs/Img_s/mobile_accessories/powerbank4.webp`,
        image2: `../../logo_Imgs/Img_s/mobile_accessories/img2nd/powerBank2-4.webp`,
        name: `Bluk’s Bx-301 Powerbank`,
        description: `20,000Mah With Led Display & Fast Charging`,
        reviews: `7,465`,
        price: `3,999`,
        title: `Power-Bank`,
        category: `Mobile_Accessories`
    },
    {
        //Rs. 1250/- Sanag Portable Speaker High Quality Bass Sound With Cable (Box Pack) (Random Designs)

        image: `../../logo_Imgs/Img_s/mobile_accessories/speaker5.webp`,
        image2: `../../logo_Imgs/Img_s/mobile_accessories/img2nd/speaker2-5.webp`,
        name: `Sanag Portable Speaker`,
        description: `High Quality Bass Sound With Cable`,
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

        image: `../../logo_Imgs/Img_s/purse/purse1.webp`,
        image2: `../../logo_Imgs/Img_s/purse/img2nd/purse2-1.webp`,
        name: `Hijab Shoulder Bag`,
        description: `High Quality Bag With Digital Starp For Girls 💝`,
        reviews: `4,350`,
        price: `1,999`,
        title: `Hijab-bag`,
        category: `purse`
    },
    {
        //Louis Vuitton never full Bag 
        //AAA Quality Louis Vuitton Tote Bag 
        //Price just Rs 2000/- fixed price


        image: `../../logo_Imgs/Img_s/purse/purse2.webp`,
        image2: `../../logo_Imgs/Img_s/purse/img2nd/purse2-2.webp`,
        name: `Louis Vuitton Bag`,
        description: `AAA Quality Louis Vuitton Tote Bag`,
        reviews: `4,384`,
        price: `3,199`,
        title: `LV-Tote-Bag`,
        category: `purse`
    },
    {
        //Coach Medium Handbag – Variety Shop  
        //Stylish, compact & classy!  
        //Rs. 1450

        image: `../../logo_Imgs/Img_s/purse/purse3.webp`,
        image2: `../../logo_Imgs/Img_s/purse/img2nd/purse2-3.webp`,
        name: `Coach Medium Handbag`,
        description: `Stylish, compact & classy! Variety Shop`,
        reviews: `7,126`,
        price: `2,099`,
        title: `Coach-Handbag`,
        category: `purse`
    },
    {
        // Stylish Hijab Printed Handbag – Variety Shop  
        //Elegant design meets modern modesty!
        //Price: Rs. 1500/

        image: `../../logo_Imgs/Img_s/purse/purse4.webp`,
        image2: `../../logo_Imgs/Img_s/purse/img2nd/purse2-4.webp`,
        name: `Hijab Printed Handbag`,
        description: `Elegant design meets modern modesty!`,
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

        image: `../../logo_Imgs/Img_s/purse/purse5.webp`,
        image2: `../../logo_Imgs/Img_s/purse/img2nd/purse2-5.webp`,
        name: `Tote Bag Big Size High Quality`,
        description: `High Quality Cynthetic Material`,
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

        image: `../../logo_Imgs/Img_s/shoes/shoes1.webp`,
        image2: `../../logo_Imgs/Img_s/shoes/img2nd/shoes2-1.webp`,
        name: `Skechers Arch Fit Branded`,
        description: `Ultra light Soft n comfortable!`,
        reviews: `1,323`,
        price: `8,499`,
        title: `Arch-Fit`,
        category: `shoes`
    },
    {
        //Nike Air force 1
        // Ultra light n comfortable
        //Rs.3500

        image: `../../logo_Imgs/Img_s/shoes/shoes2.webp`,
        image2: `../../logo_Imgs/Img_s/shoes/img2nd/shoes2-2.webp`,
        name: `Air force 1 from Nike`,
        description: `Branded Ultra light n comfortable`,
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

        image: `../../logo_Imgs/Img_s/shoes/shoes3.webp`,
        image2: `../../logo_Imgs/Img_s/shoes/img2nd/shoes2-3.webp`,
        name: `ULTRA GO SKECHERS`,
        description: `Imported China 🇨🇳 Soft Comfortable`,
        reviews: `2,185`,
        price: `5,499`,
        title: `Go-Skechers`,
        category: `shoes`
    },
    {
        // Skechers D`LUX Flex Groove 
        // Sole is best for outdoors lovers
        // Rs 8,099

        image: `../../logo_Imgs/Img_s/shoes/shoes4.webp`,
        image2: `../../logo_Imgs/Img_s/shoes/img2nd/shoes2-4.webp`,
        name: `Skechers D'LUX Flex Groove`,
        description: `Sole is best for outdoors lovers`,
        reviews: `2,381`,
        price: `9,099`,
        title: `D'LUX-Groove`,
        category: `shoes`
    },
    {
        // Skechers Mens Slides
        // Medicated Soft Comfortable 
        // Price 2000/- Fixed

        image: `../../logo_Imgs/Img_s/shoes/slipper5.webp`,
        image2: `../../logo_Imgs/Img_s/shoes/img2nd/slipper2-5.webp`,
        name: `Skechers Mens Slides`,
        description: `Medicated Soft Comfortable`,
        reviews: `8,745`,
        price: `3,499`,
        title: `Mens-Slide`,
        category: `shoes`
    },

    // Watches___________________________________

    {

        image: `../../logo_Imgs/Img_s/watches/watch1.webp`,
        image2: `../../logo_Imgs/Img_s/watches/img2nd/watch2-1.webp`,
        name: `Lige Foxbox Mens Watch`,
        description: `LIGE FOXBOX 0011 Watches For Men Luxury Brand Sport Quartz Wristwatch Waterproof Digital Clock Men Watch Relogio Masculino`,
        reviews: `498`,
        price: `6,500`,
        title: `Arabic-Aura`,
        category: `watch`
    },
    {
        // Rs.1500/- each - Rolex Yacht-Master Date Just With Date Heavy Master Lock Steel Buzzle Working With MODERN WATCHES NAME BOX 📦 (Premium Quality)

        image: `../../logo_Imgs/Img_s/watches/watch2.webp`,
        image2: `../../logo_Imgs/Img_s/watches/img2nd/watch2-2-2.webp`,
        name: `Rolex Yacht-Master`,
        description: `Rolex Oyster Perpetual Date Yacht-Master 226658 Mens Watch. 42mm 18K yellow gold case. Bidirectional 18K yellow gold bezel with black ceramic insert. Black dial with yellow gold Mercedes hands and index hours markers. Magnified date display at a 3 o'clock position. Minute marker on the outer dial. Black rubber Oysterflex bracelet with folder over clasp with safety. Will fit up to a 7-inch wrist. Sapphire crystal. 18K yellow gold case back. Automatic self-winding movement. This watch comes with original Box and Papers.
        <br>
        <br>
        This watch is backed by our two-year warranty.`,
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



        image: `../../logo_Imgs/Img_s/watches/watch3.webp`,
        image2: ``,
        name: `BESTWIN DUAL TIME WATCH`,
        description: `TRENDY STYLE WATER RESISTANCE`,
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

        image: `../../logo_Imgs/Img_s/watches/watch4.webp`,
        image2: ``,
        name: `Digital LED Watche`,
        description: `Luxury design best for female`,
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

        image: `../../logo_Imgs/Img_s/watches/watch5.webp`,
        image2: ``,
        name: `Arabic Marble Aura`,
        description: `Luxury Waterproof Wrist Watch`,
        reviews: `1,647`,
        price: `2,199`,
        title: `Arabic-Aura`,
        category: `watch`
    },
]

// Check Search Parameters for find the card from title__________________________________________

let PrdctTitle;

const searchParams = new URLSearchParams(window.location.search);

searchParams.forEach((title, key) => {
    PrdctTitle = title;
});

const currentProduct = products.filter((products) => products.title === PrdctTitle)[0];


// Product Card creating_________________________________________________________

const { title, image, image2, name, description, reviews, price } = currentProduct

console.log(`${title} ${image} ${image2} ${name} ${description} ${reviews} ${price}`);

Container.innerHTML = `

            <div class="card" id="card">
    
                <div class="img_div" id="image" style="background-image: url(${image});"></div>
                
                <div class="product_content">
    
                    <div class="prdctName_n_Hrt">
                        <h2 class="prdctName">${name}</h2>
                        <i class="heart material-icons" id="heart" title="Like">favorite</i>
    
                    </div>
    
                    
                    <h5 class="descriptionHeading">Description</h5>

                    <h6 class="descriptionProduct">${description}</h6>
    
                    <div class="starRevwCnt">
                        <span class="stars">
                            <h4 class="star material-icons">star</h4>
                            <h4 class="star material-icons">star</h4>
                            <h4 class="star material-icons">star</h4>
                            <h4 class="star material-icons">star</h4>
                            <h4 class="starHalf material-icons">star_half</h4>
                        </span>
                        <h4 class="prdct_Review_Count">(${reviews} Reviews)</h4>
                    </div>
    
                    <h4 class="prdctPrice">Rs${price}</h4>
                </div>
    
            </div>

`



// Heart Icon fill/empty function___________________________________________________________

const heart = document.getElementById('heart');
heart.addEventListener('click', () => {
    heart.classList.toggle('fill');
    heart.title = heart.classList.contains('fill') ? 'UnLike' : 'Like';
});



// Hover Effects on Cards_____________________________________________________
const Card = document.getElementById('card');
const cardImage = document.getElementById('image');

cardImage.onmouseover = () => cardImage.style.backgroundImage = 'url(logo_Imgs/Img_s/watches/watch4.webp)'

Card.addEventListener("mouseover", () => {
    cardImage.style.backgroundImage = `url(${image2})`
    cardImage.classList.add('transformImg');
})

Card.addEventListener("mouseout", () => {
    cardImage.style.backgroundImage = `url(${image})`
    cardImage.classList.remove('transformImg');
})