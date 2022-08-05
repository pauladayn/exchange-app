# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Specs cumplidos
#Al cargar la pagina por primera vez se asume que el monto es de 1.00 y se tiene seleccionado la operatoria desde USD - US Dolar a EUR - Euro.
Se setea un estado inicial con el valor del input en '1.00', para que se muestre con dos decimales. También se setea el valor inicial del select 'from' y 'to' de Dolar a Euro, ejecutando un request a la API de VAT con el valor de USD como base. 

#Al modificar el input de texto automaticamente se tiene que calcular el importe a recibir.
#Se puede intercambiar el from y el to .
- Para generar el resultado de los tipos de cambio y hacer el intercambio de monedas del 'from' al 'to' se realizaron dos requests a la API de VAT. Uno de ellos recibe por query params el valor base desde el cuál se quiere calcular el cambio, y el otro arroja un listado de todas las monedas para popular tanto el input select del 'from' como el 'to'. 
- Para poder generar el resultado del cambio, hay 2 hooks de efecto dentro de un custom hook (que maneja la lógica de los request entre la API y las actualizaciones del estado de la aplicación). 
- El estado global de la aplicación se manejó desde Context API, con acciones desde un custom hook. 

#El monto a cargar no puede ser negativo.
- Se realizaron validaciones para que el input que recibe la cantidad (amount), sólo reciba números (enteros o decimales) que no sean negativos. Tampoco acepta texto. 

#Que cumpla con lo pedido en el figma. 
- Para los estilos de la aplicación, utilicé CSS con un archivo global y hojas de estilo individuales para cada componente. 

#Espero que les guste. Quedo atenta a su feedback. Buen finde ;)



