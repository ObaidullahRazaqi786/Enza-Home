// ------------------LOADING PAGE-----------------------//

document.addEventListener('DOMContentLoaded', function () {
  const preloader = document.querySelector('.loading_container');
  
  setTimeout(() => {
      if (preloader) {
        preloader.style.display = 'none';
      }
  }, 2500);
});


// ---------------SHOW DESCRIPTION-------------------//

////////description1
const showButton1 = document.querySelector('.show-description1');
const descriptionBox1 = document.querySelector('.description1');

showButton1.addEventListener('click', function() {
  toggleVisibility(descriptionBox1, showButton1);
});

descriptionBox1.addEventListener('click', function() {
  toggleVisibility(descriptionBox1, showButton1);
});

////////description2
const showButton2 = document.querySelector('.show-description2');
const descriptionBox2 = document.querySelector('.description2');

showButton2.addEventListener('click', function() {
  toggleVisibility(descriptionBox2, showButton2);
});

descriptionBox2.addEventListener('click', function() {
  toggleVisibility(descriptionBox2, showButton2);
});

////////description3
const showButton3 = document.querySelector('.show-description3');
const descriptionBox3 = document.querySelector('.description3');

showButton3.addEventListener('click', function() {
  toggleVisibility(descriptionBox3, showButton3);
});

descriptionBox3.addEventListener('click', function() {
  toggleVisibility(descriptionBox3, showButton3);
});

////////description4
const showButton4 = document.querySelector('.btn3');
const descriptionBox4 = document.querySelector('.description4');

showButton4.addEventListener('click', function() {
  toggleVisibility(descriptionBox4, showButton4);
});

descriptionBox4.addEventListener('click', function() {
  toggleVisibility(descriptionBox4, showButton4);
});

////////description5
const showButton5 = document.querySelector('.btn4');
const descriptionBox5 = document.querySelector('.description5');

showButton5.addEventListener('click', function() {
  toggleVisibility(descriptionBox5, showButton5);
});

descriptionBox5.addEventListener('click', function() {
  toggleVisibility(descriptionBox5, showButton5);
});


function toggleVisibility(descriptionBox, button) {
  if (descriptionBox.style.visibility === 'hidden') {
    descriptionBox.style.visibility = 'visible';
  } else {
    descriptionBox.style.visibility = 'hidden';
  }
}



///////////////////////// Theme change ///////////////////////////

const toggle = document.getElementById('toogle-dark');
const body = document.querySelector('body, .box2-btn-div, .box2, .footer');

toggle.addEventListener('click', function() {
  this.classList.toggle('bi-moon');
  
  if (this.classList.contains("bi-moon")) {
    body.style.background = 'white';
    body.style.color = "gray";
    body.style.transition = '2.5s';
  } else {
    body.style.background = 'black';
    body.style.color = "gray";
    body.style.transition = '2.5s';
  }
});

// //////////////////////scroll button/////////////////////////////////////

