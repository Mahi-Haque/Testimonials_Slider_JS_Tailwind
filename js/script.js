let testimonials = [
  {
    name: "Mahidul Haque",
    text: "Aspiring Software Developer",
    image: "images/mahi.jpeg",
  },
  {
    name: "Cherise G",
    text: "This is simply unbelievable! I would be lost without Apple. The very best.",
    image: "images/person2.avif",
  },
  {
    name: "Constantine V",
    text: "Thank you for making it painless, pleasant and most of all hassle free!",
    image: "images/person3.avif",
  },
  {
    name: "Rosetta Q",
    text: "I would also like to say thank you to all your staff. Wow what great service, I love it!",
    image: "images/person1.avif",
  },
];

let imagePart = document.getElementById("imagePart");
let paragraphPart = document.getElementById("paragraphPart");
let namePart = document.getElementById("namePart");
let currentIndex = 0;

function updateTestimonial() {
  let currentTestimonial = testimonials[currentIndex];
  paragraphPart.innerText = currentTestimonial.text;
  namePart.innerText = currentTestimonial.name;
  imagePart.src = currentTestimonial.image;
}
updateTestimonial();

setInterval(() => {
  currentIndex = currentIndex + 1;
  if (currentIndex >= testimonials.length) {
    currentIndex = 0;
  }
  updateTestimonial();
}, 2000);
