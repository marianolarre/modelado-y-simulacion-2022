// Obtiene una func(x)
// a (inicio) y b (fin)
// n (cantidad de subdivisiones)

/*resuelve de estas maneras: 
https://www.wolframalpha.com/widgets/view.jsp?id=71ee0e011946417d5e7238f42dfec03c
o
https://planetcalc.com/5494/
*/

function calcularPorSimpson(func, a, b, n) {
  
  var sumatoria1 = 0;
  var sumatoria2 = 0;
  
  // Ancho de cada division
  const h = (b - a) / (n*2);

  // Valores fijos F(X0) y F(Xn)
  var fa = func(a);
  var fb = func(b);
  
  // Dibujar
  colorDeRelleno("#0f0");
  punto(a, fa, 4);
  punto(b, fb, 4);

  // Sumatoria k pares
  for (var k = 1; k < n; k++) {

    var y = func(a + h*k*2);
    sumatoria1 += y;

    // Dibujar
    colorDeRelleno("#0f0");
    punto(a + h*k*2, y, 4);
  }

  // Sumatoria k impares
  for (var k = 1; k <= n; k++) {

    var z = func(a + h*(-1 + 2*k));
    sumatoria2 += z;

    // Dibujar
    colorDeRelleno("#0f0");
    punto(a + h*(-1 + 2*k), y, 4);

  }

  // Retornar resultado final
  return (fa + fb + sumatoria1*2 +sumatoria2*4)* h/3;

}

/*
resuelve de esta manera: 
https://www.zweigmedia.com/MundoReal/integral/integral.html
*/

/*
function calcularPorSimpson(func, a, b, n) {

  // n debe ser par
  if (n%2!=0){
    return "'N' Debe ser par";
  }
  else {
  
    var sumatoria1 = 0;
    var sumatoria2 = 0;
    
    // Ancho de cada division
    const h = (b - a) / n;

    // Valores fijos F(X0) y F(Xn)
    var fa = func(a)
    var fb = func(b)

    // Dibujar
    colorDeRelleno("#0f0");
    punto(a, fa, 4);
    punto(b, fb, 4);

    // Sumatoria k impares
    for (var k = 1; k < n; k=k+2) {

      var y = func(a + h * k);
      sumatoria1 += y;

      // Dibujar
      colorDeRelleno("#0f0");
      punto(a + h * k, y, 4);

    }

    // Sumatoria k pares
    for (var k = 2; k < n-1; k=k+2) {

      var z = func(a + h * k);
      sumatoria2 += z;

      // Dibujar
      colorDeRelleno("#0f0");
      punto(a + h * k, y, 4);

    }

    // Retornar resultado final
    return (fa + fb + sumatoria1*4 +sumatoria2*2)* h/3;

  }
}

*/