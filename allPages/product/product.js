const supabaseApi = supabase.createClient('https://xyowgkiynvypiblztdjk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5b3dna2l5bnZ5cGlibHp0ZGprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA0NDAyNDEsImV4cCI6MjA3NjAxNjI0MX0.pYmvrg0D6DSrLqI-A4IALR3Eoh_lex3vdwJ26wjsbnk')


// NavBar toggling__________________________________________
{
    const navContainer = document.getElementById('navContainer');
    const toggleBar = document.getElementById('toggleBar');
    const navLinks = document.getElementById('navLinks');
    const bars = document.querySelectorAll('.bar');
    // Check if scrollbar is on top of the window or not__________________
    {
        window.addEventListener("scroll", () => {
            const scroll = this.scrollY;
            (scroll === 0) ? navContainer.classList.remove('scrlStart') : navContainer.classList.add('scrlStart')
            // console.log(`${scroll}% Scroll`)
        });
    }
    // Add EventListener on ToggleBar__________________
    {
        toggleBar.addEventListener('click', () => {
            navContainer.classList.toggle('active');
            toggleBar.classList.toggle('active');
            navLinks.classList.toggle('active');
            bars.forEach(obj => obj.classList.toggle('active'))
            document.body.classList.toggle('active')
            window.scrollTo({ top: 0, behavior: 'smooth' });
        })
    }
}



const Container = document.getElementById('cardContainer')


// Card's Data__________________________________________________________

