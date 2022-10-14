const products = [
    {
        id: "1",
        titulo: "3m",
        precio: "3.000",
        img: "/images/3m.png",
        descripcion:"Productos 3m",
        category : "Productos",
        stock: "10"
    },
    {
        id: "2",
        titulo: "Bardahl",
        precio: "4.000",
        img: "/images/bardahl.png",
        descripcion:"Productos Bardahl",
        category : "Productos",
        stock: "10"
    },
    {
        id: "3",
        titulo: "Bosch",
        precio: "3.000",
        img: "/images/Bosch.png",
        descripcion:"Productos Bosch",
        category : "Productos",
        stock: "10"
    },
    {
        id: "4",
        titulo: "Castrol",
        precio: "3.000",
        img: "/images/Castrol.png",
        descripcion:"Productos Castrol",
        category : "Productos",
        stock: "10"
    },
    {
        id: "5",
        titulo: "Elf",
        precio: "3.000",
        img: "/images/Elf.png",
        descripcion:"Productos Elf",
        category : "Productos",
        stock: "10"
    },
    {
        id: "6",
        titulo: "Gulf",
        precio: "3.000",
        img: "/images/Gulf.png",
        descripcion:"Productos Gulf",
        category : "Productos",
        stock: "10"
    },
    {
        id: "7",
        titulo: "Ipone",
        precio: "3.000",
        img: "/images/Ipone.png",
        descripcion:"Productos Ipone",
        category : "Productos",
        stock: "10"
    },
    {
        id: "8",
        titulo: "Liquimoly",
        precio: "3.000",
        img: "/images/Liquimoly.png",
        descripcion:"Productos Liquimoly",
        category : "Productos",
        stock: "10"
    },
    {
        id: "9",
        titulo: "Mobil",
        precio: "3.000",
        img: "/images/Mobil.png",
        descripcion:"Productos Mobil",
        category : "Productos",
        stock: "10"
    },
    {
        id: "10",
        titulo: "Motul",
        precio: "3.000",
        img: "/images/Motul.png",
        descripcion:"Productos Motul",
        category : "Productos",
        stock: "10"
    },
    {
        id: "11",
        titulo: "Petronas",
        precio: "3.000",
        img: "/images/Petronas.png",
        descripcion:"Productos Petronas",
        category : "Productos",
        stock: "10"
    },
    {
        id: "12",
        titulo: "Pirelli",
        precio: "3.000",
        img: "/images/Pirelli.png",
        descripcion:"Productos Pirelli",
        category : "Productos",
        stock: "10"
    },{
        id: "13",
        titulo: "Shell",
        precio: "3.000",
        img: "/images/Shell.png",
        descripcion:"Productos Shell",
        category : "Productos",
        stock: "10"
    },
    {
        id: "14",
        titulo: "Total",
        precio: "3.000",
        img: "/images/Total.png",
        descripcion:"Productos Total",
        category : "Productos",
        stock: "10"
    },
    {
        id: "15",
        titulo: "Valvoline",
        precio: "3.000",
        img: "/images/Valvoline.png",
        descripcion:"Productos Valvoline",
        category : "Productos",
        stock: "10"
    },
    {
        id: "16",
        titulo: "Wagner",
        precio: "3.000",
        img: "/images/Wagner.png",
        descripcion:"Productos Wagner",
        category : "Productos",
        stock: "10"
    },
    {
        id: "17",
        titulo: "Wynns",
        precio: "3.000",
        img: "/images/Wynns.png",
        descripcion:"Productos Wynns",
        category : "Productos",
        stock: "10"
    },
    {
        id: "18",
        titulo: "Ypf",
        precio: "3.000",
        img: "/images/Ypf.png",
        descripcion:"Productos Ypf",
        category : "Productos",
        stock: "10"
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}
export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find (prod => prod.id === id))
        }, 1000)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === category))
        }, 500)
    })
}