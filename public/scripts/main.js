let cars;
const http = new XMLHttpRequest();
const url = 'http://localhost:3000/cars';

function paintCars() {
  const carsContainer = document.getElementById('cars-container');
  for (let i = 0; i < cars.length; i += 1) {
    const article = document.createElement('article');
    const h2 = document.createElement('h2');
    h2.innerHTML = cars[i].placa;

    const div1 = document.createElement('div');
    const label1 = document.createElement('label');
    label1.innerHTML = 'Marca: ';
    const span1 = document.createElement('span');
    span1.innerHTML = cars[i].marca;
    div1.appendChild(label1);
    div1.appendChild(span1);

    const div2 = document.createElement('div');
    const label2 = document.createElement('label');
    label2.innerHTML = 'Modelo: ';
    const span2 = document.createElement('span');
    span2.innerHTML = cars[i].modelo;
    div2.appendChild(label2);
    div2.appendChild(span2);

    const div3 = document.createElement('div');
    const label3 = document.createElement('label');
    label3.innerHTML = 'Año: ';
    const span3 = document.createElement('span');
    span3.innerHTML = cars[i].ano;
    div3.appendChild(label3);
    div3.appendChild(span3);

    const form = document.createElement('form');
    form.action = '/edit';
    form.method = 'GET';
    const btn = document.createElement('button');
    btn.type = 'submit';
    btn.innerHTML = 'Editar';
    form.appendChild(btn);

    article.appendChild(h2);
    article.appendChild(div1);
    article.appendChild(div2);
    article.appendChild(div3);
    article.appendChild(form);
    carsContainer.appendChild(article);
  }
}

http.onreadystatechange = () => {
  if (http.readyState === 4) {
    if (http.status === 200) {
      cars = JSON.parse(http.responseText);
      paintCars();
    } else {
      console.log('Hubo problemas con la petición');
    }
  }
};

http.open('GET', url, true);
http.send();
