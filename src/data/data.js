const productos = [
    {
        id: "item01",
        nombre: "Sansevieria",
        precio: 1500,
        categoria: "Interior",
        stock: 5,
        imagen:"../public/img/sansevieria"
    },
    {
        id: "item02",
        nombre: "Potus",
        precio: 2000,
        categoria: "Interior",
        stock: 5,
        imagen:""
    },
    {
        id: "item03",
        nombre: "Palmera",
        precio: 3000,
        categoria: "Exterior",
        stock: 5,
        imagen:""
    },
    {
        id: "item04",
        nombre: "Maranta",
        precio: 2500,
        categoria: "Interior",
        stock: 5,
        imagen:""
    },
    {
        id: "item05",
        nombre: "Lazo de amor",
        precio: 1800,
        categoria: "Interior",
        stock: 5,
        imagen:""
    },
    {
        id: "item06",
        nombre: "Laurel arbusto",
        precio: 3900,
        categoria: "Exterior",
        stock: 5,
        imagen:""
    },
    {
        id: "item07",
        nombre: "Hortensia",
        precio: 4900,
        categoria: "Exterior",
        stock: 5,
        imagen:""
    },
    {
        id: "item08",
        nombre: "Helecho",
        precio: 3500,
        categoria: "Interior",
        stock: 5,
        imagen:""
    },
    {
        id: "item09",
        nombre: "Gomero",
        precio: 4800,
        categoria: "Interior",
        stock: 5,
        imagen:""
    },
    {
        id: "item10",
        nombre: "Ficus",
        precio: 4500,
        categoria: "Interior",
        stock: 5,
        imagen:""
    },
    {
        id: "item11",
        nombre: "Dischidia",
        precio: 3900,
        categoria: "Interior",
        stock: 5,
        imagen:""
    },
    {
        id: "item12",
        nombre: "Cuna de moises",
        precio: 3900,
        categoria: "Interior",
        stock: 5,
        imagen:""
    },
    {
        id: "item13",
        nombre: "Ceropegia",
        precio: 3900,
        categoria: "Interior",
        stock: 5,
        imagen:""
    },
    {
        id: "item14",
        nombre: "Camellia",
        precio: 5500,
        categoria: "Exterior",
        stock: 5,
        imagen:""
    },
    {
        id: "item15",
        nombre: "Limonero",
        precio: 0,
        categoria: "Exterior",
        stock: 5,
        imagen:""
    },
    {
        id: "item16",
        nombre: "Burbuja regadora",
        precio: 8000,
        categoria: "Accesorios",
        stock: 5,
        imagen:""
    },
    {
        id: "item17",
        nombre: "Regadera",
        precio: 25000,
        categoria: "Accesorio",
        stock: 5,
        imagen:""
    },
    {
        id: "item18",
        nombre: "Pie maceta hierro",
        precio: 15000,
        categoria: "Accesorio",
        stock: 5,
        imagen:""
    },
    {
        id: "item19",
        nombre: "Pie de maceta x3",
        precio: 28000,
        categoria: "Accesorio",
        stock: 5,
        imagen:""
    },
    {
        id: "item20",
        nombre: "Pie de maceta madera",
        precio: 22000,
        categoria: "Accesorio",
        stock: 5,
        imagen:""
    },
    {
        id: "item21",
        nombre: "Maceta colgante",
        precio: 19000,
        categoria: "Macetas",
        stock: 5,
        imagen:""
    },
    {
        id: "item22",
        nombre: "Macetas de cemento",
        precio: 19000,
        categoria: "Macetas",
        stock: 5,
        imagen:""
    },
    {
        id: "item23",
        nombre: "Macetas canasto",
        precio: 19000,
        categoria: "Macetas",
        stock: 5,
        imagen:""
    },
    {
        id: "item24",
        nombre: "Insecticida orgánico",
        precio: 9900,
        categoria: "Accesorio",
        stock: 5,
        imagen:""
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

