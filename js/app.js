const loadPhones = async (searchText, dataLimit) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  const res = await fetch(url);
  const data = await res.json();
  displayPhones(data.data, dataLimit);
};
const displayPhones = (phones, dataLimit) => {
  const phoneContainer = document.getElementById("phone-container");
  phoneContainer.innerHTML = ``; 
  const showAll = document.getElementById('show-all');
  if(dataLimit && phones.length > 10){
    //   display 10 phone only
    phones = phones.slice(0, 10);
    showAll.classList.remove('d-none');
  }
  else{
    showAll.classList.add('d-none');
  }
  
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
          <p>Find here the list of all mobile phones brands of India and Worldwide, Also check latest smartphones from top & best company like Samsung, Apple, Xiaomi.</p>
          <button onclick="loadDetails('${phone.slug}')" class="btn btn-primary">Show details</button>
        </div>
      </div>
        `;
    phoneContainer.appendChild(phoneDiv);
  });
  //  stop spinner
  toggleSpinner(false);
};
const processSearch = (dataLimit) => {
  toggleSpinner(true);
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  loadPhones(searchText, dataLimit);
}
// handle search button clicked
document.getElementById("btn-search").addEventListener("click", function () {
  processSearch(10);
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
// not the best way to show all 
document.getElementById('btn-show-all').addEventListener('click', function(){
  processSearch();
});
// load phone details 
const loadDetails = async (id) => {
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  displayDetails(data.data);
};
const displayDetails = (phone) => {
  console.log(phone);
}
