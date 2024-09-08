const testimonials = [
    {
      image:
        "https://1.bp.blogspot.com/-_e1k3uZ0Klo/Xy_hTZl6NhI/AAAAAAAABbo/3a5WIKGo8KoCYTG4ux9N_Bj_WjyR7yvcgCNcBGAsYHQ/s400/DEE4342E-364D-4008-B5E8-619E9CF24CCD.jpeg",
      content: "The Adventures",
      author: "Jimmy Neutron",
      rating: 5,
    },
    {
      image:
        "https://ceknricek.com/photo/plugin/article/2018/1528519003_1-org.jpg",
      content: "Incredible",
      author: "Baby",
      rating: 1,
    },
    {
      image:
        "https://1.bp.blogspot.com/-1-NFUZrRXo4/Xy_ht3ZF3cI/AAAAAAAABb0/Vmw0zJZ4_l8R46wc5ildXb9JmlwuCNmcgCNcBGAsYHQ/s701/C0DF1B18-082B-48BF-BF18-618E75A83F49.jpeg",
      content: "Dragon Ball",
      author: "Goku",
      rating: 2,
    },
    {
      image:
        "https://1.bp.blogspot.com/-TiqHg7-ima8/Xy_iteHmWCI/AAAAAAAABcc/vA_R0PfQY54q3aFKKf8pDiuadDl8T40ugCNcBGAsYHQ/s700/95F423B0-88C0-4FD4-9226-0FE196AA22BF.jpeg",
      content: "OnePiece",
      author: "Monkey D'Luffy",
      rating: 3,
    },
    {
      image:
        "https://1.bp.blogspot.com/-Xcqo8OtOQgw/Xy_hfl2KX4I/AAAAAAAABbs/jbPkjUbV5bQFkpgESV5Hee3vqvLBDYUXQCNcBGAsYHQ/s640/95065F83-3704-4DD1-8292-59DEA209076C.jpeg",
      content: "Captain",
      author: "Tsubasa",
      rating: 4,
    },
  ];
  
  function getAllTestimonials() {
    const testimonialHTML = testimonials.map((testimonial) => {
      return `<div class="testimonial">
      <img src="${testimonial.image}" class="profile-testimonial" />
      <p class="quote">"${testimonial.content}"</p>
      <p class="author">- ${testimonial.author}</p>
      <p class="author">${testimonial.rating} <i class="fa-solid fa-star"></i></p>
  </div>`;
    });
  
    document.getElementById("testimonials").innerHTML = testimonialHTML.join("");
  }
  
  function getTestimonialsByRating(rating) {
    const filteredTestimonials = testimonials.filter((testimonial) => {
      if (testimonial.rating === rating) {
        return true;
      }
    });
  
    const testimonialHTML = filteredTestimonials.map((testimonial) => {
      return `<div class="testimonial">
      <img src="${testimonial.image}" class="profile-testimonial" />
      <p class="quote">"${testimonial.content}"</p>
      <p class="author">- ${testimonial.author}</p>
      <p class="author">${testimonial.rating} <i class="fa-solid fa-star"></i></p>
  </div>`;
    });
  
    document.getElementById("testimonials").innerHTML = testimonialHTML.join("");
  }
  
  getAllTestimonials();
  
  const buttonRatings = [
    {
      name: "All",
      rating: "all",
    },
    {
      name: "1",
      rating: 1,
    },
    {
      name: "2",
      rating: 2,
    },
    {
      name: "3",
      rating: 3,
    },
    {
      name: "4",
      rating: 4,
    },
    {
      name: "5",
      rating: 5,
    },
  ];
  
  function showButtonRatings() {
    const buttonRatingsHTML = buttonRatings.map((buttonRating) => {
      if (buttonRating.name === "All") {
        return `<button onclick="getAllTestimonials()" class="rating-btn">${buttonRating.name}</button>`;
      } else {
        return `<button onclick="getTestimonialsByRating(${buttonRating.rating})" class="rating-btn">
              ${buttonRating.name} <i class="fa-solid fa-star"></i>
            </button>`;
      }
    });
  
    document.getElementById("button-ratings").innerHTML =
      buttonRatingsHTML.join("");
  }
  
  showButtonRatings();