const fs = require("fs").promises;


class ProductManager {

  static ultid = 0;

    constructor(path) {
      this.productos = [];
      this.path = path; 

    }
  
    async addProduct(nuevoObjeto) {
      let {titulo, descripcion, precio, imagen, codigo, stock} = nuevoObjeto;


        if (!titulo || !descripcion || !precio || !imagen || !stock) {
          console.log("Completar todos los datos"); 
          return;
        }

        if (this.productos.some(item => item.codigo === codigo))
        {
          console.log("Los codigos son unicos"); 
          return;
        }

        const nuevoproducto = {
          id: ++ProductManager.ultid, 
          titulo,
          descripcion,
          precio,
          imagen,
          codigo,
          stock
        }

        this.productos.push(nuevoproducto);
        await this.guardarArchivo(this.productos);
    }
    
  }

        getProductos();  {
          console.log(this.productos);
        }

        async getProductosporId(id); {
          try {
            const arrayProductos = await this.leerArchivo();
            const buscado = arrayProductos.find(item => item.id === id);

            if (!buscado) {
              console.log("producto no encontrado");
             } else {
              console.log("Producto encontrado");
              return buscado;
              
            }

          }  catch (error) {
            console.log("No se puede leer el archivo", error);

          }

          }




           async leerArchivo(); {

            try {
              const respuesta = await fs.readfile(this.path, "utf-8"); 
              const arrayProductos = JSON. parse (respuesta);
              return arrayProductos; 
              
              } 
              catch (error)  {
                  console.log("No se puede leer el archivo", error);
            }

          }

            async guardarArchivo(arrayProductos); {
            try {
              await fs.writeFile(this.path, JSON.stringify(arrayProductos, null, 2));
            } catch (error) {
              console.log("No se puede leer el archivo", error); 
            }

            async updateProduct(id, productoActualizado); {
              try {
                  const arrayProductos = await this.leerArchivo();
      
                  const index = arrayProductos.findIndex(item => item.id === id);
      
                  if (index !== -1) {
                      arrayProductos.splice(index, 1, productoActualizado);
                      await this.guardarArchivo(arrayProductos);
                  } else {
                      console.log("Producto no encontrado");
                  }
      
              } catch (error) {
                  console.log("Error al actualizar el producto", error);
              }
          }

          }

  

    //nuevo testing

     const manager = new ProductManager("./productos.json"); 

     manager.getProductos();


     const fideos = {
      titulo: "fideos",
      descripcion: "super ricos",
      precio: 200, 
      imagen: "sin imagen",
      codigo: "abc123",
      stock: 20, 

     }

     manager.addProduct(fideos);


     const arroz = {
      titulo: "arroz",
      descripcion: "no se pasa",
      precio: 150, 
      imagen: "sin imagen",
      codigo: "abc124",
      stock: 10,
    }

    manager.addProduct(arroz); 

    const aceite = {
      title: "aceite",
      description: "muy caro",
      price: 8000,
      img: "sin imagen",
      code: "abc125",
      //stock: 30
    }

    manager.getProductos();

    async function testeamosBusquedaPorId() {
      const buscado = await manager.getProductById(2);
      console.log(buscado);
  }

  testeamosBusquedaPorId();

  const salsa = {
    id: 1,
    title: "salsa tomate", 
    description: "muy dulce", 
    price: 190,
    img: "Sin imagen",
    code: "abc123",
    stock: 15
};

async function testeamosActualizar() {
  await manager.updateProduct(1, salsa);
}

testeamosActualizar();
