const productos = [
    {
        id: "item01",
        nombre: "Sansevieria",
        precio: 1500,
        categoria: "Interior",
        stock: 5,
        imagen: "../../public/img/sansevieria.webp",
        descripcion: "Sansevieria / Lengua de suegra. No necesita mucha agua, solo lo suficiente cuando la tierra se vea seca quizás cada 10/15 días. Se adapta muy bien a lugares oscuros (aunque no sin luz), pero prospera con luz natural. Es recomendable que cada tanto se le limpien el polvo de las hojas."
    },
    {
        id: "item02",
        nombre: "Potus",
        precio: 2000,
        categoria: "Interior",
        stock: 5,
        imagen:"../../public/img/potus.webp",
        descripcion: "Epipremnum aureum. Es felíz en sombra como también lugares bien iluminados, pero no a sol directo. No necesita mucha agua, 1 o 2 veces por semana. Adora los ambientes húmedos. Se recomienda rociar con agua."
    },
    {
        id: "item03",
        nombre: "Palmera canaria",
        precio: 3000,
        categoria: "Exterior",
        stock: 5,
        imagen:"../../public/img/palmera-canaria.jpg",
        descripcion: "Phoenix canariensis. Adora el sol, pero es recomendable colocarla en un lugar donde reciba sombra en algún momento del día. Perfecta para lugares secos. Se aconseja fertilizar una vez al mes en temporada de primavera y verano."
    },
    {
        id: "item04",
        nombre: "Maranta",
        precio: 2500,
        categoria: "Interior",
        stock: 5,
        imagen:"../../public/img/maranta-s.webp",
        descripcion: "Maranta leuconeura. Conocida como 'planta de oración' por sus movimientos dependientes de la lus del sol. Prefiere lugares muy bien iluminados, pero no sol directo, y su suelo más bien seco. Disfruta de un ambiente húmedo, así que se recomienda rociarla con agua."
    },
    {
        id: "item05",
        nombre: "Lazo de amor",
        precio: 1800,
        categoria: "Interior",
        stock: 5,
        imagen:"../../public/img/lazo-de-amor.webp",
        descripcion: "Chlorophytum. Se desarrolla muy bien con poca agua. Se adapta a cualquier condición de luz, pero no soporta el sol directo."
    },
    {
        id: "item06",
        nombre: "Laurel arbusto",
        precio: 3900,
        categoria: "Exterior",
        stock: 5,
        imagen:"../../public/img/laurel-arbusto.jpg",
        descripcion: "Laurus Nobilis. Se desarrolla muy bien en partes bien soleadas. Prefiere el suelo húmedo, pero no encharcado. Es recomendable fertilizar una vez al mes en primavera y verano."
    },
    {
        id: "item07",
        nombre: "Hortensia",
        precio: 4900,
        categoria: "Exterior",
        stock: 5,
        imagen:"../../public/img/hortensias.webp",
        descripcion: "Mophead Hydrangea. Es felíz donde reciba el sol de la mañana, pero la sombra de la tarde. Prefiere el suelo húmedo, para desarrollar bien sus flores."
    },
    {
        id: "item08",
        nombre: "Helecho",
        precio: 3500,
        categoria: "Interior",
        stock: 5,
        imagen:"../../public/img/helechos.webp",
        descripcion: "Nephrolepis exaltata. Prefiere suelos y ambientes bien húmedos. Se desarrolla mejor en ambientes con poca luz."
    },
    {
        id: "item09",
        nombre: "Gomero",
        precio: 4800,
        categoria: "Interior",
        stock: 5,
        imagen:"../../public/img/gomeros.webp",
        descripcion: "Ficus robusta. Prefiere suelo más bien seco y ambientes bien iluminados. Sus hojas pueden absorver mucha humedad, así que es recomendable rociarlo con agua."
    },
    {
        id: "item10",
        nombre: "Ficus",
        precio: 4500,
        categoria: "Interior",
        stock: 5,
        imagen:"../../public/img/ficus.webp",
        descripcion: "Ficus Benjamina. Prefiere suelos gentilmente húmedos, pero no encharcados. Mucha luz, pero no sol directo."
    },
    {
        id: "item11",
        nombre: "Dischidia",
        precio: 3900,
        categoria: "Interior",
        stock: 5,
        imagen:"../../public/img/dischidia-m.webp",
        descripcion: "Dischidia ovata. Prefiere la luz indirecta.Es resistente a las sequías, así que sería necesario regarla cuando la tierra superficial se sienta seca. "
    },
    {
        id: "item12",
        nombre: "Cuna de moises",
        precio: 3900,
        categoria: "Interior",
        stock: 5,
        imagen:"../../public/img/cunas-de-moises.webp",
        descripcion: "Spathiphyllum wallisii. Se adapta perfectamente a cualquier condición de luz, pero sus flores se desarrollan mejor en lugares brillantes. No requiere de cuidados especiales en cuanto al riego."
    },
    {
        id: "item13",
        nombre: "Ceropegia",
        precio: 3900,
        categoria: "Interior",
        stock: 5,
        imagen:"../../public/img/ceropegia-woody.webp",
        descripcion: "Ceropegia woodii. Prefiere suelos más bien secos. Se adapta bien en cuanto a la iluminación."
    },
    {
        id: "item14",
        nombre: "Camellia",
        precio: 5500,
        categoria: "Exterior",
        stock: 5,
        imagen:"../../public/img/camellia.webp",
        descripcion: "Camellia Japonica. Prefiere los lugares protegidos del sol, aunque con buenos cuidados puede desarrollarse bien al sol directo. Prefiere el suelo bien húmedo, y para su correcto crecimiento requiere de poda al finalizar la floración."
    },
    {
        id: "item15",
        nombre: "Limonero",
        precio: 0,
        categoria: "Exterior",
        stock: 5,
        imagen:"../../public/img/arbol-limon.webp",
        descripcion: "Mucho, mucho sol. Prefiere suelos bien húmedos, y para optimizar el crecimiento de fruta, se puede utilzar fertilizantes en primavera y verano."
    },
    {
        id: "item16",
        nombre: "Burbuja regadora",
        precio: 8000,
        categoria: "Accesorios",
        stock: 5,
        imagen:"../../public/img/burbuja-regadora.webp",
        descripcion: "Dispenser de agua para tus macetas. Ayudan a mantenerlas hidratadas y felices."
    },
    {
        id: "item17",
        nombre: "Regadera",
        precio: 25000,
        categoria: "Accesorios",
        stock: 5,
        imagen:"../../public/img/regadera.webp",
        descripcion: "Regadera de acero inoxidiable, color matte. Capacidad de 1.25lts"
    },
    {
        id: "item18",
        nombre: "Pie maceta hierro",
        precio: 15000,
        categoria: "Accesorios",
        stock: 5,
        imagen:"../../public/img/pie-maceta-3.jpg",
        descripcion: "Base para macetas hecho de madera con pie de hierro. 80cm de altura."
    },
    {
        id: "item19",
        nombre: "Pie de maceta x3",
        precio: 28000,
        categoria: "Accesorios",
        stock: 5,
        imagen:"../../public/img/pie-maceta-2.jpg",
        descripcion: "Base para macetera con capacidad para 3 macetas de 20cm."
    },
    {
        id: "item20",
        nombre: "Pie de maceta madera",
        precio: 22000,
        categoria: "Accesorios",
        stock: 5,
        imagen:"../../public/img/pie-maceta.jpg",
        descripcion: "Porta maceta de madera de pino. 80cm de altura."
    },
    {
        id: "item21",
        nombre: "Maceta colgante",
        precio: 19000,
        categoria: "Macetas",
        stock: 5,
        imagen:"../../public/img/macetas-colgantes-15cm.webp",
        descripcion: "Macetas tamaño 20. Se pueden utilizar tanto en interior o exterior."
    },
    {
        id: "item22",
        nombre: "Macetas de cemento",
        precio: 19000,
        categoria: "Macetas",
        stock: 5,
        imagen:"../../public/img/macetas-cemento.webp",
        descripcion: "Macetas de 30cm x 40cm."
    },
    {
        id: "item23",
        nombre: "Macetas canasto",
        precio: 19000,
        categoria: "Macetas",
        stock: 5,
        imagen:"../../public/img/macetas-canasto.webp",
        descripcion: "Porta macetas de yute. Para macetas de 30cm."
    },
    {
        id: "item24",
        nombre: "Insecticida orgánico",
        precio: 9900,
        categoria: "Accesorios",
        stock: 5,
        imagen:"../../img/insecticida-organico.webp",
        descripcion: "Mezcla natural y vegana para protejer tus plantas de los insectos y hongos."
    }
]

const obtenerProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        },2000)
    })
}
 export default obtenerProductos

