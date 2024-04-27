let cars = [];

function addCar() {
    const brandInput = document.getElementById('brand');
    const modelInput = document.getElementById('model');
    const yearInput = document.getElementById('year');
    const colorInput = document.getElementById('color');

    const brand = brandInput.value.trim();
    const model = modelInput.value.trim();
    const year = parseInt(yearInput.value);
    const color = colorInput.value.trim();

    if (!brand || !model || isNaN(year) || !color) {
        alert('Пожалуйста, правильно заполните все поля.');
        return;
    }

    const car = {
        brand: brand,
        model: model,
        year: year,
        color: color,
        displayInfo: function () {
            return `${this.brand} ${this.model} (${this.year}), Цвет: ${this.color}`;
        }
    };

    cars.push(car);
    updateCarList();
    brandInput.value = '';
    modelInput.value = '';
    yearInput.value = '';
    colorInput.value = '';
}

function updateCarList() {
    const carList = document.getElementById('car-list');
    carList.innerHTML = '';
    cars.forEach((car, index) => {
        const li = document.createElement('li');
        li.classList.add('car-item');
        li.textContent = car.displayInfo();

        const editButton = document.createElement('button');
        editButton.textContent = 'Изменить';
        editButton.onclick = function() {
            editCar(index);
        };
        li.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        deleteButton.onclick = function() {
            deleteCar(index);
        };
        li.appendChild(deleteButton);

        carList.appendChild(li);
    });
}

function editCar(index) {
    const car = cars[index];
    const newBrand = prompt('Введите новый бренд:', car.brand);
    const newModel = prompt('Введите новую модель:', car.model);
    const newYear = parseInt(prompt('Введите новый год:', car.year));
    const newColor = prompt('Введите новый цвет:', car.color);

    if (!newBrand || !newModel || isNaN(newYear) || !newColor) {
        alert('Пожалуйста, правильно заполните все поля.');
        return;
    }

    car.brand = newBrand;
    car.model = newModel;
    car.year = newYear;
    car.color = newColor;

    updateCarList();
}

function deleteCar(index) {
    cars.splice(index, 1);
    updateCarList();
}