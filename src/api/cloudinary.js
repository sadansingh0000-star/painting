// Yeh tumhari saari images ka data hai - ek baar load hoga, cache hoga
const CACHE_KEY = 'aarti_art_studio_images';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

export const IMAGES = [
  {
    "public_id": "A0018_Bright_Green_Landscape_with_a_Beautiful_Swan_x0vpns",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--2BczoTRw--/c_limit,w_1200/q_auto/f_auto/A0018_Bright_Green_Landscape_with_a_Beautiful_Swan_x0vpns?_a=BAMAOGUs0",
    "title": "Bright Green Landscape",
    "category": "Landscape",
    "description": "Beautiful swan in vibrant green landscape"
  },
  {
    "public_id": "A0019_Artistic_Flamingo_dal3pg",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--ckgFXCfW--/c_limit,w_1200/q_auto/f_auto/A0019_Artistic_Flamingo_dal3pg?_a=BAMAOGUs0",
    "title": "Artistic Flamingo",
    "category": "Wildlife",
    "description": "Elegant flamingo in artistic style"
  },
  {
    "public_id": "A0020_Vibrant_Peaceful_Swan_m0r4ke",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--cXBikGfO--/c_limit,w_1200/q_auto/f_auto/A0020_Vibrant_Peaceful_Swan_m0r4ke?_a=BAMAOGUs0",
    "title": "Vibrant Peaceful Swan",
    "category": "Wildlife",
    "description": "Peaceful swan with vibrant colors"
  },
  {
    "public_id": "A0070_Birdy_in_Snowfall_f8pjzd",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--QW01QUQ---/c_limit,w_1200/q_auto/f_auto/A0070_Birdy_in_Snowfall_f8pjzd?_a=BAMAOGUs0",
    "title": "Birdy in Snowfall",
    "category": "Wildlife",
    "description": "Beautiful bird enjoying snowfall"
  },
  {
    "public_id": "A0021_Autumn_Landscape_with_a_Running_Happy_Dog_hk2bwa",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--zLYHQzkX--/c_limit,w_1200/q_auto/f_auto/A0021_Autumn_Landscape_with_a_Running_Happy_Dog_hk2bwa?_a=BAMAOGUs0",
    "title": "Autumn Landscape",
    "category": "Landscape",
    "description": "Happy dog running through autumn leaves"
  },
  {
    "public_id": "A0066_Penguin_in_Snowfall_vdyfrk",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--yZ3dELye--/c_limit,w_1200/q_auto/f_auto/A0066_Penguin_in_Snowfall_vdyfrk?_a=BAMAOGUs0",
    "title": "Penguin in Snowfall",
    "category": "Wildlife",
    "description": "Cute penguin enjoying winter"
  },
  {
    "public_id": "A0041_The_Lady_with_a_Hat_Abstract_lsopgv",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--tKggpmQS--/c_limit,w_1200/q_auto/f_auto/A0041_The_Lady_with_a_Hat_Abstract_lsopgv?_a=BAMAOGUs0",
    "title": "Lady with a Hat",
    "category": "Abstract",
    "description": "Abstract portrait of elegant lady"
  },
  {
    "public_id": "A0016_A_Girl_in_a_Rainy_Night_l9qvai",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--i4f8R2sZ--/c_limit,w_1200/q_auto/f_auto/A0016_A_Girl_in_a_Rainy_Night_l9qvai?_a=BAMAOGUs0",
    "title": "Girl in Rainy Night",
    "category": "Figurative",
    "description": "Melancholic beauty of rainy night"
  },
  {
    "public_id": "A0043_Serene_Buddha.heic_nvxg8g",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--RMbp9JFZ--/c_limit,w_1200/q_auto/f_auto/A0043_Serene_Buddha.heic_nvxg8g?_a=BAMAOGUs0",
    "title": "Serene Buddha",
    "category": "Spiritual",
    "description": "Peaceful Buddha meditation"
  },
  {
    "public_id": "A0068_Lady_Watching_Sunset_hkmfjk",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--SrE4b691--/c_limit,w_1200/q_auto/f_auto/A0068_Lady_Watching_Sunset_hkmfjk?_a=BAMAOGUs0",
    "title": "Lady Watching Sunset",
    "category": "Figurative",
    "description": "Silhouette against golden sunset"
  },
  {
    "public_id": "A0044_Krishna_with_Flute_apxkjx",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--TSR0914W--/c_limit,w_1200/q_auto/f_auto/A0044_Krishna_with_Flute_apxkjx?_a=BAMAOGUs0",
    "title": "Krishna with Flute",
    "category": "Spiritual",
    "description": "Divine Krishna playing flute"
  },
  {
    "public_id": "A0069_Lady_Watching_Sunrise_uqkyuo",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--MPOWUVA2--/c_limit,w_1200/q_auto/f_auto/A0069_Lady_Watching_Sunrise_uqkyuo?_a=BAMAOGUs0",
    "title": "Lady Watching Sunrise",
    "category": "Figurative",
    "description": "Peaceful morning meditation"
  },
  {
    "public_id": "A0028_Pink_Water_Lily_aums8g",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--xAm6dhZS--/c_limit,w_1200/q_auto/f_auto/A0028_Pink_Water_Lily_aums8g?_a=BAMAOGUs0",
    "title": "Pink Water Lily",
    "category": "Floral",
    "description": "Delicate pink lily on water"
  },
  {
    "public_id": "A0037_Pink_Tulip_yw8df5",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--KR3TjUB9--/c_limit,w_1200/q_auto/f_auto/A0037_Pink_Tulip_yw8df5?_a=BAMAOGUs0",
    "title": "Pink Tulip",
    "category": "Floral",
    "description": "Beautiful pink tulip flower"
  },
  {
    "public_id": "A0038_Cone_Flower_t8fnje",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--ddM7p8kY--/c_limit,w_1200/q_auto/f_auto/A0038_Cone_Flower_t8fnje?_a=BAMAOGUs0",
    "title": "Cone Flower",
    "category": "Floral",
    "description": "Vibrant cone flower bloom"
  },
  {
    "public_id": "A0039_White_Lily_tohvti",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--qQbRaTHo--/c_limit,w_1200/q_auto/f_auto/A0039_White_Lily_tohvti?_a=BAMAOGUs0",
    "title": "White Lily",
    "category": "Floral",
    "description": "Pure white lily flower"
  },
  {
    "public_id": "A0040_The_Red_Dahlia_puimyq",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--lNXRLV6i--/c_limit,w_1200/q_auto/f_auto/A0040_The_Red_Dahlia_puimyq?_a=BAMAOGUs0",
    "title": "Red Dahlia",
    "category": "Floral",
    "description": "Stunning red dahlia bloom"
  },
  {
    "public_id": "A0041_Zinnia_Floral_Painting_tiemlp",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--ZLnlZrSr--/c_limit,w_1200/q_auto/f_auto/A0041_Zinnia_Floral_Painting_tiemlp?_a=BAMAOGUs0",
    "title": "Zinnia Floral",
    "category": "Floral",
    "description": "Colorful zinnia flowers"
  },
  {
    "public_id": "A0051_The_Spring_Lily_Painting_tjmqey",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--VwHtNajo--/c_limit,w_1200/q_auto/f_auto/A0051_The_Spring_Lily_Painting_tjmqey?_a=BAMAOGUs0",
    "title": "Spring Lily",
    "category": "Floral",
    "description": "Fresh spring lily painting"
  },
  {
    "public_id": "A0050_The_Sunflower_Painting_ec69vd",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--Q_5iu05i--/c_limit,w_1200/q_auto/f_auto/A0050_The_Sunflower_Painting_ec69vd?_a=BAMAOGUs0",
    "title": "Sunflower",
    "category": "Floral",
    "description": "Bright sunflower field"
  },
  {
    "public_id": "A0052_The_Ranunculus_Bouquete_gofc69",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--rf1C1L93--/c_limit,w_1200/q_auto/f_auto/A0052_The_Ranunculus_Bouquete_gofc69?_a=BAMAOGUs0",
    "title": "Ranunculus Bouquet",
    "category": "Floral",
    "description": "Beautiful ranunculus flowers bouquet"
  },
  {
    "public_id": "A0006_Bright_Snowy_Autumn_Landscape_qstoj7",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--3KRMZFnB--/c_limit,w_1200/q_auto/f_auto/A0006_Bright_Snowy_Autumn_Landscape_qstoj7?_a=BAMAOGUs0",
    "title": "Snowy Autumn Landscape",
    "category": "Landscape",
    "description": "Beautiful snowy autumn scene"
  },
  {
    "public_id": "A0008_Wooden_Bridge_in_a_Snowy_Landscape_m2snny",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--k-IcpIvl--/c_limit,w_1200/q_auto/f_auto/A0008_Wooden_Bridge_in_a_Snowy_Landscape_m2snny?_a=BAMAOGUs0",
    "title": "Wooden Bridge",
    "category": "Landscape",
    "description": "Wooden bridge in snowy landscape"
  },
  {
    "public_id": "A0007_Cabin_in_a_Snowy_Landscape_ovfx9h",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--SRS9EUmY--/c_limit,w_1200/q_auto/f_auto/A0007_Cabin_in_a_Snowy_Landscape_ovfx9h?_a=BAMAOGUs0",
    "title": "Snowy Cabin",
    "category": "Landscape",
    "description": "Cozy cabin in winter wonderland"
  },
  {
    "public_id": "A0009_Snowy_Night_Landscape_nn0myi",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--vUOjCpdM--/c_limit,w_1200/q_auto/f_auto/A0009_Snowy_Night_Landscape_nn0myi?_a=BAMAOGUs0",
    "title": "Snowy Night",
    "category": "Landscape",
    "description": "Magical snowy night scene"
  },
  {
    "public_id": "A0010_Log_Bridge_Autumn_Landscape_owgs30",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--Q52v9gul--/c_limit,w_1200/q_auto/f_auto/A0010_Log_Bridge_Autumn_Landscape_owgs30?_a=BAMAOGUs0",
    "title": "Log Bridge Autumn",
    "category": "Landscape",
    "description": "Rustic log bridge in autumn"
  },
  {
    "public_id": "A0011_Full_Moon_Autumn_Landscape_prpnub",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--X_pZOnJW--/c_limit,w_1200/q_auto/f_auto/A0011_Full_Moon_Autumn_Landscape_prpnub?_a=BAMAOGUs0",
    "title": "Full Moon Autumn",
    "category": "Landscape",
    "description": "Full moon over autumn forest"
  },
  {
    "public_id": "A0012_Beautiful_Mountain_Landscape_kvvsxo",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--Hvvbzzd1--/c_limit,w_1200/q_auto/f_auto/A0012_Beautiful_Mountain_Landscape_kvvsxo?_a=BAMAOGUs0",
    "title": "Mountain Landscape",
    "category": "Landscape",
    "description": "Majestic mountain scenery"
  },
  {
    "public_id": "A0013_Beach_Landscape_nt4gcn",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--r5ku7INw--/c_limit,w_1200/q_auto/f_auto/A0013_Beach_Landscape_nt4gcn?_a=BAMAOGUs0",
    "title": "Beach Landscape",
    "category": "Landscape",
    "description": "Peaceful beach scene"
  },
  {
    "public_id": "A0014_Road_along_the_Humongous_Trees_mpojk4",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--kwMqXIp3--/c_limit,w_1200/q_auto/f_auto/A0014_Road_along_the_Humongous_Trees_mpojk4?_a=BAMAOGUs0",
    "title": "Road Through Trees",
    "category": "Landscape",
    "description": "Road lined with giant trees"
  },
  {
    "public_id": "A0015_Thatched_House_Landscape_estxhy",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--oEdzTajP--/c_limit,w_1200/q_auto/f_auto/A0015_Thatched_House_Landscape_estxhy?_a=BAMAOGUs0",
    "title": "Thatched House",
    "category": "Landscape",
    "description": "Rustic thatched house in countryside"
  },
  {
    "public_id": "A0017_Lighthouse_Along_the_Bay_dwkzhe",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--5CTWppkf--/c_limit,w_1200/q_auto/f_auto/A0017_Lighthouse_Along_the_Bay_dwkzhe?_a=BAMAOGUs0",
    "title": "Lighthouse Bay",
    "category": "Landscape",
    "description": "Lighthouse standing tall by the bay"
  },
  {
    "public_id": "A0023_Snowy_Landscape_1_e0rul8",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--9R1AEEnp--/c_limit,w_1200/q_auto/f_auto/A0023_Snowy_Landscape_1_e0rul8?_a=BAMAOGUs0",
    "title": "Snowy Landscape I",
    "category": "Landscape",
    "description": "Beautiful winter scene"
  },
  {
    "public_id": "A0022_Full_Moon_Snowy_Landscape_axd9oj",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--4sAvjkK1--/c_limit,w_1200/q_auto/f_auto/A0022_Full_Moon_Snowy_Landscape_axd9oj?_a=BAMAOGUs0",
    "title": "Full Moon Snowy",
    "category": "Landscape",
    "description": "Full moon illuminating snowy landscape"
  },
  {
    "public_id": "A0024_Snowy_Landscape_2_pfnttq",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--HeWzV2ju--/c_limit,w_1200/q_auto/f_auto/A0024_Snowy_Landscape_2_pfnttq?_a=BAMAOGUs0",
    "title": "Snowy Landscape II",
    "category": "Landscape",
    "description": "Serene winter wonderland"
  },
  {
    "public_id": "A0025_Snowy_Waterfall_Landscape_xpp3dy",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--bZldfgIH--/c_limit,w_1200/q_auto/f_auto/A0025_Snowy_Waterfall_Landscape_xpp3dy?_a=BAMAOGUs0",
    "title": "Snowy Waterfall",
    "category": "Landscape",
    "description": "Frozen waterfall in winter"
  },
  {
    "public_id": "A0026_Snowy_Autumn_Landscape_gi57gn",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--0O7SwP7T--/c_limit,w_1200/q_auto/f_auto/A0026_Snowy_Autumn_Landscape_gi57gn?_a=BAMAOGUs0",
    "title": "Snowy Autumn",
    "category": "Landscape",
    "description": "Autumn meets winter landscape"
  },
  {
    "public_id": "A0027_Snowy_Full_Moon_Autumn_Landscape_xensc4",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--n1OmjWEh--/c_limit,w_1200/q_auto/f_auto/A0027_Snowy_Full_Moon_Autumn_Landscape_xensc4?_a=BAMAOGUs0",
    "title": "Snowy Full Moon Autumn",
    "category": "Landscape",
    "description": "Magical full moon over snowy autumn"
  },
  {
    "public_id": "A0046_An_Abstract_Textured_Painting_rpeel0",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--tj2AWtok--/c_limit,w_1200/q_auto/f_auto/A0046_An_Abstract_Textured_Painting_rpeel0?_a=BAMAOGUs0",
    "title": "Abstract Textured",
    "category": "Abstract",
    "description": "Rich textured abstract art"
  },
  {
    "public_id": "A0045_Golden_Sun_Landscape_a8hzsx",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--Sucg6XYv--/c_limit,w_1200/q_auto/f_auto/A0045_Golden_Sun_Landscape_a8hzsx?_a=BAMAOGUs0",
    "title": "Golden Sun",
    "category": "Landscape",
    "description": "Golden sun illuminating landscape"
  },
  {
    "public_id": "A0055_Frozen_Waterfall_gvbzyn",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--BG8I1TU2--/c_limit,w_1200/q_auto/f_auto/A0055_Frozen_Waterfall_gvbzyn?_a=BAMAOGUs0",
    "title": "Frozen Waterfall",
    "category": "Landscape",
    "description": "Ice waterfall in winter"
  },
  {
    "public_id": "A0047_The_Pyramids_of_Egypt_zh0ceg",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--zhf7cgLt--/c_limit,w_1200/q_auto/f_auto/A0047_The_Pyramids_of_Egypt_zh0ceg?_a=BAMAOGUs0",
    "title": "Pyramids of Egypt",
    "category": "Heritage",
    "description": "Ancient Egyptian pyramids"
  },
  {
    "public_id": "A0056_Forest_Landscape_aqjaxx",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--iBxTfGJA--/c_limit,w_1200/q_auto/f_auto/A0056_Forest_Landscape_aqjaxx?_a=BAMAOGUs0",
    "title": "Forest Landscape",
    "category": "Landscape",
    "description": "Misty forest scene"
  },
  {
    "public_id": "A0057_Antelope_Looking_at_You_zqcsge",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--MXXROuCG--/c_limit,w_1200/q_auto/f_auto/A0057_Antelope_Looking_at_You_zqcsge?_a=BAMAOGUs0",
    "title": "Antelope",
    "category": "Wildlife",
    "description": "Graceful antelope in wild"
  },
  {
    "public_id": "A0058_Autumn_Landscape_jts79a",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--fYEXlQ48--/c_limit,w_1200/q_auto/f_auto/A0058_Autumn_Landscape_jts79a?_a=BAMAOGUs0",
    "title": "Autumn Landscape",
    "category": "Landscape",
    "description": "Golden autumn scenery"
  },
  {
    "public_id": "A0059_Autumn_Orange_Tree_bt2fgn",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--CKanEFKf--/c_limit,w_1200/q_auto/f_auto/A0059_Autumn_Orange_Tree_bt2fgn?_a=BAMAOGUs0",
    "title": "Orange Tree",
    "category": "Landscape",
    "description": "Vibrant orange autumn tree"
  },
  {
    "public_id": "A0060_Autumn_Trees_Lines_ji5umh",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--H3Hlmw5i--/c_limit,w_1200/q_auto/f_auto/A0060_Autumn_Trees_Lines_ji5umh?_a=BAMAOGUs0",
    "title": "Autumn Trees Lines",
    "category": "Landscape",
    "description": "Lines of colorful autumn trees"
  },
  {
    "public_id": "A0062_Lakeview_Landscape_o9v5ai",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--4Y-DU_H6--/c_limit,w_1200/q_auto/f_auto/A0062_Lakeview_Landscape_o9v5ai?_a=BAMAOGUs0",
    "title": "Lakeview",
    "category": "Landscape",
    "description": "Peaceful lake view"
  },
  {
    "public_id": "A0061_Beautiful_Sunset_Landscape_ohuhrv",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--9qUuuYsP--/c_limit,w_1200/q_auto/f_auto/A0061_Beautiful_Sunset_Landscape_ohuhrv?_a=BAMAOGUs0",
    "title": "Beautiful Sunset",
    "category": "Landscape",
    "description": "Stunning sunset colors"
  },
  {
    "public_id": "A0063_Landscape_Sunrise_jccqpz",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--LllaW1Ml--/c_limit,w_1200/q_auto/f_auto/A0063_Landscape_Sunrise_jccqpz?_a=BAMAOGUs0",
    "title": "Landscape Sunrise",
    "category": "Landscape",
    "description": "Morning sunrise over landscape"
  },
  {
    "public_id": "A0064_Snowfall_Landscape_lt0lxx",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--SSd_9rBd--/c_limit,w_1200/q_auto/f_auto/A0064_Snowfall_Landscape_lt0lxx?_a=BAMAOGUs0",
    "title": "Snowfall Landscape",
    "category": "Landscape",
    "description": "Gentle snowfall in forest"
  },
  {
    "public_id": "A0065_Tulips_in_Sunset_oq6hgq",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--QV5bXcMl--/c_limit,w_1200/q_auto/f_auto/A0065_Tulips_in_Sunset_oq6hgq?_a=BAMAOGUs0",
    "title": "Tulips in Sunset",
    "category": "Floral",
    "description": "Tulips glowing in sunset light"
  },
  {
    "public_id": "A0071_Northern_Lights_htyprc",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--alaNJkFR--/c_limit,w_1200/q_auto/f_auto/A0071_Northern_Lights_htyprc?_a=BAMAOGUs0",
    "title": "Northern Lights",
    "category": "Landscape",
    "description": "Aurora borealis magic"
  },
  {
    "public_id": "A0073_Snowy_Sunset_Landscape_h9q39x",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--o2d20X8S--/c_limit,w_1200/q_auto/f_auto/A0073_Snowy_Sunset_Landscape_h9q39x?_a=BAMAOGUs0",
    "title": "Snowy Sunset",
    "category": "Landscape",
    "description": "Sunset over snowy landscape"
  },
  {
    "public_id": "A0072_Snowy_Landscape_3_zyx70i",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--6uCAHwV5--/c_limit,w_1200/q_auto/f_auto/A0072_Snowy_Landscape_3_zyx70i?_a=BAMAOGUs0",
    "title": "Snowy Landscape III",
    "category": "Landscape",
    "description": "Winter wonderland scene"
  },
  {
    "public_id": "A0067_Christmas_Ornaments_mqaosc",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--cHgU53zT--/c_limit,w_1200/q_auto/f_auto/A0067_Christmas_Ornaments_mqaosc?_a=BAMAOGUs0",
    "title": "Christmas Ornaments",
    "category": "Still Life",
    "description": "Festive Christmas decorations"
  },
  {
    "public_id": "A0048_The_Tree_Lined_Street_Painting_tmnzwt",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--Yg0hdeFJ--/c_limit,w_1200/q_auto/f_auto/A0048_The_Tree_Lined_Street_Painting_tmnzwt?_a=BAMAOGUs0",
    "title": "Tree Lined Street",
    "category": "Urban",
    "description": "Beautiful tree-lined pathway"
  },
  {
    "public_id": "A0049_The_Tree_Perspective_Painting_p0xwls",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--Uo-9V5Gf--/c_limit,w_1200/q_auto/f_auto/A0049_The_Tree_Perspective_Painting_p0xwls?_a=BAMAOGUs0",
    "title": "Tree Perspective",
    "category": "Urban",
    "description": "Perspective view of trees"
  },
  {
    "public_id": "A0029_The_Strawberry_wiuoic",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--om5IXElk--/c_limit,w_1200/q_auto/f_auto/A0029_The_Strawberry_wiuoic?_a=BAMAOGUs0",
    "title": "Strawberry",
    "category": "Still Life",
    "description": "Juicy red strawberry"
  },
  {
    "public_id": "A0030_The_Donut_nrdkab",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--RR-XRqaY--/c_limit,w_1200/q_auto/f_auto/A0030_The_Donut_nrdkab?_a=BAMAOGUs0",
    "title": "Donut",
    "category": "Still Life",
    "description": "Delicious glazed donut"
  },
  {
    "public_id": "A0032_The_Pretzel_gijzya",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--8pufNsfS--/c_limit,w_1200/q_auto/f_auto/A0032_The_Pretzel_gijzya?_a=BAMAOGUs0",
    "title": "Pretzel",
    "category": "Still Life",
    "description": "Golden brown pretzel"
  },
  {
    "public_id": "A0034_The_Coffee_Cup_ygfekk",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--_GvlYSEP--/c_limit,w_1200/q_auto/f_auto/A0034_The_Coffee_Cup_ygfekk?_a=BAMAOGUs0",
    "title": "Coffee Cup",
    "category": "Still Life",
    "description": "Warm coffee in ceramic cup"
  },
  {
    "public_id": "A0035_The_Sliced_Oranges_ktbump",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--kJZmL63k--/c_limit,w_1200/q_auto/f_auto/A0035_The_Sliced_Oranges_ktbump?_a=BAMAOGUs0",
    "title": "Sliced Oranges",
    "category": "Still Life",
    "description": "Fresh orange slices"
  },
  {
    "public_id": "A0033_The_Popsicle_kncdbb",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--dMND4iZY--/c_limit,w_1200/q_auto/f_auto/A0033_The_Popsicle_kncdbb?_a=BAMAOGUs0",
    "title": "Popsicle",
    "category": "Still Life",
    "description": "Colorful frozen treat"
  },
  {
    "public_id": "A0031_The_Fortune_Cookie_agybql",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--hRZDtcJ6--/c_limit,w_1200/q_auto/f_auto/A0031_The_Fortune_Cookie_agybql?_a=BAMAOGUs0",
    "title": "Fortune Cookie",
    "category": "Still Life",
    "description": "Fortune cookie with message"
  },
  {
    "public_id": "A0036_The_High_Heels_f59rkl",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--pwCHYbXL--/c_limit,w_1200/q_auto/f_auto/A0036_The_High_Heels_f59rkl?_a=BAMAOGUs0",
    "title": "High Heels",
    "category": "Fashion",
    "description": "Elegant high heel shoes"
  },
  {
    "public_id": "A0053_Vibrant_Tree_Painting_1_papeds",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--BP1HFUdl--/c_limit,w_1200/q_auto/f_auto/A0053_Vibrant_Tree_Painting_1_papeds?_a=BAMAOGUs0",
    "title": "Vibrant Tree I",
    "category": "Abstract",
    "description": "Colorful vibrant tree art"
  },
  {
    "public_id": "A0054_Vibrant_Tree_Painting_2_tuqxy5",
    "url": "https://res.cloudinary.com/dllpxron7/image/upload/s--azkOryhN--/c_limit,w_1200/q_auto/f_auto/A0054_Vibrant_Tree_Painting_2_tuqxy5?_a=BAMAOGUs0",
    "title": "Vibrant Tree II",
    "category": "Abstract",
    "description": "Abstract vibrant tree artwork"
  }
];

// Ek baar fetch karo, cache karo
export const fetchImages = async () => {
  try {
    // Pehle cache check karo
    localStorage.setItem(CACHE_KEY, null);
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const { data, timestamp } = JSON.parse(cached);
      if (Date.now() - timestamp < CACHE_DURATION) {
        console.log('✅ Using cached images');
        return data;
      }
    }

    // Cache mein save karo
    localStorage.setItem(CACHE_KEY, JSON.stringify({
      data: IMAGES,
      timestamp: Date.now()
    }));
    
    console.log('✅ Images loaded and cached');
    return IMAGES;
  } catch (error) {
    console.error('Error fetching images:', error);
    return IMAGES;
  }
};

// Categories get karo
export const getCategories = (images) => {
  const categories = ['All', ...new Set(images.map(img => img.category))];
  return categories;
};