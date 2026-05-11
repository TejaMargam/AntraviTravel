import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollManager from "@/hooks/ScrollManager";
import FAQ from "@/components/faq";
import { useState } from "react";
import { TravelForm } from "@/components/TravelForm";

export default function Thailand() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handlePlanClick = () => {
    setIsFormOpen(true);
  };

  // City data for detailed guides
  const cities = [
    {
      name: "Bangkok",
      subtitle: "Central and capital of Thailand",
      title: "Bangkok — The Unstoppable City",
      description: "Best for Everyone",
      fullDescription: "The Thai capital is one of the world's most exciting cities — a place where centuries-old temples stand beside rooftop infinity pools and world-class street food costs less than a coffee back home. The Grand Palace and Wat Phra Kaew (Temple of the Emerald Buddha) alone justify the journey. Then lose yourself in the labyrinthine Chatuchak Weekend Market, take a longtail boat through the khlongs (canals), and watch the city transform after dark.",
      attractions: [
        { title: "Grand Palace & Wat Phra Kaew", description: "The most iconic landmark in Thailand. The Grand Palace was the official residence of Thai kings for 150 years. Inside its walls is Wat Phra Kaew — the Temple of the Emerald Buddha, the most sacred Buddhist site in the country. The level of detail in the architecture is jaw-dropping. Go early morning to beat the crowds. Entry: ฿500 (~₹1,200)." },
        { title: "Wat Pho — The Reclining Buddha", description: "Just a 5-minute walk from the Grand Palace, Wat Pho houses a 46-metre golden reclining Buddha that fills the entire temple hall. It's also the birthplace of traditional Thai massage — you can get a genuine massage on-site for around ฿260 (~₹620). One of the best value experiences in Bangkok." },
        { title: "Chao Phraya River & The Khlongs", description: "Bangkok was once called the 'Venice of the East' because of its network of canals (khlongs). Take a longtail boat through the narrow canals of Thonburi — you'll pass wooden houses, Buddhist shrines and local life that hasn't changed in decades. The Chao Phraya Express Boat is also the cheapest way to see the city skyline." },
        { title: "Chatuchak Weekend Market", description: "With over 15,000 stalls spread across 35 acres, Chatuchak is one of the world's largest markets. Clothes, antiques, handmade crafts, street food, plants, art everything is here. Open Saturday and Sunday only. Arrive before 10am before it gets crowded and very hot." },
        { title: "Rooftop Bars & Bangkok Nightlife", description: "Bangkok has some of the world's best rooftop bars. Vertigo at Banyan Tree, Sky Bar at Lebua (where The Hangover Part II was filmed) and Octave Rooftop Lounge all offer breathtaking city views. Drinks are expensive (฿400–฿700) but the experience is worth it at least once." },
        { title: "Street Food Capital of the World", description: "Yaowarat (Chinatown), Khao San Road and Or Tor Kor Market are Bangkok's food pilgrimages. Pad Thai, Boat Noodles, Mango Sticky Rice and grilled skewers from street carts cost ฿40–฿80 (~₹95–₹190). Don't skip the famous Raan Jay Fai restaurant a street cook who earned a Michelin star." }
      ],
      antraviTake: "Bangkok is almost always the first stop on any Thailand trip and rightly so. We recommend 3 nights minimum. Don't rush the temples; give yourself a full day for the Grand Palace area alone. If you're short on time, the BTS Skytrain connects most major spots efficiently.",
      image: "/images/thailand/bangkok.webp"
    },
    {
      name: "Pattaya",
      subtitle: "Eastern Gulf Coast · 2 hrs from Bangkok",
      title: "Pattaya — India's Favourite Thai Beach City",
      description: "Pattaya is the most Indian-friendly city in Thailand — and we mean that as a genuine compliment. Walk down Beach Road and you'll spot Hindi signboards, smell familiar masala aromas from Indian restaurants, and hear Bollywood playing from open-air bars. But beyond that, Pattaya has genuinely beautiful beaches, a stunning temple, lush botanical gardens and one of the most unique religious monuments in Asia. It's a city that surprises people who expect nothing more than a party town.",
      attractions: [
        { title: "Koh Larn (Coral Island)", description: "A short 30-minute speedboat ride from Pattaya pier takes you to Koh Larn — a small island with six beaches of white sand and incredibly clear, shallow water. Tawaen Beach is the most popular. Snorkelling, parasailing and banana boat rides are all available. Best visited on weekdays to avoid weekend crowds. Ferry: ฿30 each way (~₹70)." },
        { title: "Sanctuary of Truth", description: "This is one of those places you simply don't expect to exist. A 105-metre-tall wooden temple built entirely without a single nail, sitting right at the edge of the sea. Every inch of it is hand-carved with Hindu and Buddhist mythology — deities, cosmic scenes, and intricate patterns. Construction started in 1981 and is still ongoing because the craftsmen keep rebuilding as the wood ages. Entry: ฿500 (~₹1,200). Absolutely unmissable." },
        { title: "Nong Nooch Tropical Garden", description: "One of Asia's finest botanical gardens — 600 acres of manicured topiary, cactus gardens, orchid houses, French formal gardens and Thai cultural shows that include traditional dance and elephant demonstrations. Perfect for families and photography enthusiasts. Allow at least 3 hours. Entry: ฿300 (~₹720)." },
        { title: "Alcazar Cabaret Show", description: "One of Thailand's most famous cabaret shows — colourful, extravagant performances with live singing, elaborate costumes and incredible production value. This is a purely family-friendly entertainment experience enjoyed by thousands of Indian and international tourists every week. Shows run at 6pm, 7:30pm and 9pm. Tickets: ฿600–฿800." },
        { title: "Pattaya Floating Market", description: "Four regions of Thailand represented in one place — wooden stilt shops selling regional food, handicrafts and souvenirs over a network of canals. You can explore by foot or hire a small paddle boat. Great for souvenir shopping and trying regional Thai snacks at very reasonable prices." },
        { title: "Buddha Mountain (Khao Chi Chan)", description: "A 130-metre-tall laser-etched image of the Buddha carved into a cliff face — created to celebrate King Bhumibol Adulyadej's Golden Jubilee. Surrounded by peaceful gardens and a small lake. Entry is free and it's one of the most serene spots near Pattaya, just 15 minutes south of the city." }
      ],
      antraviTake: "Pattaya works brilliantly as a 2-night add-on to Bangkok. We almost always include it in our Bangkok + Pattaya packages because it's only 2 hours by road and gives travellers a beach experience without a domestic flight. Indian vegetarian food is very easy to find here more so than anywhere else in Thailand.",
      image: "/images/thailand/pattaya.webp"
    },
    {
      name: "Phuket",
      subtitle: "Andaman Sea · Thailand's Largest Island",
      title: "Phuket — Where Luxury Meets the Sea",
      description: "Phuket is Thailand's crown jewel — the destination that appears on every bucket list, honeymoon plan and travel magazine. Thailand's largest island sits in the Andaman Sea with water so blue it looks digitally enhanced, a thriving restaurant scene, world-class resorts and enough to fill a week without repeating a single activity. It's the perfect mix of relaxation and exploration.",
      attractions: [
        { title: "Patong Beach", description: "The most famous beach in Phuket and the heartbeat of the island's tourism scene. Patong is wide, long and packed with activity — jet skiing, parasailing, banana boats, beach massages and an endless strip of restaurants and bars along Bangla Road. If you want energy and excitement, Patong is your base. If you want quiet, choose Kata or Karon instead, both just 20 minutes south." },
        { title: "Phang Nga Bay — James Bond Island", description: "This is one of Southeast Asia's most extraordinary natural landscapes. Hundreds of limestone karst towers jut straight out of emerald water, creating a scene so dramatic it was used as the backdrop for The Man with the Golden Gun (1974) — which is why one particular island is now called James Bond Island. Go by speedboat for a half-day trip or sea kayak through the caves for the full experience." },
        { title: "Old Phuket Town", description: "Most visitors skip this and they're missing one of Phuket's best experiences. The old town's streets are lined with beautifully restored Sino-Portuguese shophouses painted in pastel shades, colourful street art murals, indie coffee shops and great local restaurants serving food that's more authentic and cheaper than the tourist strip. Go on a Sunday for the Walking Street night market." },
        { title: "Big Buddha Phuket", description: "Sitting 45 metres tall on top of Nakkerd Hill, the Big Buddha is visible from almost everywhere in Phuket. The views from the hilltop are spectacular — you can see both coasts of the island on a clear day. Entry is free. Dress modestly (sarongs available at the entrance). Best at sunrise or late afternoon to avoid the midday heat." },
        { title: "Ethical Elephant Sanctuary", description: "Several responsible sanctuaries operate near Phuket where you can spend a half or full day walking with, feeding and bathing rescued elephants in their natural environment — without riding or performing. Phuket Elephant Sanctuary and Elephant Jungle Sanctuary are both well-regarded. These experiences book up fast. Reserve in advance through Antravi." },
        { title: "Island Hopping & Snorkelling", description: "From Phuket you can day-trip to the Phi Phi Islands, Similan Islands (one of the world's top dive sites), Racha Island and Coral Island. The Andaman Sea has some of the best underwater visibility in Asia — coral reefs, sea turtles and tropical fish are just below the surface. Antravi arranges private speedboat charters and group tours both." }
      ],
      antraviTake: "Phuket has beaches for every type of traveller. Patong for buzz and nightlife, Kata for families, Surin for luxury, Nai Harn for quiet. We always ask our guest's what kind of trip they want before recommending which part of Phuket to stay in it makes a huge difference. Let us know, and we'll pick the right option for you.",
      image: "/images/thailand/phuket.webp"
    },
    {
      name: "Krabi",
      subtitle: "Andaman Coast · Southern Thailand",
      title: "Krabi — The Most Beautiful Coastline in Thailand",
      description: "If you've ever seen a travel photo with towering limestone cliffs rising from perfect turquoise water, there's a very good chance it was taken in Krabi. This is Thailand in its most dramatic, natural form — raw, unspoiled coastline where some beaches can only be reached by longtail boat, where rock climbers scale vertical sea cliffs at sunrise, and where the water is so clear you can see the fish from the surface.",
      attractions: [
        { title: "Railay Beach", description: "Railay is cut off from the mainland by limestone cliffs so it can only be reached by longtail boat — and that isolation keeps it magical. There are actually four beaches on the Railay peninsula: Railay West (the prettiest, with soft white sand and calm water), Railay East (mangroves, good for kayaking), Phra Nang Cave Beach (one of Thailand's most photographed) and Tonsai Beach (beloved by rock climbers and backpackers). Budget 30 minutes each way from Ao Nang pier." },
        { title: "Phi Phi Islands", description: "The Phi Phi archipelago — technically part of Krabi province — is one of Asia's most iconic island destinations. Phi Phi Don has guesthouses, restaurants and nightlife. Phi Phi Leh is uninhabited and contains Maya Bay, the beach made globally famous by the film The Beach (2000). Access is by speedboat day trip from both Krabi and Phuket. Maya Bay is now protected — only limited visitors allowed per day to let the ecosystem recover." },
        { title: "4 Islands Tour", description: "The most popular day trip from Krabi Town — a longtail or speedboat tour visiting four different islands including Koh Mor (fantastic snorkelling), Koh Chuak, Koh Kwang and Tup Island. At low tide, a sandbar appears connecting two of the islands — walk between them as the sea laps around your feet. A stunning, affordable day out that costs around ฿1,200–฿1,800 per person." },
        { title: "Rock Climbing at Railay", description: "Krabi is one of the world's top rock climbing destinations — and not just for experts. The limestone cliffs at Railay and Tonsai have routes for absolute beginners all the way to advanced climbers. Half-day courses with certified instructors start from ฿1,200. The views from the top looking out over the bay and islands are otherworldly." },
        { title: "Tiger Cave Temple (Wat Tham Suea)", description: "This is a climb of 1,237 steep steps up a forested hillside to a golden Buddha and a 360-degree panorama over the Krabi valley, mangroves and Andaman Sea. It takes about 30–45 minutes to reach the top and the sunrise view is extraordinary. Arrive by 6am for the best light and before the heat. Completely free to visit." },
        { title: "Snorkelling & Diving", description: "The Andaman Sea around Krabi is home to coral gardens, leopard sharks, whale sharks (seasonal), sea turtles and rich marine life. Koh Haa and Hin Daeng are rated among the best dive sites in Southeast Asia. PADI courses are available in Ao Nang. Even casual snorkellers will see incredible underwater life on any island-hopping tour." }
      ],
      antraviTake: "Krabi is where Thailand stops feeling like a tourist destination and starts feeling like an adventure. We love pairing Krabi with Phuket fly into Phuket, spend a few nights there, then take the 1.5-hour ferry across to Krabi for a completely different experience. The two complement each other perfectly.",
      image: "/images/thailand/krabi.webp"
    },
    {
      name: "Chiang Mai",
      subtitle: "Northern Thailand · 700 km from Bangkok",
      title: "Chiang Mai — The Soul of Northern Thailand",
      description: "Chiang Mai moves at a different pace from Bangkok. Here, the air is cooler, the streets are quieter, and ancient temples out number coffee shops. The old city is surrounded by a square moat and medieval walls — inside you'll find golden-spired wats, saffron-robed monks doing their morning rounds and the best cooking schools in all of Thailand. Chiang Mai is where travellers come to slow down, learn something new and reconnect with what makes Thailand truly special.",
      attractions: [
        { title: "Doi Suthep Temple (Wat Phra That Doi Suthep)", description: "The most revered temple in northern Thailand, perched 1,073 metres above the city on Doi Suthep mountain. The view of Chiang Mai from the hilltop is spectacular. To reach the main shrine, climb 306 naga-flanked steps (or take the funicular for ฿20). The gilded chedi inside is covered in intricate mosaic work and is considered one of Thailand's most sacred Buddha relics. Entry: ฿30 (~₹70)." },
        { title: "Ethical Elephant Sanctuaries", description: "Chiang Mai is the best place in Thailand arguably in Asia to have a meaningful, ethical encounter with elephants. Elephant Nature Park (founded by Lek Chailert) rescues injured and abused elephants and lets visitors walk, feed and bathe them in a jungle river setting. No riding, no performing. Half-day and full-day programmes available." },
        { title: "Thai Cooking Classes", description: "Chiang Mai is the undisputed home of Thai cooking classes. You visit a local market to buy ingredients, then spend 3–4 hours cooking 5–6 traditional Thai dishes under expert guidance — and eat everything you make. Classes start from ฿900 (~₹2,150) and are one of the most enjoyable and useful souvenirs you can bring home. Basil & Lime and Thai Farm Cooking School are both excellent." },
        { title: "Sunday Walking Street (Wualai Road)", description: "Every Sunday evening, Wualai Road transforms into one of Thailand's best night markets. Unlike tourist trap markets, this one is genuinely local — silverwork (Chiang Mai is famous for silver craftsmanship), handmade textiles, wooden carvings, paintings, herbal products and incredible street food. The atmosphere under the fairy lights, with live musicians playing traditional Thai instruments, is magical. Free to enter, open from 5pm to midnight." },
        { title: "Doi Inthanon — Thailand's Highest Peak", description: "Just 80 km from Chiang Mai, Doi Inthanon National Park is home to Thailand's highest summit (2,565 m), spectacular waterfalls (Wachirathan Falls is one of the country's most impressive), hill tribe villages, cloud forests and two beautiful royal chedis built in honour of the King and Queen. The temperature at the summit can drop to 0°C in January — bring a jacket. Perfect full-day trip from Chiang Mai." },
        { title: "Yi Peng Lantern Festival", description: "If your trip falls in November, you may coincide with Yi Peng —Chiang Mai's lantern festival. Thousands of glowing paper lanterns are released into the night sky simultaneously, creating one of the most beautiful sights in Asia. It coincides with Loy Krathong (the nationwide floating lotus festival). This is one of those travel experiences that stays with you for life." }
      ],
      antraviTake: "Chiang Mai is the destination that most Indian travellers discover and then wish they'd given more time to. Bangkok and Phuket are the first destinations people book — Chiang Mai is the one they fall in love with. We always recommend at least 3 nights. The city is also much cooler than the south, making it ideal for November to February travel.",
      image: "/images/thailand/chiang-mai.webp"
    },
    {
      name: "Koh Samui",
      subtitle: "Gulf of Thailand · Surat Thani Province",
      title: "Koh Samui — Thailand's Tropical Luxury Island",
      description: "Koh Samui is the island that makes couples look at each other and say 'should we get married here?' Thailand's second-largest island has evolved from a coconut plantation into a destination of private pool villas, beachfront fine dining and indulgent spa retreats — yet it's kept enough of its easy island soul that it never feels pretentious. The Gulf of Thailand water is calmer than the Andaman Sea, making it ideal for swimming almost all year round.",
      attractions: [
        { title: "Chaweng Beach", description: "The longest and most famous beach on Koh Samui — a 6-km stretch of white sand with calm, crystal water. Chaweng is where you'll find the best range of hotels (from budget guesthouses to 5-star resorts), the widest variety of restaurants and the most active nightlife. The northern end of Chaweng is quieter; the central section is busier and more energetic. Sunrise here is genuinely beautiful." },
        { title: "Big Buddha Temple (Wat Phra Yai)", description: "A 12-metre golden Buddha statue sitting on a small island connected to Koh Samui by a short causeway. It's surrounded by smaller shrines, fortune-telling monks and an interesting market of local crafts and food. Not as grand as some of Thailand's other Buddha images, but the serene setting over the water makes it worth the short trip. Entry is free." },
        { title: "World-Class Spas & Wellness Retreats", description: "Koh Samui has more luxury spas per square kilometre than almost anywhere in Asia. From beachside Thai massage (฿200–฿400/hour) to multi-day wellness retreats, herbal steam baths and traditional healing programmes — the island is a sanctuary for body and mind. Tamarind Springs, Six Senses and Kamalaya are among the most acclaimed." },
        { title: "Koh Tao Day Trip — Dive & Snorkel", description: "Koh Tao ('Turtle Island') is a 2-hour high-speed catamaran from Koh Samui and is one of the world's most celebrated diving destinations. The water clarity is outstanding and the coral reefs are home to sea turtles, reef sharks and colourful fish. Even non-divers can snorkel or do a beginner Discover Scuba session. Combine with Koh Nang Yuan — a trio of connected islands — for a full day out." },
        { title: "Na Muang Waterfalls", description: "Hidden in the jungle at the centre of Koh Samui, Na Muang Waterfall 1 and 2 are accessible by scooter or tuk-tuk. The first falls drop 20 metres into a natural pool where you can swim — the water is cool and refreshing. The second, higher waterfall requires a 45-minute jungle hike but rewards you with a more secluded, spectacular scene. Entry is free." }
      ],
      antraviTake: "Koh Samui is our top recommendation for honeymooners from India. The combination of private pool villas, stunning sunrises over the Gulf of Thailand and world-class dining makes it truly special for couples. We frequently pair it with Bangkok (fly BKK–USM, it's a short hop) to create the perfect cultural + romantic Thailand itinerary.",
      image: "/images/thailand/koh-samui.webp"
    },
    {
      name: "Koh Phangan",
      subtitle: "Gulf of Thailand · 12 km from Koh Samui",
      title: "Koh Phangan — The Island of Full Moons & Spirits",
      description: "Koh Phangan is two islands in one. On one side you have Haad Rin — home to the world-famous Full Moon Party that draws 30,000 people every month to dance on the beach under the moon. On the other side you have quiet fishing villages, hidden beaches, jungle waterfalls and some of Asia's best yoga and wellness retreats. Which side you choose says a lot about the kind of traveller you are — and both sides are wonderful.",
      attractions: [
        { title: "The Full Moon Party", description: "Once a month, on the night of the full moon, Haad Rin beach becomes the world's most famous beach party — fire dancers, foam zones, neon body paint, international DJs and tens of thousands of people from every country on Earth. It runs from sunset until sunrise. Even if parties aren't your usual scene, there's something undeniably electric about 30,000 people celebrating together under a full moon on a Thai beach. Check the Full Moon Party calendar before booking your trip." },
        { title: "Yoga Retreats & Wellness", description: "Koh Phangan has quietly become one of Asia's top wellness destinations. Dozens of retreat centres offer yoga teacher training, meditation retreats, sound healing, raw food programmes and Ayurvedic treatments — many set in jungle hillside settings with ocean views. Agama Yoga, Samahita Retreat and The Sanctuary are all well-established." },
        { title: "Thong Nai Pan & Bottle Beach", description: "While Haad Rin gets all the attention, the north of Koh Phangan is where you'll find the island's most beautiful beaches. Thong Nai Pan Yai and Thong Nai Pan Noi are twin bays of white sand and very calm water, popular with families and couples. Bottle Beach (Haad Khuat) is more remote and requires a boat or a hike — but that's exactly why it's so unspoiled. Pure paradise." },
        { title: "Than Sadet Waterfall & National Park", description: "The royal waterfall — so named because four different Thai kings have visited and inscribed their initials on the boulders here. A series of cascades tumbling through the jungle into natural rock pools where you can swim. The surrounding Than Sadet-Koh Phangan National Park also covers much of the island's interior and the Koh Ma reef (excellent snorkelling). Entry: ฿200." },
        { title: "Snorkelling at Koh Ma", description: "Koh Ma is a tiny island connected to Koh Phangan's northwest coast by a sandy bar at low tide — you can walk across. The reef around Koh Ma is one of the best snorkelling spots in the Gulf of Thailand, with excellent coral, puffer fish, leopard sharks and sea turtles. Mask and fins rent for ฿100/day. Best visibility November to April." },
        { title: "Srithanu Village — The Bohemian Heart", description: "On the west coast of Koh Phangan, Srithanu is a small village that has evolved into the island's bohemian, vegetarian-friendly hub. Organic cafés, raw food restaurants, vegan bakeries and holistic healing centres line the main road. After Bangkok's street food intensity, Srithanu offers a quieter, healthier kind of Thai experience that many travellers appreciate." }
      ],
      antraviTake: "We recommend Koh Phangan as a 3-night island, combined with 2 nights in Koh Samui they're only 45 minutes apart by ferry. If your travel dates fall near a full moon, timing a night at Haad Rin is a once-in-a-lifetime experience. If you prefer wellness over parties, the north of the island is completely peaceful and very, very beautiful.",
      image: "/images/thailand/koh-phangan.webp"
    }
  ];

  // Food items
  const foodItems = [
    { title: "Pad Thai – Street Food Icon", description: "Stir-fried rice noodles with egg, bean sprouts, green onions and your choice of tofu, prawn or chicken — topped with crushed peanuts and a squeeze of lime. The dish that made Thailand famous worldwide.", image: "/images/thailand/food/pad-thai.webp" },
    { title: "Green Curry (Gaeng Keow Wan) – Classic curry", description: "Aromatic green chilli paste cooked in rich coconut milk with Thai basil, kaffir lime leaves and vegetables. Fragrant, creamy and deceptively spicy, always served with jasmine rice.", image: "/images/thailand/food/green-curry.webp" },
    { title: "Som Tum (Green Papaya Salad) – Northen specialty", description: "Shredded unripe papaya pounded in a mortar with dried shrimp, chillies, lime juice, fish sauce and palm sugar. Explosive flavour in every bite — ask for 'mai phet' if you need less heat.", image: "/images/thailand/food/som-tum.webp" },
    { title: "Khao Pad (Thai Fried Rice) – Comfort Food", description: "Jasmine rice wok-fried with garlic, egg, soy sauce and your choice of protein — finished with cucumber slices, spring onion and a wedge of lime. The Thai answer to biryani.", image: "/images/thailand/food/khao-pad.webp" },
    { title: "Mango Sticky Rice (Khao Niao Mamuang) – Must-try Dessert", description: "Glutinous sticky rice soaked in sweet coconut milk, served alongside perfectly ripe mango slices. Simple, seasonal and absolutely sublime — best enjoyed March through May when mangoes peak.", image: "/images/thailand/food/mango-sticky-rice.webp" },
    { title: "Vegetarian & Vegan Note", description: "Thai cuisine uses fish sauce (nam pla) and shrimp paste extensively. Always say 'jay' (เจ) for vegan or 'mangsawirat' (มังสวิรัติ) for vegetarian when ordering. Buddhist vegan restaurants (ร้านอาหารเจ) are found across the country and serve excellent meat-free versions of all classics.", image: "/images/thailand/food/vegetarian.webp" }
  ];

  // Culture items
  const cultureItems = [
    { title: "The Wai — Thai Greeting", description: "Press palms together at chest level, fingers pointing up, and bow your head slightly. The higher your hands, the greater the respect. Never initiate a wai with children or service workers — they wai you first. Return a wai when given one.", image: "/images/thailand/culture/wai.webp" },
    { title: "Royal Family — Profound Respect", description: "The monarchy is sacred in Thailand. The lèse-majesté law (Article 112) means criticism of the royal family is a criminal offence. When the royal anthem plays in cinemas or public spaces, everyone stands — visitors should do the same.", image: "/images/thailand/culture/royal-family.webp" },
    { title: "Head & Feet — Sacred Hierarchy", description: "The head is considered the most sacred part of the body — never touch a Thai person's head. Feet are the lowest — don't point your feet at people, monks or Buddha images. Remove shoes before entering temples and many homes.", image: "/images/thailand/culture/head-feet.webp" },
    { title: "Temple Etiquette", description: "Dress conservatively — cover shoulders and knees. Sarongs are usually available to borrow at temple gates. Women must never touch or hand items directly to a monk. Speak quietly; temples are places of worship, not merely photo backdrops.", image: "/images/thailand/culture/temple-etiquette.webp" },
    { title: "'Saving Face' — Kreng Jai", description: "Thais avoid confrontation and public criticism to preserve harmony. If a Thai person smiles when something goes wrong, it is not indifference — it is courtesy. Raising your voice or showing frustration in public is deeply disrespectful and counterproductive.", image: "/images/thailand/culture/saving-face.webp" },
    { title: "Festivals to Plan Around", description: "Songkran (Apr 13–15): Thai New Year water festival — the world's biggest water fight. Loy Krathong (Nov): Thousands of lit lotus floats and sky lanterns released at night — magical. Vegetarian Festival (Oct): Nine days of strict vegetarian observance and street performances in Phuket.", image: "/images/thailand/culture/festivals.webp" },
    { title: "Art, Craft & Silk", description: "Thailand's artisanal heritage is extraordinary — from Chiang Mai's hand-painted umbrellas and silver jewellery to the world-renowned Thai silk pioneered by Jim Thompson. Shopping for handcrafts directly supports local artisan communities.", image: "/images/thailand/culture/art-craft.webp" },
    { title: "The Elephant — National Symbol", description: "The white elephant is a sacred symbol of royal power. Please choose elephant sanctuaries that prioritise welfare — avoid attractions where elephants perform or give rides. Ethical sanctuaries allow you to walk, feed and bathe elephants with full dignity.", image: "/images/thailand/culture/elephant.webp" }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#ffffff' }}>
      <ScrollManager />
      <Navbar />

      {/* Hero Section with Background Video */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: '100vh' }}>
        <div className="absolute inset-0 overflow-hidden">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="/videos/thailand.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(22,38,96,0.7) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)' }} />
        </div>
        
        {/* Overlay Content */}
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 400, letterSpacing: '0.02em', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Ready to Experience
            <br />the Land of Smiles?
          </h1>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1rem, 2vw, 1.3rem)', fontWeight: 300, marginBottom: '3rem', lineHeight: 1.6, opacity: 0.95 }}>
            Our Thailand specialists craft personalised journeys — from Bangkok's golden temples
            <br />to Phuket's hidden coves — built exactly around you.
          </p>
        </div>
      </section>

      {/* Country Info Bar */}
      <section className="py-8" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid var(--warm-border)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--mid-gray)' }}>Capital</span>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 500, color: 'var(--charcoal)' }}>Bangkok (Krung Thep)</p>
            </div>
            <div>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--mid-gray)' }}>Currency</span>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 500, color: 'var(--charcoal)' }}>Thai Baht (฿)</p>
            </div>
            <div>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--mid-gray)' }}>Language</span>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 500, color: 'var(--charcoal)' }}>Thai</p>
            </div>
            <div>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--mid-gray)' }}>Best Season</span>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 500, color: 'var(--charcoal)' }}>Year around</p>
            </div>
            <div>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--mid-gray)' }}>Buddhist Temples</span>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 500, color: 'var(--charcoal)' }}>34,000+</p>
            </div>
            <div>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--mid-gray)' }}>Avg Summer High</span>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 500, color: 'var(--charcoal)' }}>35°C</p>
            </div>
            <div>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--mid-gray)' }}>Visa for Indians</span>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 500, color: 'var(--charcoal)' }}>60 days Visa free</p>
            </div>
          </div>
          <div className="text-center mt-4">
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--mid-gray)' }}>
              Thailand Digital Arrival Card (TDAC) is a mandatory online form that must be completed at least 72 hours before your flight. You will be denied boarding without it.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--warm-cream)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">About</span>
            <div className="editorial-divider" />
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: 'var(--charcoal)', marginBottom: '1rem' }}>
              A Kingdom
              <br />Unlike Any Other
            </h2>
            <div className="aspect-video bg-gray-200 rounded-lg mb-8 max-w-4xl mx-auto" />
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', color: 'var(--mid-gray)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Thailand sits at the heart of mainland Southeast Asia, bordered by Myanmar, Laos, Cambodia and Malaysia. It is one of the few countries in the region never colonised by a European power — a fact that infuses its people with a quiet pride and its culture with remarkable continuity.
            </p>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', color: 'var(--mid-gray)', lineHeight: 1.8 }}>
              For Indian travellers, Thailand has long been the gateway to Southeast Asia — a four-hour flight away yet feeling entirely another world. In 2024, India became Thailand's second-largest source of international tourists, with over 1.8 million visitors making the crossing.
            </p>
          </div>
        </div>
      </section>

      {/* Language Section */}
      <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 400, color: 'var(--charcoal)' }}>
              Speak a Little
              <br />Thai
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', color: 'var(--mid-gray)', lineHeight: 1.8 }}>
              Thai is a tonal language, the same syllable can mean different things depending on pitch. But locals absolutely love it when visitors try, and even a few words earn you genuine warmth.
            </p>
          </div>
        </div>
      </section>

      {/* Food Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--warm-cream)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: 'var(--charcoal)', marginBottom: '1rem' }}>
              Thai cuisine
            </h2>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 400, color: 'var(--charcoal)' }}>
              Eat Like
              <br />a Local
            </h3>
          </div>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', color: 'var(--mid-gray)', lineHeight: 1.8 }}>
              Thai cuisine is a masterclass in balance — sweet, sour, salty, spicy and umami in every bowl. For Indian palates, it often feels surprisingly familiar yet thrillingly different. Here are the dishes you absolutely must try.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {foodItems.map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gray-200 rounded-lg" />
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 500, color: 'var(--charcoal)', marginBottom: '0.5rem' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--mid-gray)', lineHeight: 1.6 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Customs Section */}
      <section className="py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: 'var(--charcoal)', marginBottom: '1rem' }}>
              The Soul of
              <br />Thailand
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', color: 'var(--mid-gray)', lineHeight: 1.8 }}>
              Thai culture is shaped by Theravada Buddhism, the reverence for the royal family and a deep respect for harmony and face. Understanding a few fundamentals will transform your experience from tourist to traveller.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {cultureItems.map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gray-200 rounded-lg" />
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 500, color: 'var(--charcoal)', marginBottom: '0.5rem' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--mid-gray)', lineHeight: 1.6 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences & Attractions */}
      <section className="py-20" style={{ backgroundColor: 'var(--warm-cream)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Add another background video section */}
          <div className="relative h-64 rounded-lg overflow-hidden mb-12">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover">
              <source src="/videos/thailand-experiences.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: 'white', textAlign: 'center' }}>
                Where to Go,
                <br />What to Feel
              </h2>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', color: 'var(--mid-gray)', lineHeight: 1.8 }}>
              Thailand rewards both the beach-lover and the culture-seeker. From the neon chaos of Bangkok's night markets to the silence of a hilltribe village at dawn, every region tells a different story.
            </p>
          </div>
        </div>
      </section>

      {/* City Guides */}
      {cities.map((city, index) => (
        <section key={city.name} className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-var(--warm-cream)'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-4">
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--mid-gray)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {city.subtitle}
              </span>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 400, color: 'var(--charcoal)', marginBottom: '1rem' }}>
                  {city.title}
                </h2>
                <div style={{ width: '3rem', height: '2px', backgroundColor: 'var(--luxury-gold)', marginBottom: '1.5rem' }} />
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--navy)', fontWeight: 500, marginBottom: '1rem' }}>
                  {city.description}
                </p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', color: 'var(--mid-gray)', lineHeight: 1.8, marginBottom: '2rem' }}>
                  {city.fullDescription}
                </p>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 500, color: 'var(--navy)', marginBottom: '0.5rem' }}>
                    Antravi's Take:
                  </h4>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--mid-gray)', lineHeight: 1.7 }}>
                    {city.antraviTake}
                  </p>
                </div>
              </div>
              
              <div>
                <div className="aspect-[4/3] bg-gray-200 rounded-lg mb-6" />
                
                <div className="space-y-6">
                  {city.attractions.map((attraction, attrIndex) => (
                    <div key={attrIndex}>
                      <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 500, color: 'var(--charcoal)', marginBottom: '0.5rem' }}>
                        {attraction.title}
                      </h4>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--mid-gray)', lineHeight: 1.6 }}>
                        {attraction.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* When to Visit Section */}
      <section className="py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: 'var(--charcoal)', marginBottom: '1rem' }}>
              Choosing Your
              <br />Perfect Season
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', color: 'var(--mid-gray)', lineHeight: 1.8 }}>
              Thailand has three seasons: Cool & Dry (Nov–Feb), Hot (Mar–May), and Wet Monsoon (Jun–Oct) - Heavy rains. Different regions are affected differently
            </p>
          </div>
          
          <div className="bg-yellow-50 p-6 rounded-lg max-w-4xl mx-auto text-center">
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', color: 'var(--mid-gray)', lineHeight: 1.8 }}>
              <strong>Budget Window</strong><br />
              May–October offers 30–50% cheaper hotels and flights with far fewer crowds. If you don't mind occasional rain, it can be spectacular value — especially for Bangkok.
            </p>
          </div>
        </div>
      </section>

      {/* Getting There Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--warm-cream)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: 'var(--charcoal)', marginBottom: '1rem' }}>
              Flights to Thailand
              <br />from India
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', color: 'var(--mid-gray)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Thailand has 3 major international airports: Bangkok Suvarnabhumi (BKK), Phuket (HKT) and Chiang Mai (CNX). Most Indian routes connect through BKK.
            </p>
            
            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 500, color: 'var(--navy)', marginBottom: '1rem' }}>
                Visa Update 2025
              </h4>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--mid-gray)', lineHeight: 1.8 }}>
                Indian passport holders receive visa-free entry to Thailand for stays up to 60 days (as of 2024, extended in 2025). No visa sticker required — just a valid passport with 6+ months validity and a return ticket.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 500, color: 'var(--navy)', marginBottom: '1rem' }}>
                Booking Tip:
              </h4>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--mid-gray)', lineHeight: 1.8 }}>
                Best fares appear 6–10 weeks before travel. Avoid booking within 3 weeks of peak dates (Diwali, Christmas, New Year). Tuesday/Wednesday departures are typically cheapest from India.
              </p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto mt-12">
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 500, color: 'var(--charcoal)', marginBottom: '1rem' }}>
              From Bangkok to Islands
            </h3>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', color: 'var(--mid-gray)', lineHeight: 1.8 }}>
              Domestic flights to Phuket, Koh Samui & Chiang Mai from BKK cost ₹5,000–₹8,000 Approx. Bangkok's Don Mueang (DMK) handles most budget carriers. Suvarnabhumi (BKK) serves full-service airlines.
            </p>
          </div>
        </div>
      </section>

      {/* Before You Land Section */}
      <section className="py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: 'var(--charcoal)', marginBottom: '1rem' }}>
              Before You
              <br />Land
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto mb-8">
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', color: 'var(--mid-gray)', lineHeight: 1.8 }}>
              A few things that will make your Thailand trip smoother, safer and infinitely more rewarding.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Get a Local SIM on Arrival", desc: "AIS, DTAC and True Move sell tourist SIMs (15–30 days, unlimited data) at Suvarnabhumi Airport for ₹500–₹900. Much cheaper than roaming. Google Maps works perfectly throughout Thailand." },
              { title: "Use Grab, Not Street Taxis", desc: "Grab (Southeast Asia's Uber) is available in all major cities. Always use it over unmarked taxis to avoid price gouging. Motorbike taxis (orange vests) are fine for short hops in Bangkok." },
              { title: "Cash is Still King", desc: "Thailand is still largely cash-based outside luxury hotels. ATMs charge ₹250–₹400 per withdrawal — draw larger amounts fewer times. Exchange at Superrich or money changers for better rates than airport counters." },
              { title: "Dress for Temples", desc: "Always carry a light scarf — it doubles as a temple cover-up. Shorts and sleeveless tops are fine on beaches but inappropriate at Wat Pho or the Grand Palace, where entry is refused." },
              { title: "Hydration & Heat", desc: "Thailand's heat is serious — drink 3–4 litres of water daily. Carry bottled water; tap water is not safe to drink. Coconut water from street stalls is cheap, hydrating and delicious." },
              { title: "Travel Insurance is Essential", desc: "Medical care is excellent but expensive for foreigners without insurance. Comprehensive travel insurance (including activity cover if you're diving or trekking) is strongly recommended for all trips." }
            ].map((tip, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">{index + 1}</span>
                  </div>
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 500, color: 'var(--charcoal)', marginBottom: '0.5rem' }}>
                    {tip.title}
                  </h4>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--mid-gray)', lineHeight: 1.6 }}>
                    {tip.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Book with Antravi Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--warm-cream)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: 'var(--charcoal)', marginBottom: '1rem' }}>
              Antravi for
              <br />Thailand
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', color: 'var(--mid-gray)', lineHeight: 1.8 }}>
              Planning a Thailand trip is easy. Planning a great Thailand trip takes experience. Here's what makes Antravi different from booking everything yourself or going through a generic travel agency.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Built for Indian Travellers", desc: "We understand Indian travel needs — vegetarian and Jain food requirements, preference for Indian sim cards that work in Thailand, airport pickup timing around IndiGo and Air India schedules, and the comfort of speaking to someone in your own language when something goes wrong at 11pm in Phuket." },
              { title: "Every Trip is Custom-Made", desc: "We don't sell fixed packages. We sit with you (or call you), understand your group, budget, travel dates and wish list then build an itinerary that's specifically designed for you. A family of four from Hyderabad needs a very different Thailand itinerary than a couple from Delhi or a group of friends from Bengaluru." },
              { title: "Support When You Need It", desc: "While you're in Thailand, we're available on WhatsApp. if you need a different restaurant, if you want to add a spontaneous day trip we handle it. You're never alone. This is something no self-booking platform can give you." },
              { title: "Trusted by Real Travellers", desc: "Our guest's come back to us for their next vacation and refer their friends and family. That repeat trust is our most important credential. Read our reviews on Google and see what real travellers from Hyderabad, Bangalore, Mumbai and Delhi say about their vacation." },
              { title: "Transparent Pricing", desc: "No hidden costs. No surprise charges at check-in. No 'that wasn't included' conversations. We tell you exactly what's covered in your package before you pay a single rupee." }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 500, color: 'var(--charcoal)', marginBottom: '1rem' }}>
                  {item.title}
                </h4>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--mid-gray)', lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan Your Thailand Vacation */}
      <section className="py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: 'var(--charcoal)', marginBottom: '1rem' }}>
            Plan your Thailand vacation with Antravi
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', color: 'var(--mid-gray)', marginBottom: '2rem', lineHeight: 1.8 }}>
            Tell us your travel dates & preferences — we'll create a personalized itinerary just for you.
          </p>
          <button onClick={handlePlanClick} className="btn-editorial-solid">
            Reserve my Thailand vacation Now
          </button>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16" style={{ backgroundColor: 'var(--warm-cream)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQ faqsData={[
            {
              id: "thailand-1",
              question: "How many days are enough for Thailand?",
              answer: "5–7 days is ideal, depending on destinations: 5 days → Bangkok + Pattaya, 6–7 days → Bangkok + Phuket + Krabi"
            },
            {
              id: "thailand-2",
              question: "Is Thailand visa-on-arrival available?",
              answer: "Indian passport holders can enter Thailand visa-free for up to 60 days. You need a valid passport with at least 6 months of remaining validity, a confirmed return ticket and sufficient funds (generally ₹20,000 equivalent)."
            },
            {
              id: "thailand-3",
              question: "Which is better: Phuket or Krabi?",
              answer: "Phuket = nightlife + beaches + activities. Krabi = peaceful + scenic + calm beaches. Most travellers do both."
            },
            {
              id: "thailand-4",
              question: "Is Thailand safe for solo female Indian travellers?",
              answer: "Thailand is generally very safe for solo female travellers. Bangkok, Chiang Mai and Phuket are well-lit, heavily touristed and have a strong tourist police presence. Standard precautions apply: use Grab over street taxis at night, avoid isolated beaches after dark and keep emergency contacts accessible. Many solo Indian women travel Thailand comfortably and independently."
            },
            {
              id: "thailand-5",
              question: "Is Indian vegetarian / Jain food available in Thailand?",
              answer: "Thai food uses fish sauce and shrimp paste liberally, but vegetarian options are growing. Say 'jay' (เจ) for vegan or 'mangsawirat' for vegetarian. Buddhist vegan restaurants are common. In tourist areas, 'Indian food' restaurants serve familiar vegetarian thalis. Fruits, coconut water and fresh salads are widely available everywhere."
            },
            {
              id: "thailand-6",
              question: "What is the ideal budget for 7 days in Thailand from India?",
              answer: "A comfortable mid-range trip (flights + hotels + food + activities) for 7 nights typically costs ₹60,000–₹1,10,000 per person from South India. Backpacker budgets can go as low as ₹40,000, while luxury experiences (private villas, fine dining, island-hopping) can exceed ₹2,00,000. Antravi curates packages across all tiers. Speak to our travel experts for a custom quote.\n*Above is indicative – Actual price will vary based on individual travel preferences."
            }
          ]} />
        </div>
      </section>

      {/* Copyright */}
      <footer className="py-8 text-center" style={{ backgroundColor: '#ffffff', borderTop: '1px solid var(--warm-border)' }}>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--mid-gray)' }}>
          © 2026 Antravi Travel Experience · antravi.com · Content accurate as of May 2026.<br />
          Visa, activities, and flight information are subject to change — always verify with official sources before travel.
        </p>
      </footer>

      <Footer />
      <TravelForm isOpen={isFormOpen} onClose={() => { setIsFormOpen(false); }} />
    </div>
  );
}