const products = [
    {
        // Mobile Accessories___________________________________

        // Rs.900/- Google 30W Charger And Cable 30W Type C to Type C Fast Charging Supported

        image: `../../logo_Icons/Img_s/mobile_accessories/charger1.webp`,
        image2: `../../logo_Icons/Img_s/mobile_accessories/img2nd/googleCharger2-1.webp`,
        name: `Google 30W Charger`,
        description: `Google 30W Charger And Cable 30W Type C to Type C Fast Charging Supported`,
        description1: `<h6 class="descriptionH6">Fast Charging:</h6> It is designed for fast charging, providing up to 30W power output, suitable for Google Pixel phones.`,
        description2: `<h6 class="descriptionH6">Technology:</h6> The charger utilizes USB Power Delivery (PD) 3.0 technology, including PPS (Programmable Power Supply) for efficient charging.`,
        description3: `<h6 class="descriptionH6">Compatibility:</h6> It offers universal compatibility with various USB-C devices, including Google Pixel phones, iPhones, Samsung Galaxy devices, and iPads.`,
        description4: `<h6 class="descriptionH6">Design:</h6> The charger features a compact, slim, and lightweight design, making it portable and convenient for travel and daily use. `,
        reviews: `943`,
        price: `999`,
        title: `Google-Charger`,
        category: `Mobile_Accessories`
    },
    {
        //Air 31 RGB Transparent Wireless EarBuds with Pouch
        //without Checking @ Rs. 600
        //with Checking @ Rs. 650

        image: `../../logo_Icons/Img_s/mobile_accessories/earphones2.webp`,
        image2: `../../logo_Icons/Img_s/mobile_accessories/img2nd/earphone2-2.webp`,
        name: `Air 31 EarBuds RGB Transparent`,
        description: `RGB Transparent Wireless EarBuds`,
        description1: `<h6 class="descriptionH6">Bluetooth 5.3 Connectivity:</h6> For stable and efficient wireless connections. `,
        description2: `<h6 class="descriptionH6">Transparent Charging Case:</h6> A distinctive design element, often with an LED display for battery status.`,
        description3: `<h6 class="descriptionH6">Long Battery Life:</h6> Offering extended playtime, especially when combined with the charging case. `,
        description4: `<h6 class="descriptionH6">Noise Reduction Technology:</h6> For clearer calls and an enhanced listening experience.`,
        reviews: `652`,
        price: `799`,
        title: `Air-31`,
        category: `Mobile_Accessories`
    },
    {
        //Rs. 1000/- Bluetooth Wireless NeckBand Earphones 🎧 with long battery life (Stand By Time Approx 4 to 6 Days) Powerfull Base And Sound With microphone (Premium Quality) 

        image: `../../logo_Icons/Img_s/mobile_accessories/neckBand3.webp`,
        image2: `../../logo_Icons/Img_s/mobile_accessories/img2nd/neckBand2-3.webp`,
        name: `Wireless NeckBand`,
        description: `NeckBand Earphones 🎧 with long battery life`,
        description1: `<h6 class="descriptionH6">Wireless Connectivity:</h6> Features Bluetooth technology for a stable and cable-free audio experience.`,
        description2: `<h6 class="descriptionH6">Comfortable Neckband:</h6> Designed with a flexible neckband for a secure and comfortable fit, ideal for sports or daily wear. `,
        description3: `<h6 class="descriptionH6">Extended Battery Life:</h6> Offers long-lasting battery performance, with some models providing significant standby and playback times.`,
        description4: `<h6 class="descriptionH6">Integrated Controls & Mic:</h6> Includes built-in controls for music playback and calls, along with a microphone for hands-free communication.`,
        reviews: `1,231`,
        price: `1,499`,
        title: `Wireless-Neckband`,
        category: `Mobile_Accessories`
    },
    {
        //Rs.3200/- each - Bluk’s Bx-301 Powerbank 20,000Mah With Led Display & Fast Charging with one year Official Company Warranty (Box Pack)

        image: `../../logo_Icons/Img_s/mobile_accessories/powerbank4.webp`,
        image2: `../../logo_Icons/Img_s/mobile_accessories/img2nd/powerBank2-4.webp`,
        name: `Bluk’s Bx-301 Powerbank`,
        description: `20,000Mah With Led Display & Fast Charging`,
        description1: `<h6 class="descriptionH6">High Capacity:</h6> It boasts a 20,000mAh Lithium-ion battery, suitable for multiple device charges.`,
        description2: `<h6 class="descriptionH6">Fast Charging:</h6> The power bank supports Qualcomm Quick Charge 3.0 and delivers a 22.5W output for rapid charging.`,
        description3: `<h6 class="descriptionH6">Elegant Design:</h6> The device features a sleek and elegant design, as highlighted on the packaging.`,
        description4: `<h6 class="descriptionH6">LED Display:</h6> An integrated LED display shows the remaining battery percentage, providing clear status updates.`,
        reviews: `7,465`,
        price: `3,999`,
        title: `Power-Bank`,
        category: `Mobile_Accessories`
    },
    {
        //Rs. 1250/- Sanag Portable Speaker High Quality Bass Sound With Cable (Box Pack) (Random Designs)

        image: `../../logo_Icons/Img_s/mobile_accessories/speaker5.webp`,
        image2: `../../logo_Icons/Img_s/mobile_accessories/img2nd/speaker2-5.webp`,
        name: `Sanag Portable Speaker`,
        description: `High Quality Bass Sound With Cable`,
        description1: `<h6 class="descriptionH6">Bluetooth Connectivity:</h6> They are Bluetooth speakers, likely featuring Bluetooth 5.0 for efficient wireless connection with devices.`,
        description2: `<h6 class="descriptionH6">Durable Features:</h6> Some models, such as the Sanag X6S, are advertised as waterproof (IPX5 or IPX7 rated) and dust-proof, making them suitable for outdoor use.`,
        description3: `<h6 class="descriptionH6">Variety in Aesthetics:</h6> The speakers come in black with various designs, including plain, "sanag" branding, a dragon graphic, and "BORING BEAR" branding with a bear logo.`,
        description4: `<h6 class="descriptionH6">Long Battery Life:</h6> Models like the Sanag X6S boast a 1200mAh battery, offering up to 24 hours of playtime at medium volume on a single charge.`,
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

        image: `../../logo_Icons/Img_s/purse/purse1.webp`,
        image2: `../../logo_Icons/Img_s/purse/img2nd/purse2-1.webp`,
        name: `Hijab Shoulder Bag`,
        description: `High Quality Bag With Digital Starp For Girls 💝`,
        description1: `<h6 class="descriptionH6">Elegant Design:</h6> It features a unique illustration of a woman in a hijab holding flowers, giving it a distinctive and elegant aesthetic.`,
        description2: `<h6 class="descriptionH6">Compact Size:</h6> Designed as a small crossbody or shoulder bag, it is ideal for carrying daily essentials without being bulky.`,
        description3: `<h6 class="descriptionH6">Secure Closure:</h6> The bag appears to have a top frame with a gold-tone push-lock or clasp for secure closure.`,
        description4: `<h6 class="descriptionH6">Fashionable and Practical:</h6> Its design blends fashion with practicality, making it suitable for various casual or semi-formal occasions.`,
        reviews: `4,350`,
        price: `1,999`,
        title: `Hijab-bag`,
        category: `purse`
    },
    {
        //Louis Vuitton never full Bag 
        //AAA Quality Louis Vuitton Tote Bag 
        //Price just Rs 2000/- fixed price


        image: `../../logo_Icons/Img_s/purse/purse2.webp`,
        image2: `../../logo_Icons/Img_s/purse/img2nd/purse2-2.webp`,
        name: `Louis Vuitton Bag`,
        description: `AAA Quality Louis Vuitton Tote Bag`,
        description1: `<h6 class="descriptionH6">Monogram Canvas:</h6> The main tote bag and accompanying pouch feature the iconic Louis Vuitton Monogram canvas in brown and tan.`,
        description2: `<h6 class="descriptionH6">Adjustable Side Laces:</h6> Red-toned leather laces on the sides allow for cinching the bag's shape, offering versatility in style and capacity.`,
        description3: `<h6 class="descriptionH6">Matching Detachable Pouch:</h6> A smaller, coordinating pouch with the same monogram canvas is included, often used for essentials or as a clutch.`,
        description4: `<h6 class="descriptionH6">Tote Design:</h6> Classic The Neverfull MM is a classic and popular tote style, known for its spacious interior and functional design for everyday use.`,
        reviews: `4,384`,
        price: `3,199`,
        title: `LV-Tote-Bag`,
        category: `purse`
    },
    {
        //Coach Medium Handbag – Variety Shop  
        //Stylish, compact & classy!  
        //Rs. 1450

        image: `../../logo_Icons/Img_s/purse/purse3.webp`,
        image2: `../../logo_Icons/Img_s/purse/img2nd/purse2-3.webp`,
        name: `Coach Medium Handbag`,
        description: `Stylish, compact & classy! Variety Shop`,
        description1: `<h6 class="descriptionH6">Design:</h6> It has a structured, rectangular silhouette with a flat base and top handles.`,
        description2: `<h6 class="descriptionH6">Material and Color:</h6> Crafted in a warm brown and tan color palette, likely from a durable material. `,
        description3: `<h6 class="descriptionH6">Signature Monogram:</h6> Displays the iconic Coach monogram pattern throughout the bag's main body.`,
        description4: `<h6 class="descriptionH6">Style:</h6> Designed as a classic and functional women's shoulder bag, suitable for various occasions. `,
        reviews: `7,126`,
        price: `2,099`,
        title: `Coach-Handbag`,
        category: `purse`
    },
    {
        // Stylish Hijab Printed Handbag – Variety Shop  
        //Elegant design meets modern modesty!
        //Price: Rs. 1500/

        image: `../../logo_Icons/Img_s/purse/purse4.webp`,
        image2: `../../logo_Icons/Img_s/purse/img2nd/purse2-4.webp`,
        name: `Hijab Printed Handbag`,
        description: `Elegant design meets modern modesty!`,
        description1: `<h6 class="descriptionH6">Stylish Design:</h6> Features a unique graphic print of a woman holding flowers on a solid-colored background.`,
        description2: `<h6 class="descriptionH6">Elegant Hardware:</h6> Equipped with sleek gold-tone handle detailing for a sophisticated touch.`,
        description3: `<h6 class="descriptionH6">Material:</h6> Made from PU Leather, offering a durable and classic finish.`,
        description4: `<h6 class="descriptionH6">Versatility:</h6> Suitable for various occasions, including daily use, college, and casual outings.`,
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

        image: `../../logo_Icons/Img_s/purse/purse5.webp`,
        image2: `../../logo_Icons/Img_s/purse/img2nd/purse2-5.webp`,
        name: `Tote Bag Big Size High Quality`,
        description: `High Quality Cynthetic Material`,
        description1: `<h6 class="descriptionH6">Design:</h6> Features a classic and timeless design with a sleek silhouette, making it a versatile wardrobe staple.`,
        description2: `<h6 class="descriptionH6">Material:</h6> Crafted from premium faux leather, offering durability and ease of cleaning.`,
        description3: `<h6 class="descriptionH6">Capacity:</h6> Spacious enough to carry daily essentials, including a laptop, or serve as a functional bag for mothers.`,
        description4: `<h6 class="descriptionH6">Carrying Options:</h6> Equipped with double handles and potentially a shoulder strap for multiple carrying styles.`,
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

        image: `../../logo_Icons/Img_s/shoes/shoes1.webp`,
        image2: `../../logo_Icons/Img_s/shoes/img2nd/shoes2-1.webp`,
        name: `Skechers Arch Fit Branded`,
        description: `Ultra light Soft n comfortable!`,
        description1: `<h6 class="descriptionH6">Hands-Free Slip-ins:</h6> Designed for easy on and off without using hands, featuring a unique Heel Pillow™ for secure fit.`,
        description2: `<h6 class="descriptionH6">Arch Fit® Insole System:</h6> Includes a removable, podiatrist-certified insole for arch support and weight dispersion.`,
        description3: `<h6 class="descriptionH6">Engineered Knit Upper:</h6> Offers a comfortable, sock-like fit with its Stretch Fit® design.`,
        description4: `<h6 class="descriptionH6">Max Cushioning®:</h6> Provides enhanced comfort and shock absorption, ideal for walking.`,
        reviews: `1,323`,
        price: `8,499`,
        title: `Arch-Fit`,
        category: `shoes`
    },
    {
        //Nike Air force 1
        // Ultra light n comfortable
        //Rs.3500

        image: `../../logo_Icons/Img_s/shoes/shoes2.webp`,
        image2: `../../logo_Icons/Img_s/shoes/img2nd/shoes2-2.webp`,
        name: `Air force 1 from Nike`,
        description: `Branded Ultra light n comfortable`,
        description1: `<h6 class="descriptionH6">Iconic Design:</h6> Inspired by the original 1985 Air Jordan 1, offering a classic and recognizable low-top silhouette.`,
        description2: `<h6 class="descriptionH6">Striking Colorway:</h6> Features a distinct black, red, and white color combination, often referred to as "Bred Toe".`,
        description3: `<h6 class="descriptionH6">Premium Construction:</h6> Made with real and synthetic leather in the upper for durability and structure.`,
        description4: `<h6 class="descriptionH6">Comfort Features:</h6> Includes Nike Air technology for impact absorption and a foam midsole for lightweight cushioning.`,
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

        image: `../../logo_Icons/Img_s/shoes/shoes3.webp`,
        image2: `../../logo_Icons/Img_s/shoes/img2nd/shoes2-3.webp`,
        name: `ULTRA GO SKECHERS`,
        description: `Imported China 🇨🇳 Soft Comfortable`,
        description1: `<h6 class="descriptionH6">Lightweight & Responsive ULTRA GO Cushioning:</h6> They incorporate lightweight and responsive ULTRA GO cushioning for enhanced comfort.`,
        description2: `<h6 class="descriptionH6">Air-Cooled Goga Mat Insole:</h6> The design includes an Air-Cooled Goga Mat insole for breathable comfort.`,
        description3: `<h6 class="descriptionH6">Knitted Mesh Upper:</h6> The upper is made of a soft, flexible knit mesh fabric, offering a comfortable fit.`,
        description4: `<h6 class="descriptionH6">Slip-on/Lace-less Design:</h6> The image shows a slip-on style, potentially indicating a Stretch Fit design for sock-like comfort and easy wear.`,
        reviews: `2,185`,
        price: `5,499`,
        title: `Go-Skechers`,
        category: `shoes`
    },
    {
        // Skechers D`LUX Flex Groove 
        // Sole is best for outdoors lovers
        // Rs 8,099

        image: `../../logo_Icons/Img_s/shoes/shoes4.webp`,
        image2: `../../logo_Icons/Img_s/shoes/img2nd/shoes2-4.webp`,
        name: `Skechers D'LUX Flex Groove`,
        description: `Sole is best for outdoors lovers`,
        description1: `<h6 class="descriptionH6">Slip-on style:</h6> Features a breathable athletic mesh upper with a convenient slip-on design.`,
        description2: `<h6 class="descriptionH6">Cushioned comfort:</h6> Includes a lightweight cushioned midsole and often Skechers Air-Cooled Memory Foam® insole for supportive comfort.`,
        description3: `<h6 class="descriptionH6">Durable outsole:</h6> Equipped with a flexible rubber traction outsole, frequently a Goodyear® rubber outsole for enhanced grip.`,
        description4: `<h6 class="descriptionH6">Machine washable:</h6> Many models in this line are designed to be machine washable for easy care.`,
        reviews: `2,381`,
        price: `9,099`,
        title: `D'LUX-Groove`,
        category: `shoes`
    },
    {
        // Skechers Mens Slides
        // Medicated Soft Comfortable 
        // Price 2000/- Fixed

        image: `../../logo_Icons/Img_s/shoes/slipper5.webp`,
        image2: `../../logo_Icons/Img_s/shoes/img2nd/slipper2-5.webp`,
        name: `Skechers Mens Slides`,
        description: `Medicated Soft Comfortable`,
        description1: `<h6 class="descriptionH6">Style:</h6> These are men's sandals or slides, featuring an open-toe design.`,
        description2: `<h6 class="descriptionH6">Material:</h6> The footwear appears to be made of a brown, smooth, possibly synthetic leather or similar material, offering a clean and uniform look.`,
        description3: `<h6 class="descriptionH6">Branding:</h6> The Skechers brand name is visible on the side of the upper strap and also on the insole. The box in the background also indicates "SKECHERS ON-THE-GO."`,
        description4: `<h6 class="descriptionH6">Comfort/Design:</h6> The insole appears contoured for comfort, suggesting a design focused on casual wear and ease of use, possibly related to the "ON-THE-GO" line.`,
        reviews: `8,745`,
        price: `3,499`,
        title: `Mens-Slide`,
        category: `shoes`
    },

    // Watches___________________________________

    {

        image: `../../logo_Icons/Img_s/watches/watch1.webp`,
        image2: `../../logo_Icons/Img_s/watches/img2nd/watch2-1.webp`,
        name: `Lige Foxbox Mens Watch`,
        description: `LIGE FOXBOX 0011 Watches For Men Luxury Brand Sport Quartz Wristwatch Waterproof Digital Clock Men Watch Relogio Masculino`,
        description1: `<h6 class="descriptionH6">Dual Display:</h6> Features both analog (with luminous hands) and digital time displays.`,
        description2: `<h6 class="descriptionH6">Multi-functional:</h6> Includes alarm, chronograph, and world map display.`,
        description3: `<h6 class="descriptionH6">Durable Build:</h6> Constructed with a stainless steel case and band, and is shock-resistant.`,
        description4: `<h6 class="descriptionH6">Water-Resistant:</h6> Designed with 3Bar water resistance, suitable for everyday use and light water exposure.`,
        reviews: `498`,
        price: `6,500`,
        title: `LIGE-FOXBOX`,
        category: `watch`
    },
    {
        // Rs.1500/- each - Rolex Yacht-Master Date Just With Date Heavy Master Lock Steel Buzzle Working With MODERN WATCHES NAME BOX 📦 (Premium Quality)

        image: `../../logo_Icons/Img_s/watches/watch2.webp`,
        image2: `../../logo_Icons/Img_s/watches/img2nd/watch2-2-2.webp`,
        name: `Rolex Yacht-Master`,
        description1: `<h6 class="descriptionH6">Design:</h6> Features a black dial, black bezel with gold accents, and a black rubber strap, complemented by a gold-toned case and clasp.`,
        description2: `<h6 class="descriptionH6">Bezel:</h6> Equipped with a rotating bezel, useful for tracking elapsed time, particularly in nautical contexts.`,
        description3: `<h6 class="descriptionH6">Movement:</h6> Powered by a self-winding mechanical movement, certified as a Superlative Chronometer for precision and reliability.`,
        description4: `<h6 class="descriptionH6">Functionality:</h6> Designed for both maritime utility and elegant wear, offering water resistance and a refined aesthetic.`,
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



        image: `../../logo_Icons/Img_s/watches/watch3.webp`,
        image2: `../../logo_Icons/Img_s/watches/img2nd/watch2-3.webp`,
        name: `BESTWIN DUAL TIME WATCH`,
        description: `TRENDY STYLE WATER RESISTANCE`,
        description1: `<h6 class="descriptionH6">Two-Tone Design:</h6> Features a striking silver and gold color scheme on both the case and the stainless steel band.`,
        description2: `<h6 class="descriptionH6">Analog and Digital Display:</h6> Combines a traditional analog dial with a digital display showing time and possibly date (FF 5-26).`,
        description3: `<h6 class="descriptionH6">Quartz Movement:</h6> Equipped with a quartz movement for accurate timekeeping.`,
        description4: `<h6 class="descriptionH6">Functional Elements:</h6> Includes a calendar display (visible numbers 9116, 29) and potentially other features like water resistance.`,
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

        image: `../../logo_Icons/Img_s/watches/watch4.webp`,
        image2: `../../logo_Icons/Img_s/watches/img2nd/watch2-4.webp`,
        name: `Digital LED Watche`,
        description: `Luxury design best for female`,
        description1: `<h6 class="descriptionH6">Touch LED Display:</h6> Features a touch-sensitive LED screen to show the time.`,
        description2: `<h6 class="descriptionH6">Crystal-Studded Design:</h6> Adorned with crystals on the body and bracelet strap, giving it a luxurious, jewelry-like appearance.`,
        description3: `<h6 class="descriptionH6">Stylish and Trendy:</h6> Offers a blend of fashion and technology, suitable for various occasions and outfits.`,
        description4: `<h6 class="descriptionH6">Lightweight and Comfortable:</h6> Crafted from high-quality materials to ensure it's durable yet comfortable for extended wear.`,
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

        image: `../../logo_Icons/Img_s/watches/watch5.webp`,
        image2: `../../logo_Icons/Img_s/watches/img2nd/watch2-5.webp`,
        name: `Arabic Marble Aura`,
        description1: `<h6 class="descriptionH6">Design:</h6> The watch features a black and white split dial, reminiscent of a Yin and Yang symbol, with Arabic numerals for the hours.`,
        description2: `<h6 class="descriptionH6">Color and Material:</h6> It has a matte black finish, including the case and the metal link strap.`,
        description3: `<h6 class="descriptionH6">Numerals and Hands:</h6> The Arabic numerals and the watch hands are in a contrasting gold tone, enhancing readability against the black and white dial.`,
        description4: `<h6 class="descriptionH6">Style:</h6> This watch is designed with a modern and stylish aesthetic, combining traditional Arabic numerals with a contemporary split-dial design.`,
        reviews: `1,647`,
        price: `2,199`,
        title: `Arabic-Aura`,
        category: `watch`
    },
]

