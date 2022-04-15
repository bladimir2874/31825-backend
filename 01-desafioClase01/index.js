const Container = require("./container");
const nuevoProducto = new Container("producto.txt");

const mostrarMenu = () => {
  setTimeout(() => {
    console.log(`
      Digite numero opcion:

      1.save (Recibe un objeto y lo guarda)
      2.getById  (Recibe un id y devuelve el objeto con ese id, o null si no está)
      3.getAll  (Devuelve un array con lo s objetos presentes)
      4.deleteById ( Elimina el objeto con el id buscado)
      5.deleteAll  ( Elimina todos los objetos presentes.)
      6.exit 
  `);
  }, 1000);
};
mostrarMenu();

function menu() {
  let stdin = process.openStdin();

  stdin.addListener("data", function (d) {
    let option = d.toString().trim();

    switch (option) {
      case "1":
        const obj = {
          title: "test product",
          price: 34.5,
          thumbnail: "thumbnail.jpg",
        };

        nuevoProducto.save(obj);
        mostrarMenu();
        break;

      case "2":
        const id = 1;
        console.log(nuevoProducto.getById(id));
        mostrarMenu();
        break;

      case "3":
        console.log(nuevoProducto.getAll());
        mostrarMenu();
        break;

      case "4":
        const id2 = 1;
        nuevoProducto.deleteById(id2);
        mostrarMenu();
        break;

      case "5":
        nuevoProducto.deleteAll();
        mostrarMenu();
        break;

      case "6":
        process.exit(0);

      default:
        console.log("Error");
        process.exit(0);
    }
  });
}
menu();
