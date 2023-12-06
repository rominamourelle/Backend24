class ProductManager {

  static ultid = 0;

    constructor() {
      this.productos = [];
    }
  
    addProduct(titulo, descripcion, precio, imagen, codigo, stock) {

        if(!titulo || !descripcion || !precio || !imagen || !stock)
        {
          console.log("Completar todos los datos"); 
          return;
        }

        if(this.productos.some(item => item.codigo === codigo))
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
      }
      
        getProductos()  {
          console.log(this.productos);
        }

        getProductosporId(id) {
          const productos = this.productos.find(item => item.id === id);

          if(!productos) {
            console.log("Producto no encontrado")
          } else {
            console.log("Producto encontrado", productos); 
            }
            return productos;
          }
        }

  
//  Testing 

      const manager = new ProductManager(); 

      manager.getProductos();

      manager.addProduct("Producto prueba", "prueba de producto", 300, "no hay imagen", "abc123", 30)

      manager.addProduct("arroz", "prueba de producto", 300, "no hay imagen", "abc124", 30)

      manager.addProduct("fideos", "prueba de producto", 300, "no hay imagen", "abc125", 30)

      anager.getProductosporId(2);

     manager.getProductosporId(22);



