// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

export function getParam(key) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const parameter = urlParams.get(key);

  return parameter
}

export function renderListWithTemplate(templateFn, parentElement, list, position="afterbegin", clear=false) {
  const htmlStrings = list.map(templateFn);

  if (clear) {
    parentElement.innerHTML = "";
  }

  parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
}

export function displayCartCount() {
  const cartItems = getLocalStorage('so-cart');
  const cartCount = cartItems.length;

  if (cartCount > 0) {
    const html = `<p class="cart-count">${cartCount}</p>`

    document.querySelector('.cart').innerHTML += html;
  }
  
  return
}

export function capitalizeWords(input) {
  // Split the input string into words
  const words = input.split('-');

  // Capitalize the first letter of each word
  const capitalizedWords = words.map(word => {
    // Check if the word is not empty
    if (word.length > 0) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
    // If the word is empty, return it as is
    return word;
  });

  // Join the capitalized words back into a string
  const result = capitalizedWords.join(' ');

  return result;
}
