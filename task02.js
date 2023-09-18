const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    speed: 100,
    showInfo: function() {
      console.log(`Марка: ${this.brand}; Модель: ${this.model}; Рік випуску: ${this.year};`);
    }
  };
  const location = {
    city: "Київ",
    distance: 300 
  };
  function showTime() {
    const time = location.distance / car.speed;
    console.log(`Автомобіль ${car.brand}, марки ${car.model} дістанеться міста ${location.city} за ${time} год.`);
  } 
  car.showInfo();
  showTime();
  