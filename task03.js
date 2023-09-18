const students = [
    {
      name: "Анна",
      age: 20,
      stars: 85
    },
    {
      name: "Василь",
      age: 22,
      stars: 90
    },
    {
      name: "Ігор",
      age: 19,
      stars: 75
    },
    {
      name: "Марія",
      age: 21,
      stars: 88
    }
  ];
  students.forEach(student => {
    student.hello = function() {
      return `Привіт, я ${this.name}!`
    };
  });
  const greetings = students.map(student => student.вітатися());
  console.log(greetings);
  const highRatedStudents = students.filter(student => student.рейтинг > 80);
  console.log(highRatedStudents);
  function addRating(points) {
    this.рейтинг += points;
  }
  students.forEach(student => {
    addRating.call(student, 5); 
  });
  console.log(students);
  
  
 