// Insert products details to supabase______________________________________

// for (let i = 0; i < products.length; i++) {
//     const allProducts = products[i];
//     const { title, image, image2, name, description1, description2, description3, description4, reviews, price, category } = allProducts
//     // console.log(title, image, image2, name, description1, description2, description3, description4, reviews, price, category);

//     const insertData = async () => {
//         const { error } = await supabaseApi
//             .from('ProductsData')
//             .insert([
//                 // { id: 1, name: 'Mordor' },
//                 {
//                     name: name, description1: description1, description2: description2,
//                     description3: description3, description4: description4,
//                     reviews: reviews, price: price, title: title, category: category
//                 },
//             ])
//         if (error) {
//             console.log(error.message);
//             return
//         }
//     }
//     // insertData()
// }

// Fetct products details from supabase_____________________________________
const fetchData = async () => {
    const { data, error } = await supabaseApi
        .from('ProductsData')
        .select('*')
        error ? console.log(error.message) : console.log(typeof data);
}
fetchData()


// Process for making product card from title which is get from a Search Params_______________________________

let PrdctTitle;

const searchParams = new URLSearchParams(window.location.search);

searchParams.forEach((title, key) => {
    PrdctTitle = title;
});

const currentProduct = products.filter((products) => products.title === PrdctTitle)[0];


