<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aplicación Web Interactiva</title>
</head>
<body>

<script>
    // Declaración de variables y array
    let numeros = [];
    let suma = 0;
    const MAX_NUMEROS = 5;

    // Bucle para pedir al usuario ingresar números
    for (let i = 0; i < MAX_NUMEROS; i++) {
        let numeroIngresado = prompt(`Ingrese el número ${i + 1}:`);
        }
        
        // Validar si se ingresó un número válido
        if (!isNaN(numeroIngresado)) {
            // Convertir el valor a número y agregarlo al array
            numeros.push(parseFloat(numeroIngresado));
        } else {
            // Mostrar un mensaje de error y restar una iteración
            alert('Por favor, ingrese un número válido.');
            i--;
        }
    

    // Calcular la suma de los números
    for (let i = 0; i <numeros.length; i++) {
        suma += numeros[i];
    }

    // Mostrar resultados en consola y mediante cuadro de diálogo
    console.log('Números ingresados:', numeros);
    console.log('Suma de los números:', suma);

    // Mostrar confirmación al usuario
    let confirmacion = confirm(`La suma de los números ingresados es ${suma}. ¿Desea realizar otra operación?`);

    // Evaluar la respuesta del usuario
    if (confirmacion) {
        alert('¡Gracias por usar la aplicación!');
    } else {
        alert('Hasta luego. ¡Vuelva pronto!');
    }
</script>

</body>
</html>