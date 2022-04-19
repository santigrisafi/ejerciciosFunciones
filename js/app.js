let calcImporteNeto = (precio, iva) => {
  return (iva != null) | (iva != undefined) | (iva > 0)
    ? precio + (precio * iva) / 100
    : precio + (precio * 21) / 100;
};

let getPrecioIva = () => {
  let precio = parseFloat(Math.floor(Math.random() * (70000 - 35000) + 35000));
  let iva = parseInt(Math.floor(Math.random() * (100 - 0) + 0));
  alert("Precio final con iva : " + calcImporteNeto(precio, iva));
};

let getText = () => {
  let text = prompt("Ingrese un texto");
  alert(reverseText(text));
};

let reverseText = (text) => {
  return String(text).split("").reverse().join("");
};