document.addEventListener("DOMContentLoaded", function() {
  const upButton = document.getElementById("upButton");

  upButton.addEventListener("click", function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});


///////////////////////// FILTER DIVES//////////////////////////////////////

function filterItems(category) {
  const cards = document.querySelectorAll('.container');

  /////Add and Remove active class from filter buttons/////

  document.querySelectorAll('.box2-buttons').forEach(btn => {
    btn.classList.remove('active');
  });

  event.target.classList.add('active');

  cards.forEach(card => {
    if (category === 'all') {
      card.style.display = 'flex';
    } else {
      if (card.classList.contains(category)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    }
  });
}
document.getElementById("paragraph11").classList.add("active");


/////////change language///////////

const languages = {
  english: {
      paragraphs: {
          paragraph1: "The materials, colors, design and all other features of Enza furniture are young, dynamic and modern.",
          paragraph2: "Enza Home is a concept brand offered by Yataş to create new lifestyles. Enza Home shapes life with its products brings different lifestyles to your home.",
          paragraph3: "Show Description",
          paragraph4: "Enza Home is a concept brand offered by Yataş to create new lifestyles. Enza Home shapes life with its products ranging from dining rooms to bedrooms furniture, mattresses, textiles and accessories, and brings different lifestyles to your home with its modern and innovative approach.   Alternatives for various tastes and living solutions that offer comfort in its most natural state meet  design within reach at Enza Home, making a difference.  Enza Home products have the strength of Yataş Group's years of expertise that enables to meet all   expectations of comfort and quality, durability and elegance, affordability and good design.  Enza Home gives first priority to customer satisfaction with its wide service and maintenance network that   extends all over Turkey, and offers much more than furniture to its customers — it offers a lifestyle. EnzaHome invites you to meet brand new worlds at its global network of concept stores.",
          paragraph5: "You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are only In EnzaHome. We Also Have best Discount For our Clients.",
          paragraph6:"Show Description",
          paragraph7:"You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are only In EnzaHome. We Also Have best Discount For our Clients. Get the style you want at a price you'll love. Quality furniture, budget-friendly prices. Big savings on stylish furniture for every room. Luxury looks without the luxury price tag. ",
          paragraph8: "We offer nearly 2000 rich and diverse choices: furniture, accessories, mattresses, storage beds and  headboards, colorful home textile products as well as pillows and quilts.  We serve our customers with a total of 247 domestic and international Enza Home stores.  Furniture, matresses and home textile are all under one roof. Yataş Bedding World is also at Enza Home with  professional Yataş beds offering non-compromised quality for years, home textile products adding elegance to  your bedroom decoration and box spring varieties serving as an alternative to the bed frame you choose.",
          paragraph9: "We offer nearly 2000 rich and diverse choices: furniture, accessories, mattresses, colorful home textile products as well as pillows and quilts.",
          paragraph10:"Show Description",
          paragraph11:"All",
          paragraph12:"chair",
          paragraph13:"bed",
          paragraph14:"Sofa",
          paragraph15:"This Tufted Chair Is Avalible in Grey , white , Navy , and Black",
          paragraph16: "Price : 1,392 Somoni",
          paragraph17: "The squared shape and channel-tufted upholstery are unmistakably mid-century, while soft velvet and  shiny metal legs bring contemporary elegance. This piece is a stunning style statement for glam, modern and mid-century rooms.",
          paragraph18: "Price : 1,750 Somoni",
          paragraph19: "Kick up your feet and relax with this distinctive living room chair and ottoman combination. Both  pieces feature a swooping shape that pleases the eye and cradles the body.",
          paragraph20: "Price : 2,200 Somoni",
          paragraph21: "The gorgeous Reader armchair by Tor Hadsund draws inspiration from traditional Danish furniture construction for truly timeless appeal. This piece features a graciously curved backrest made from gently curved veneers, situated low and stable on a base of solid oak.",
          paragraph22: "Price : 1,000 Somoni",
          paragraph23: "Modern LED Light Headboard Bed Platform bed frame uses RGB light bars, its located under the wooden  frames on both sides of the bed, it includes 16 colors of LED lights,10 brightness adjustments and 4  lighting patterns.",
          paragraph24: "Price : 10,500 Somoni",
          paragraph25: "Introducing our tufted king size soft upholstered platform bed, where contemporary luxury meets comfort  and style. Featuring striking rolled headboard and footboard design with stylish buttoned detailing,  this sleigh bed effortlessly blends with any bedroom decor.",
          paragraph26: "Price : 15,000 Somoni",
          paragraph27: "Pull in romantic styling to soften your bedroom with this SAFAVIEH Theron bed. An arched design gives  this upholstered bed a beautiful profile, and the navy blue velvet upholstery offers bold contrast  against light-colored walls.",
          paragraph28: "Price : 6,000 Somoni",
          paragraph29: "Upholstered in foam-filled polyester for an inviting feel, the elegant headboard adds a touch of  visual texture, giving any room a spark of style that's both modern and timeless. The bed frame is made  of solid plywood and metal, providing a dense and strong support for up to 600 pounds.",
          paragraph30: "Price : 8,500 Somoni",
          paragraph31: "A meticulously-designed living space deserves a deluxe seating arrangement to match. and This  product will ship to you in multiple boxes.",
          paragraph32: "Price : 12,500 Somoni",
          paragraph33: "With its back and upholstery, this Mid-Century modern tufted fabric sectional chaise adds a cozy element to your living room. It is constructed from an engineered frame and has slightly tapered feet.",
          paragraph34: "Price : 10,750 Somoni",
          paragraph35: "Upgrade your living room with this modern and stylish Velvet Sectional Sofa. High-quality solid wood frame ensures durability and sturdiness.",
          paragraph36: "Price : 9,999 Somoni",
          paragraph37: "This modern sofa creats a fashion look and provides a comfortable area in your living room. Multiple Combinations: each part is independently designed, and its position and function can be changed at will.",
          paragraph37a: "Price : 13,500 Somoni",
          paragraph38: "experiences",
          paragraph39: "You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials",
          paragraph40 : "More Info",
          paragraph41 : "Materials",
          paragraph42 : "Because Enza Home was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price",
          paragraph43 : "More Info",
          paragraph44 : "The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.",
          paragraph45 : "Services",
          paragraph46 : "International Requests",
          paragraph47 : "Sales Points",
          paragraph48 : "Branding",
          paragraph49 : "Furniture",
          paragraph50 : "Beds",
          paragraph51 : "Chair",
          paragraph52 : "All",
          paragraph53 : "Follow Us",
          paragraph57 : "Copyright © 2024",
          paragraph58 : "Terms & Conditions",
          paragraph59 : "Privacy Policy",
          paragraph60 : "Alternatives for various tastes and living solutions that offer comfort in its most natural state meet design within reach at Enza Home, making a difference. Enza Home products have the strength of Yataş Group's years of expertise that enables to meet all expectations of comfort and quality, durability and elegance, affordability and good design Enza Home gives first priority to customer satisfaction with its wide service and maintenance network that extends all over Turkey, and offers much more than furniture to its customers — it offers a lifestyle. Enza Home invites you to meet brand new worlds at its global network of concept stores.",
          paragraph61: " At EnzaHome, we believe that the essence of every remarkable piece of furniture lies in the materials used to create it. Our commitment to excellence drives us to meticulously select the finest materials, ensuring each piece embodies durability, elegance, and sustainability.  Wood is the cornerstone of our craft, symbolizing warmth, sophistication, and timeless beauty. We meticulously source our wood from sustainable forests, prioritizing quality and environmental responsibility. From the rich grains of oak to the luxurious texture of walnut, each piece celebrates the natural allure of wood, promising longevity and enduring charm.  At EnzaHome, our passion for exceptional craftsmanship extends beyond the finished product. With a heritage of artisanal expertise, our skilled craftsmen imbue each piece with meticulous attention to detail and unparalleled dedication. From the initial concept to the final touches, our commitment to excellence shines through in every aspect of our furniture, promising heirloom-quality pieces that transcend trends and endure the test of time.",
          paragraph62: "All Catagory",
          paragraph63: "Chair",
          paragraph64: "Beds",
          paragraph65: "Sofa",
          paragraph66: "Shop",
          paragraph67: "Contact",
          paragraph68: "Information",
          paragraph69: "Furniture",
          paragraph70: "Furniture",
          paragraph71: "shop",
          paragraph72: "Contact",
          paragraph73: "Information",
          paragraph74: "Yataş America",
          paragraph75: "Western Europe",
          paragraph76: "Central and Eastern Europe, Georgia, Azerbaijan",
          paragraph77: "Middle East",
          paragraph78: "Wholesales & Private Label (OEM)",
          paragraph79: "CIS, Asia & Pasific",
          paragraph80: "Africa",
        },

      headings: {
          heading1: "EnzaHome Turkish compony Tajikistan Brunch",
          heading2: "Why Choosing Us",
          heading3: "Luxury facilities",
          heading4: "Luxury Facilities",
          heading5: "Affordable Price",
          heading6: "Affordable Price",
          heading7: "THOUSANDS OF CHOICES",
          heading8: "Many Choices",
          heading9: "Best Selling Product",
          heading10: "Large Tufted Living Room Chair",
          heading11: "Channel Tufted Velvet Living Room Chair",
          heading12: "Curved Living Room Chair With Ottoman",
          heading13: "Rattan Hanging Living Room Chair",
          heading14: "Upholstered Faux Leather Platform Bed with LED Light Bed Frame",
          heading15: "Tufted King Size Soft Upholstered Platform Bed.",
          heading16: "SAFAVIEH Theron Navy Bed",
          heading17: "Tufted Upholstered and Metal Accented Platform Bed ",
          heading18: "Delilah Mid Century Modern U-Shaped Sectional Sofa ",
          heading19: "Two Piece Upholstered Tufted L Shaped Sectional. ",
          heading20: "Velvet Sectional Sofa Reversible Modular Couch.",
          heading21: "L-Shaped Linen Sectional Sofa Modular Cushion Back Couch Sofa for Livingroom",
          heading22: "we provide you the best experience",
          heading23: "Very serious materials for making furniture",
          heading24: "OUR WORLDWIDE SPECIAL CLIENTS",
          heading25: "EnzaHome experiences",
          heading26: "Best Materials",
          heading27: "our popular products",
          heading28: "Mr. Denis Shcherbakov",
          heading29: "Mr. Chad Turney",
          heading30: "Mr. Abdi Çetin",
          heading31: "Mr. Ahmet Nihat Bilgen",
          heading32: "Mr. Dinçer Şentürk",
          heading33: "Mr. Tolga Yurtören",
          heading34: "Mr. Ahmet Alperen Kizildag",
          heading35: "Ms. Oya Sezen",
      }
  },

  russian: {
      paragraphs: {
          paragraph1: "Материалы, цвета, дизайн и все остальные особенности мебели Enza молоды, динамичны и современны.",
          paragraph2: "Enza Home — концептуальный бренд, предлагаемый Yataş для создания нового образа жизни. Enza Home формирует жизнь с помощью Продукты привносят в ваш дом новый образ жизни.",
          paragraph3: "Покажите описание",
          paragraph4: "Enza Home — концептуальный бренд, предлагаемый Yataş для создания нового образа жизни. Enza Home формирует жизнь с помощью продукты, начиная от столовой и заканчивая мебелью для спален, матрасами, текстилем и аксессуарами, и приносит разнообразный образ жизни в вашем доме благодаря современному и инновационному подходу. Альтернативы на любой вкус и жизненные решения, предлагающие комфорт в его самом естественном состоянии. дизайн в пределах досягаемости в Enza Home, что меняет мир к лучшему. Продукты Enza Home основаны на многолетнем опыте Yataş Group, который позволяет удовлетворить все ожидания комфорта и качества, долговечности и элегантности, доступности и хорошего дизайна. Enza Home уделяет первоочередное внимание удовлетворенности клиентов благодаря своей широкой сети сервисного и технического обслуживания, которая распространяется по всей Турции и предлагает своим клиентам гораздо больше, чем просто мебель — это образ жизни. EnzaHome приглашает вас познакомиться с совершенно новыми мирами в своей глобальной сети концептуальных магазинов.",
          paragraph5: "Вы можете получить рабочее место высочайшего качества по доступной цене и при этом пользоваться всеми удобствами, которые есть только в EnzaHome. , Большая экономия на мебели",
          paragraph6: "Покажите описание",
          paragraph7: "Вы можете получить рабочее место высочайшего качества по доступной цене и при этом пользоваться всеми удобствами, которые предлагает  есть только в EnzaHome. У нас также есть лучшие скидки для наших клиентов.  «Получите стиль, который вам нужен, по цене, которая вам понравится».  «Качественная мебель, доступные цены».  «Большая экономия на стильной мебели для каждой комнаты». «Роскошный вид без роскошной цены».",
          paragraph8: "Мы предлагаем около 2000 богатых и разнообразных вариантов: мебель, аксессуары, матрасы, кровати для хранения вещей и  изголовья, красочные изделия домашнего текстиля, а также подушки и одеяла.  Мы обслуживаем наших клиентов в 247 внутренних и международных магазинах Enza Home.  Мебель, матрасы и домашний текстиль – все под одной крышей. Yataş Bedding World также находится в Enza Home с  профессиональные кровати Yataş, обеспечивающие бескомпромиссное качество на протяжении многих лет, домашний текстиль, добавляющий элегантности  украшение вашей спальни и варианты пружинных коробок, служащие альтернативой выбранному вами каркасу кровати.",
          paragraph9: "Мы предлагаем около 2000 богатых и разнообразных вариантов: мебель, аксессуары, матрасы, красочный домашний текстиль. товары, а также подушки и одеяла.",
          paragraph10: "Покажите описание",
          paragraph11: "Все",
          paragraph12: "стул",
          paragraph13: "кровать",
          paragraph14: "диван",
          paragraph15: "Этот тафтинговый стул доступен в сером, белом, темно-синем и черном цветах.",
          paragraph16: "Цена : 1392 сомони.",
          paragraph17: "Квадратная форма и обивка с прошивкой безошибочно напоминают середину века, а мягкий бархат и  блестящие металлические ножки придают современную элегантность. Эта вещь является потрясающим заявлением стиля для гламурного, современного  и комнаты середины века.",
          paragraph18: " Цена : 1750 сомони.",
          paragraph19: " Поднимите ноги и расслабьтесь с этим необычным сочетанием стула и пуфика для гостиной. Оба изделия имеют ниспадающую форму, которая радует глаз и облегает тело.",
          paragraph20: "Цена: 2200 сомони.",
          paragraph21: "Великолепное кресло Reader от Tor Hadsund черпает вдохновение из традиционной датской мебели.  конструкция для поистине вневременной привлекательности. Эта деталь имеет изящно изогнутую спинку, изготовленную из  мягко изогнутый шпон, расположенный низко и устойчиво на базе массива дуба.",
          paragraph22: "Цена : 1000 сомони.",
          paragraph23: "В современном каркасе кровати на платформе со светодиодной подсветкой используются световые полосы RGB, расположенные под деревянным каркасом.  рамки с обеих сторон кровати, включают в себя 16 цветов светодиодной подсветки, 10 регулировок яркости и 4  образцы освещения.",
          paragraph24: "Цена : 10500 сомони.",
          paragraph25: "Представляем нашу мягкую кровать-платформу размера «king-size» с мягкой обивкой, в которой современная роскошь сочетается с комфортом.  и стиль. Яркий дизайн изголовья и изножья со стильной отделкой на пуговицах.  Эта кровать-сани легко впишется в любой интерьер спальни.",
          paragraph26: "Цена : 15 000 сомони.",
          paragraph27: "Добавьте романтического стиля и смягчите свою спальню с помощью этой кровати SAFAVIEH Theron. Арочная конструкция придает  Эта кровать с мягкой обивкой имеет красивый профиль, а темно-синяя бархатная обивка создает смелый контраст.  на фоне светлых стен.",
          paragraph28: "Цена : 6 000 сомони.",
          paragraph29: "Элегантное изголовье, обитое полиэстером с наполнителем из пенопласта, создает ощущение уюта и придает нотку уюта.  визуальная текстура, придающая любой комнате искру современного и вневременного стиля. Каркас кровати изготовлен.  из твердой фанеры и металла, обеспечивающих плотную и прочную опору весом до 600 фунтов.",
          paragraph30: "Цена : 8 500 сомони.",
          paragraph31: "Тщательно спроектированное жилое пространство заслуживает роскошного расположения сидений. и это Товар будет отправлен вам в нескольких коробках.",
          paragraph32: "Цена : 12 500 сомони.",
          paragraph33: "Этот современный тканевый секционный шезлонг середины века со спинкой и обивкой создает уютную атмосферу.  элемент вашей гостиной. Он изготовлен из специальной рамы и имеет слегка конические ножки.",
          paragraph34: "Цена : 10 750 сомони.",
          paragraph35: "Обновите свою гостиную с помощью этого современного и стильного бархатного секционного дивана. Высококачественная твердая древесина Каркас обеспечивает долговечность и прочность.",
          paragraph36: "Цена : 9 999 сомони.",
          paragraph37: "Этот современный диван создает модный образ и создает комфортную зону в вашей гостиной. Несколько Комбинации: каждая часть спроектирована независимо, ее положение и функции можно менять по желанию.",
          paragraph37a : "Цена : 13 500 сомони.",
          paragraph38 : "опыт",
          paragraph39 : "За результат можно не волноваться, ведь все эти интерьеры сделаны людьми. профессионалы своего дела, элегантные и роскошные, с использованием материалов премиум-класса.",
          paragraph40 : "Больше информации",
          paragraph41 : "Материалы",
          paragraph42 : "Потому что Enza Home очень серьезно подошла к разработке мебели для нашей среды, используя очень дорогая и известная столица, но по сравнительно невысокой цене",
          paragraph43 : "Больше информации",
          paragraph44 : "Преимущество аренды рабочего места у нас заключается в том, что вы получаете комфортное обслуживание и всесторонние удобства.",
          paragraph45 : "Услуги",
          paragraph46 : "Международные Запросы",
          paragraph47 : "Точки продаж",
          paragraph48 : "Брендинг",
          paragraph49 : "Мебель",
          paragraph50 : "Кровати",
          paragraph51 : "Стул",
          paragraph52 : "Все",
          paragraph53 : "Подписывайтесь на нас",
          paragraph57 : "Авторские права. © 2024",
          paragraph58 : "Условия использования",
          paragraph59 : "политика конфиденциальности",
          paragraph60 : "Альтернативы на любой вкус и решения для жизни, которые предлагают комфорт в его самом естественном состоянии, сочетаются с доступным дизайном в Enza Home, создавая разницу. Продукты Enza Home основаны на многолетнем опыте Yataş Group, который позволяет оправдать все ожидания комфорта и качества. долговечность и элегантность, доступность и хороший дизайн Enza Home уделяет первостепенное внимание удовлетворенности клиентов благодаря своей широкой сети обслуживания и технического обслуживания, которая простирается по всей Турции, и предлагает своим клиентам гораздо больше, чем просто мебель — она предлагает образ жизни. Enza Home приглашает вас познакомиться с совершенно новыми мирами в своей глобальной сети концептуальных магазинов.",
          paragraph61 : "В EnzaHome мы верим, что суть каждого замечательного предмета мебели заключается в материалах, использованных для его создания. Наше стремление к совершенству заставляет нас тщательно выбирать лучшие материалы, гарантируя, что каждое изделие воплощает в себе долговечность, элегантность и экологичность.  Дерево — краеугольный камень нашего ремесла, символизирующее тепло, изысканность и вневременную красоту. Мы тщательно получаем древесину из устойчивых лесов, уделяя приоритетное внимание качеству и экологической ответственности. От насыщенных зерен дуба до роскошной текстуры ореха — каждое изделие прославляет естественную привлекательность дерева, обещая долговечность и непреходящее очарование.  В EnzaHome наша страсть к исключительному мастерству выходит за рамки готового продукта. Обладая богатым опытом ремесленного мастерства, наши опытные мастера придают каждому изделию пристальное внимание к деталям и беспрецедентную преданность делу. От первоначальной концепции до последних штрихов наше стремление к совершенству проявляется в каждом аспекте нашей мебели, обещая изделия высочайшего качества, превосходящие тенденции и выдерживающие испытание временем.",
          paragraph62: "Все категории",
          paragraph63: "Стул",
          paragraph64: "Кровати",
          paragraph65: "Диван",
          paragraph66: "Магазин",
          paragraph67: "Контакт",
          paragraph68: "Информация",
          paragraph69: "Мебель",
          paragraph70: "Мебель",
          paragraph71: "Магазин",
          paragraph72: "Контакт",
          paragraph73: "Информация",
          paragraph74: "Yataş Америка",
          paragraph75: "западная Европа",
          paragraph76: "Центральная и Восточная Европа, Грузия, Азербайджан",
          paragraph77: "Средний Восток",
          paragraph78: "Оптовые продажи и частная торговая марка (OEM)",
          paragraph79: "CIS, Азия и Тихоокеанский регион",
          paragraph80: "Африка",
       
        },

      headings: {
          heading1: "EnzaHome Турецкий Капони Таджикистан Бранч",
          heading2: "Почему выбирают нас",
          heading3: "Роскошные удобства",
          heading4: "Роскошные удобства",
          heading5: "Доступная цена",
          heading6: "Доступная цена",
          heading7: "ТЫСЯЧИ ВЫБОРОВ",
          heading8: "Множество вариантов",
          heading9: "Самый продаваемый продукт",
          heading10: "Большой тафтинговый стул для гостиной",
          heading11: "Бархатный стул для гостиной с тафтинговым каналом",
          heading12: "Изогнутый стул для гостиной с пуфиком",
          heading13: "Подвесной стул для гостиной из ротанга",
          heading14: "Кровать-платформа с обивкой из искусственной кожи и каркасом кровати со светодиодной подсветкой",
          heading15: "Кровать-платформа с мягкой обивкой размера «king-size».",
          heading16: "SAFAVIEH Theron Темно-синяя Кровать",
          heading17: "Кровать-платформа с тафтинговой обивкой и металлическими акцентами",
          heading18: "Delilah Современный U-образный секционный диван середины века",
          heading19: "Двухсекционная мягкая обивка L-образной формы.",
          heading20: "Бархатный секционный диван, двусторонний модульный диван.",
          heading21: "L-образный льняной секционный диван, модульная подушка, диван для гостиной",
          heading22: "мы предоставляем вам лучший опыт",
          heading23: "Очень серьезные материалы для изготовления мебели",
          heading24: "НАШИ СПЕЦИАЛЬНЫЕ КЛИЕНТЫ ПО ВСЕМУ МИРУ",
          heading25: "EnzaHome опыт",
          heading26: "Лучшие материалы",
          heading27: "наши популярные продукты",
          heading28: "Мр. Денис Щербаков",
          heading29: "Mp. Чад Терни",
          heading30: "Mp. Абди Четин",
          heading31: "Mp. Ахмет Нихат Бильген",
          heading32: "Mp. Динчер Шентюрк",
          heading33: "Mp. Толга Юрторен",
          heading34: "Mp. Ахмет Альперен Кызылдаг",
          heading35: "г-жа Оя Сезен",
      }
  }
};

let currentLanguage = "english";

function changeLanguage(language) {
  currentLanguage = language;
  updateContent();


  document.querySelectorAll(".language-btn").forEach(button => {
    button.classList.remove("nav-active");
  });
  
  document.getElementById(`${language}Button`).classList.add("nav-active");
}

////////////Function to update language////////
function updateContent() {
  
  Object.keys(languages[currentLanguage].paragraphs).forEach(paragraphId => {
    document.getElementById(paragraphId).innerText = languages[currentLanguage].paragraphs[paragraphId];
  });

  
  Object.keys(languages[currentLanguage].headings).forEach(headingId => {
    document.getElementById(headingId).innerText = languages[currentLanguage].headings[headingId];
  });
}


updateContent();

document.getElementById("englishButton").addEventListener("click", function() {
  changeLanguage("english");
});

document.getElementById("russianButton").addEventListener("click", function() {
  changeLanguage("russian");
});

document.getElementById("englishButton").classList.add("nav-active");


////////////responsive toggle/////////

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggle-btn");
  const dropdownMenu = document.getElementById("dropdownMenu");
  const icon = toggleBtn.querySelector("ion-icon");

  toggleBtn.addEventListener("click", function () {
    dropdownMenu.classList.toggle("visible");

    // Change the icon of dropdown menu
    if (dropdownMenu.classList.contains("visible")) {
      icon.setAttribute("name", "close-outline");
    } else {
      icon.setAttribute("name", "menu-outline");
    }
  });
});



