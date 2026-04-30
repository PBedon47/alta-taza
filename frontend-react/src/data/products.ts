const products = [

/* =========================
   CAFÉS CALIENTES
========================= */

{
  id: 1,
  nombre: "Espresso",
  precio: 9,
  categoria: "Cafés calientes",
  imagen: "https://www.sharmispassions.com/wp-content/uploads/2012/07/espresso-coffee-recipe04-500x375.jpg?w=400&auto=format&fit=crop"
},

{
  id: 2,
  nombre: "Americano",
  precio: 10,
  categoria: "Cafés calientes",
  imagen: "https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=400&auto=format&fit=crop"
},

{
  id: 3,
  nombre: "Capuccino",
  precio: 12,
  categoria: "Cafés calientes",
  imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW8xHOZA9fxl5Sc0JxaRcRFNbKQVJBhEGfug&s?w=400&auto=format&fit=crop"
},

{
  id: 4,
  nombre: "Café Latte",
  precio: 11,
  categoria: "Cafés calientes",
  imagen: "https://www.cuisinart.com/dw/image/v2/ABAF_PRD/on/demandware.static/-/Sites-us-cuisinart-sfra-Library/default/dw42dcae51/images/recipe-Images/cafe-latte1-recipe_resized.jpg?sw=1200&sh=630&w=400&auto=format&fit=crop"
},

{
  id: 5,
  nombre: "Mocha",
  precio: 15,
  categoria: "Cafés calientes",
  imagen: "https://hoxtoncoffee.com/cdn/shop/articles/latte-art-on-mocha_1200x1200.jpg?v=1660069726&w=400&auto=format&fit=crop"
},

{
  id: 6,
  nombre: "Flat White",
  precio: 16,
  categoria: "Cafés calientes",
  imagen: "https://hoxtoncoffee.com/cdn/shop/articles/latte-art-on-mocha_1200x1200.jpg?v=1660069726&w=400&auto=format&fit=crop"
},

{
  id: 7,
  nombre: "Macchiato",
  precio: 13,
  categoria: "Cafés calientes",
  imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Macchiato_%287199366530%29.jpg/250px-Macchiato_%287199366530%29.jpg?w=400&auto=format&fit=crop"
},

{
  id: 8,
  nombre: "Chocolate caliente",
  precio: 14,
  categoria: "Cafés calientes",
  imagen: "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?w=400&auto=format&fit=crop"
},

{
  id: 9,
  nombre: "Chai Latte",
  precio: 15,
  categoria: "Cafés calientes",
  imagen: "https://bakingmischief.com/wp-content/uploads/2022/10/dirty-chai-latte-image-square.jpg?w=400&auto=format&fit=crop"
},

{
  id: 10,
  nombre: "Matcha Latte",
  precio: 17,
  categoria: "Cafés calientes",
  imagen: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400&auto=format&fit=crop"
},

/* =========================
   CAFÉS FRÍOS
========================= */

{
  id: 11,
  nombre: "Cold Brew",
  precio: 15,
  categoria: "Cafés fríos",
  imagen: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&auto=format&fit=crop"
},

{
  id: 12,
  nombre: "Iced Latte",
  precio: 16,
  categoria: "Cafés fríos",
  imagen: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&auto=format&fit=crop"
},

{
  id: 13,
  nombre: "Frappé",
  precio: 18,
  categoria: "Cafés fríos",
  imagen: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&auto=format&fit=crop"
},

{
  id: 14,
  nombre: "Affogato",
  precio: 17,
  categoria: "Cafés fríos",
  imagen: "https://apasionadosporelcafe.com/wp-content/uploads/2016/11/bg-thummail-affogato.png"
},

{
  id: 15,
  nombre: "Mocha Helado",
  precio: 19,
  categoria: "Cafés fríos",
  imagen: "https://thumbs.dreamstime.com/b/caf%C3%A9-mocha-helado-en-vidrio-sobre-la-mesa-de-chocolate-con-paja-182908078.jpg?w=400&auto=format&fit=crop"
},

{
  id: 16,
  nombre: "Caramel Frappuccino",
  precio: 20,
  categoria: "Cafés fríos",
  imagen: "https://copykat.com/wp-content/uploads/2021/10/Starbucks-Caramel-Frappuccino-Pin-3-768x1152.jpg?w=400&auto=format&fit=crop"
},

{
  id: 17,
  nombre: "Iced Matcha",
  precio: 18,
  categoria: "Cafés fríos",
  imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqcidksiLXdDigwsERb0Gpe1ExLt1OFpEX8w&s?w=400&auto=format&fit=crop"
},

{
  id: 18,
  nombre: "Cold Vanilla Coffee",
  precio: 17,
  categoria: "Cafés fríos",
  imagen: "https://www.organizedisland.com/wp-content/uploads/2023/08/Easy-Vanilla-Latte-Recipe-Starbucks-Coffee-Copycat.jpg?w=400&auto=format&fit=crop"
},

{
  id: 19,
  nombre: "Cold Caramel Latte",
  precio: 18,
  categoria: "Cafés fríos",
  imagen: "https://bakingmischief.com/wp-content/uploads/2022/03/iced-caramel-latte-image-feature.jpg?w=400&auto=format&fit=crop"
},

{
  id: 20,
  nombre: "Iced Americano",
  precio: 15,
  categoria: "Cafés fríos",
  imagen: "https://peakflavorcoffee.com/cdn/shop/articles/Americano_Coffee_by_Peak_Flavor_43759ea7-cadf-4074-881a-974505f4ab7f.jpg?v=1747686944&w=400&auto=format&fit=crop"
},

/* =========================
   TÉS
========================= */

{
  id: 21,
  nombre: "Té verde",
  precio: 10,
  categoria: "Tés",
  imagen: "https://media.admagazine.com/photos/618a6151be961b98e9f0991c/master/w_1600%2Cc_limit/85139.jpg?w=400&auto=format&fit=crop"
},

{
  id: 22,
  nombre: "Té negro",
  precio: 10,
  categoria: "Tés",
  imagen: "https://www.alveus.eu/wp-content/uploads/020-a.jpg?w=400&auto=format&fit=crop"
},

{
  id: 23,
  nombre: "Té de Manzanilla",
  precio: 10,
  categoria: "Tés",
  imagen: "https://www.clikisalud.net/wp-content/uploads/2020/05/te-de-manzanilla-cuarente-a.jpg?w=400&auto=format&fit=crop"
},

{
  id: 24,
  nombre: "Té frutos rojos",
  precio: 12,
  categoria: "Tés",
  imagen: "https://content.clara.es/medio/2023/07/30/infusion-frutos-rojos_832b30a1_230730210829_800x554.jpg?w=400&auto=format&fit=crop"
},

{
  id: 25,
  nombre: "Té de menta",
  precio: 11,
  categoria: "Tés",
  imagen: "https://www.occident.com/blog/assets/multimedia/2025/03/beneficios-del-te-de-menta_banner.webp?w=400&auto=format&fit=crop"
},

{
  id: 26,
  nombre: "Té chai",
  precio: 13,
  categoria: "Tés",
  imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZlkl1QORp2CoGDK27i26iLR2lS7BkiZDZjA&s?w=400&auto=format&fit=crop"
},

{
  id: 27,
  nombre: "Matcha Tea",
  precio: 14,
  categoria: "Tés",
  imagen: "https://www.matchamaiden.com/wp-content/uploads/2020/03/Japanese-Matcha-Green-Tea.jpg?w=400&auto=format&fit=crop"
},

{
  id: 28,
  nombre: "Té tropical",
  precio: 13,
  categoria: "Tés",
  imagen: "https://tetique.com/cdn/shop/articles/1_Te_Tropical.jpg?v=1683294277&w=400&auto=format&fit=crop"
},

{
  id: 29,
  nombre: "Té helado de limón",
  precio: 12,
  categoria: "Tés",
  imagen: "https://thumbs.dreamstime.com/b/t%C3%A9-helado-verde-con-lim%C3%B3n-y-menta-fresco-en-un-vaso-lonchas-de-cubos-hielo-aderezados-se-colocan-dos-mitades-ambos-lados-del-382721157.jpg?w=400&auto=format&fit=crop"
},

{
  id: 30,
  nombre: "Té de durazno",
  precio: 13,
  categoria: "Tés",
  imagen: "https://cloudfront-us-east-1.images.arcpublishing.com/semana/S5ANUOTANVGL5KTRFMKMJCYO2I.png?w=400&auto=format&fit=crop"
},

/* =========================
   BEBIDAS
========================= */

{
  id: 31,
  nombre: "Limonada frozen",
  precio: 14,
  categoria: "Bebidas",
  imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS18KDUNIReGsBgt7ITMiDEGhf2bOiXm2Q8kA&s?w=400&auto=format&fit=crop"
},

{
  id: 32,
  nombre: "Limonada clásica",
  precio: 12,
  categoria: "Bebidas",
  imagen: "https://carta.ginos.es/productos/detalle/454053.png?w=400&auto=format&fit=crop"
},

{
  id: 33,
  nombre: "Jugo naranja",
  precio: 13,
  categoria: "Bebidas",
  imagen: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&auto=format&fit=crop"
},

{
  id: 34,
  nombre: "Smoothie fresa",
  precio: 18,
  categoria: "Bebidas",
  imagen: "https://mandolina.co/wp-content/uploads/2023/06/smoothie-de-fresa-1200x720.png?w=400&auto=format&fit=crop"
},

{
  id: 35,
  nombre: "Smoothie mango",
  precio: 18,
  categoria: "Bebidas",
  imagen: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400&auto=format&fit=crop"
},

{
  id: 36,
  nombre: "Jugo detox",
  precio: 15,
  categoria: "Bebidas",
  imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEqKMd1ajBX0xsBRo0V0cN6VTdwTqgoWdH_g&s?w=400&auto=format&fit=crop"
},

{
  id: 37,
  nombre: "Milkshake chocolate",
  precio: 19,
  categoria: "Bebidas",
  imagen: "https://imag.bonviveur.com/decorando-el-milkshake-de-chocolate-con-el-sirope.jpg?w=400&auto=format&fit=crop"
},

{
  id: 38,
  nombre: "Milkshake vainilla",
  precio: 19,
  categoria: "Bebidas",
  imagen: "https://i.pinimg.com/736x/a0/71/1f/a0711f519ffc6c75f94b5b5a62429c72.jpg?w=400&auto=format&fit=crop"
},

{
  id: 39,
  nombre: "Frozen maracuyá",
  precio: 16,
  categoria: "Bebidas",
  imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHhE8nnc93p1jVBpiwZ-tkBUSnvtH9ErDg8g&s?w=400&auto=format&fit=crop"
},

{
  id: 40,
  nombre: "Agua mineral",
  precio: 4,
  categoria: "Bebidas",
  imagen: "https://www.ajegroup.com/aje-assets/wp-content/uploads/2020/05/14131601/cielo-cr.png?w=400&auto=format&fit=crop"
},

{
  id: 41,
  nombre: "Coca Cola",
  precio: 6,
  categoria: "Bebidas",
  imagen: "https://thumbs.dreamstime.com/b/bangkok-thailand-august-can-glass-coca-cola-ice-wood-table-coca-carbonated-soft-drink-sold-stores-332253092.jpg?w=400&auto=format&fit=crop"
},

{
  id: 42,
  nombre: "Inka Kola",
  precio: 6,
  categoria: "Bebidas",
  imagen: "https://146114630.cdn6.editmysite.com/uploads/1/4/6/1/146114630/Z6PYS7P2FVPRQBWJML5XI6FC.jpeg?w=400&auto=format&fit=crop"
},

{
  id: 43,
  nombre: "Pepsi",
  precio: 5,
  categoria: "Bebidas",
  imagen: "https://thumbs.dreamstime.com/b/pepsi-60265355.jpg?w=400&auto=format&fit=crop"
},

{
  id: 44,
  nombre: "Sprite",
  precio: 5,
  categoria: "Bebidas",
  imagen: "https://st4.depositphotos.com/36668420/39056/i/450/depositphotos_390569186-stock-photo-glass-sprite-soda-water-ice.jpg?w=400&auto=format&fit=crop"
},

{
  id: 45,
  nombre: "Fanta",
  precio: 5,
  categoria: "Bebidas",
  imagen: "https://previews.123rf.com/images/claudiocaridi/claudiocaridi2011/claudiocaridi201100099/159625932-can-and-glass-of-fanta-soda-with-ice-and-water-droplets.jpg?w=400&auto=format&fit=crop"
},

/* =========================
   POSTRES
========================= */

{
  id: 46,
  nombre: "Cheesecake fresa",
  precio: 16,
  categoria: "Postres",
  imagen: "https://www.splenda.com/wp-content/themes/bistrotheme/assets/recipe-images/strawberry-topped-cheesecake.jpg?w=400&auto=format&fit=crop"
},

{
  id: 47,
  nombre: "Brownie artesanal",
  precio: 11,
  categoria: "Postres",
  imagen: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop"
},

{
  id: 48,
  nombre: "Torta chocolate",
  precio: 18,
  categoria: "Postres",
  imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRkxldqqumKB5pi8Ctz_dnGjMEWXKln7vIfQ&s?w=400&auto=format&fit=crop"
},

{
  id: 49,
  nombre: "Pie limón",
  precio: 15,
  categoria: "Postres",
  imagen: "https://apapachocafeteria.com/wp-content/uploads/2025/07/pie_limon-700x700.jpg?w=400&auto=format&fit=crop"
},

{
  id: 50,
  nombre: "Croissant",
  precio: 12,
  categoria: "Postres",
  imagen: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&auto=format&fit=crop"
},

{
  id: 51,
  nombre: "Muffin arándanos",
  precio: 13,
  categoria: "Postres",
  imagen: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&auto=format&fit=crop"
},

{
  id: 52,
  nombre: "Roll canela",
  precio: 14,
  categoria: "Postres",
  imagen: "https://www.papajohns.com.pe/media/catalog/product/s/o/sol_6710_2.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg&w=400&auto=format&fit=crop"
},

{
  id: 53,
  nombre: "Donut glaseada",
  precio: 10,
  categoria: "Postres",
  imagen: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&auto=format&fit=crop"
},

{
  id: 54,
  nombre: "Tarta frutos rojos",
  precio: 17,
  categoria: "Postres",
  imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRthffBbf57ectpxEo91eu6SHPJBl9ONNrZWg&s?w=400&auto=format&fit=crop"
},

{
  id: 55,
  nombre: "Cookie artesanal",
  precio: 9,
  categoria: "Postres",
  imagen: "https://yeyfood.com/wp-content/uploads/2025/02/WEB1clsoe_up_of_chocolate_chip_cookies._stacked_on_whi_07bc1482-455e-4c1a-969c-b0c7eaad50e1_3-720x720.jpg?w=400&auto=format&fit=crop"
},

/* =========================
   BRUNCH
========================= */

{
  id: 56,
  nombre: "Croissant mixto",
  precio: 16,
  categoria: "Brunch",
  imagen: "https://tofuu.getjusto.com/orioneat-local/resized2/ZB9cENTTrpD8LuBao-2400-x.webp?w=400&auto=format&fit=crop"
},

{
  id: 57,
  nombre: "Panini de pollo",
  precio: 18,
  categoria: "Brunch",
  imagen: "https://www.recetasnestle.com.ec/sites/default/files/styles/cropped_recipe_card_new/public/srh_recipes/3ae0c6c6b4a5bcda6ced9c5b92caac72.jpg.webp?itok=Usg3T7Ga&w=400&auto=format&fit=crop"
},

{
  id: 58,
  nombre: "Avocado toast",
  precio: 20,
  categoria: "Brunch",
  imagen: "https://cleananddelicious.com/wp-content/uploads/2025/01/avocado-toast.jpg?w=400&auto=format&fit=crop"
},

{
  id: 59,
  nombre: "Sándwich caprese",
  precio: 17,
  categoria: "Brunch",
  imagen: "https://7diasdesabor.com/wp-content/uploads/2024/09/WEB-PLATO-1.jpg?w=400&auto=format&fit=crop"
},

{
  id: 60,
  nombre: "Waffles de frutas",
  precio: 19,
  categoria: "Brunch",
  imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe9raytnum2p-PojeiRtqygIIjfkxga7Fsqg&s?w=400&auto=format&fit=crop"
},

{
  id: 61,
  nombre: "Bagel jamón queso",
  precio: 15,
  categoria: "Brunch",
  imagen: "https://thumbs.dreamstime.com/b/bagel-con-jam%C3%B3n-queso-y-hoja-de-lechuga-en-un-plato-vaso-t%C3%A9-afrutado-436458129.jpg?w=400&auto=format&fit=crop"
},

{
  id: 62,
  nombre: "Huevos benedictinos",
  precio: 22,
  categoria: "Brunch",
  imagen: "https://www.cocinadelirante.com/800x600/filters:format(webp):quality(75)/sites/default/files/images/2023/05/huevos-benedictinos-perfectos.jpg?w=400&auto=format&fit=crop"
},

{
  id: 63,
  nombre: "Toast salmón",
  precio: 24,
  categoria: "Brunch",
  imagen: "https://www.seriouseats.com/thmb/4TmxBJdyqSrOM0PHQrb479SeeaY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__05__20160502-avocado-toast-vicky-wasik-salmon-8-a7a4152ebdf3456a9df61ee9dd1179d6.jpg?w=400&auto=format&fit=crop"
},

{
  id: 64,
  nombre: "Wrap pollo",
  precio: 18,
  categoria: "Brunch",
  imagen: "https://resuelveconbimbo-com-v2-assets.s3.amazonaws.com/s3fs-public/2024-04/Banner%20Desktop_Wrap%20de%20Pollo.png?VersionId=l57hP4yJ9AzFsSXLDrOukYO_Sxt9IYVB&w=400&auto=format&fit=crop"
},

{
  id: 65,
  nombre: "Hamburguesa artesanal",
  precio: 23,
  categoria: "Brunch",
  imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&auto=format&fit=crop"
}

];

export default products;