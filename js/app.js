const loadPhones = async (searchText) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  const res = await fetch(url);
  const data = await res.json();
  displayPhones(data.data);
};
const displayPhones = (phones) => {
  const phoneContainer = document.getElementById("phone-container");
  phoneContainer.innerHTML = ``;
  //   display 20 phone only
  phones = phones.slice(0, 20);
  //   display no phone found
  const noFound = document.getElementById("not-found-message");
  if (phones.length === 0) {
    noFound.classList.remove("d-none");
  } else {
    noFound.classList.add("d-none");
  }
  //   display all phone
  phones.forEach((phone) => {
    // console.log(phone);
    const phoneDiv = document.createElement("div");
    phoneDiv.classList.add("col");
    phoneDiv.innerHTML = `
        <div class="card h-100">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${phone.phone_name}</h5>
        </div>
      </div>
        `;
    phoneContainer.appendChild(phoneDiv);
  });
  //  stop spinner
  toggleSpinner(false);
};
// handle search button clicked
document.getElementById("btn-search").addEventListener("click", function () {
  // spinner start
  toggleSpinner(true);
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  loadPhones(searchText);
});
// loading spinner
const toggleSpinner = (isLoading) => {
  const loaderSection = document.getElementById("loader");
  if (isLoading) {
    loaderSection.classList.remove("d-none");
  } else {
    loaderSection.classList.add("d-none");
  }
};
