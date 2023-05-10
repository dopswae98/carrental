ScrollReview({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

// ScrollReview().reveal(".h1, .heading", { origin: "top" });
// ScrollReview().reveal(".h1, .headings", { origin: "bottom" });

ScrollReview().reveal(".nav-section p", { origin: "left" });
ScrollReview().reveal(".nav-section .h1", { origin: "right" });