// Product Card creating_________________________________________________________

const { title, image, image2, name, description1, description2, description3, description4, reviews, price } = currentProduct

// console.log(`${title} ${image} ${image2} ${name} ${description} ${reviews} ${price}`);

const PageTitle = document.title = `S.S.B Collections | ${name}`;

Container.innerHTML = `
            <div class="cards" id="card">

                <div class="img_div" id="image" style="background-image: url(${image});"></div>

                <div class="product_content" id="content">

                    <div class="prdctName_n_Hrt">
                        <h2 class="prdctName">${name}</h2>
                        <i class="heart material-icons" id="heart" title="Like">favorite</i>

                    </div>


                    <ul class="descriptionList">
                        <li class="descriptionHeading">
                            <h6>Description</h6>
                            <ol class="descriptionProduct">
                                    <li>${description1}</li>
                                    <li>${description2}</li>
                                    <li>${description3}</li>
                                    <li>${description4}</li>
                            </ol>
                        </li>
                    </ul>

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
// Cards hover effect_____________________________________________________________________---
setTimeout(() => {

    const card = document.getElementById('card');

    const img = document.getElementById(`image`);

    card.addEventListener('mouseover', () => {
        img.style.backgroundImage = `url(${image2})`;
        // img.classList.add('transformImg');
    })
    card.addEventListener('mouseout', () => {
        img.style.backgroundImage = `url(${image})`;
        // img.classList.remove('transformImg');
    })

}, 0);

// Heart Icon fill/empty function___________________________________________________________

const heart = document.getElementById('heart');
heart.addEventListener('click', () => {
    heart.classList.toggle('fill');
    heart.title = heart.classList.contains('fill') ? 'UnLike' : 'Like';
});



// NewsLetter_____________________________________________________________

{
    const emailRagex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    const subscribeInput = document.getElementById('letterMail');

    subscribeInput.addEventListener('keypress', (event) => {
        (event.key === 'Enter') ? SubscribeToNewsLetter() : null;
    })

    function SubscribeToNewsLetter() {

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
                text: " You’ll now receive our latest news, tips, and updates straight to your email.",
                showConfirmButton: false,
                timer: 4000,
                timerProgressBar: true,    // shows progress line at top
                allowOutsideClick: true,   // let user click outside to close
                allowEscapeKey: true,       // allow ESC key to close.
                didOpen: () => {
                    const progressBar = Swal.getTimerProgressBar();
                    if (progressBar) {
                        progressBar.style.background = "dodgerblue"; // 💙 color for progress bar
                        progressBar.style.height = "6px";            // slightly thicker line
                    }
                }
            });
            subscribeInput.value = "";
        }

    }
}

// CopyRight-Claim Date___________________________________

const d = new Date();

const year = document.getElementById('year').innerText = d.getFullYear();