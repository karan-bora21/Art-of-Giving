// Part-3



// Part-4
// Create the observer like the examples above
const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('img-1');
        return;
      }
  
      entry.target.classList.remove('img-1');
    });
  });
  
  // Get multiple elements instead of a single one using "querySelectorAll"
  const squares1 = document.querySelectorAll('.square1');
  
  // Loop over the elements and add each one to the observer
  squares1.forEach((element) => observer1.observe(element));

  // Create the observer like the examples above
const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('txt-1');
        return;
      }
  
      entry.target.classList.remove('txt-1');
    });
  });
  
  // Get multiple elements instead of a single one using "querySelectorAll"
  const squares2 = document.querySelectorAll('.square2');
  
  // Loop over the elements and add each one to the observer
  squares2.forEach((element) => observer2.observe(element));


  const observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.square3');
  
      if (entry.isIntersecting) {
        square.classList.add('txt-2');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square.classList.remove('txt-2');
    });
  });
  
  observer3.observe(document.querySelector('.square-wrapper'));

  const observer4 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.square4');
  
      if (entry.isIntersecting) {
        square.classList.add('img-2');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square.classList.remove('img-2');
    });
  });
  
  observer4.observe(document.querySelector('.square-wrapper'));




  


  