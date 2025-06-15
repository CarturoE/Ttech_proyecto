
// Inicialización de categorías en localStorage
categorias = {
    "101" : { nombre: "Desarrollo Web", descrpcion: "Cursos sobre tecnologías para el desarrollo web", imagen: "img/cat101.jpeg" },
    "102" : { nombre: "Lenguajes de Programación", descrpcion: "Cursos de programación en diferentes lenguajes", imagen: "img/cat102.png"  },
    "103" : { nombre: "Metodología de Desarrollo", descrpcion: "Cursos sobre metodologías ágiles y de desarrollo de software", imagen: "img/cat103.jpeg"  }
};

localStorage.setItem("categorias", JSON.stringify(categorias));
