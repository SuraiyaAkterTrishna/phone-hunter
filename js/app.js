const loadPhones = async () => {
  const url = `https://openapi.programming-hero.com/api/phones?search=iphone`;
  const res = await fetch(url);
  const data = await res.json();
  displayPhones(data.data);
};
const displayPhones = (phones) => {
  const phoneContainer = document.getElementById("phone-container");
  phones.forEach((phone) => {
    console.log(phone);
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
};
loadPhones();
