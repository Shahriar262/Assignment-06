const categoryContainer = document.getElementById("category-container");
const plantContainer = document.getElementById("plant-container");

let allPlants = [];

const loadCategory = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => {
      const categories = data.categories;
      showCategory(categories);
    })
    .catch((err) => {
      console.log(err);
    });
};

const showCategory = (categories) => {
  categoryContainer.innerHTML = `
        <li id="all-plants" class="block w-[180px] -mx-2 mt-1 px-2 py-[6px] rounded hover:bg-green-600 text-[14px] cursor-pointer hover:text-white">All Trees</li>
    `;

  categories.forEach((cat) => {
    categoryContainer.innerHTML += `
        <li id="${cat.id}" class="block w-[180px] -mx-2 mt-1 px-2 py-[6px] rounded hover:bg-green-600 text-[14px] cursor-pointer hover:text-white">${cat.category_name}</li>
        `;
  });

  const allTreesBtn = document.getElementById('all-plants');
  allTreesBtn.classList.add('bg-green-700', 'text-white');

  categoryContainer.addEventListener("click", (e) => {
    if (e.target.localName !== "li") return;



    const allLi = document.querySelectorAll("#category-container li");
    allLi.forEach((li) => {
     
    li.classList.remove("bg-green-700", "bg-green-800", "text-white");
    });

    
    e.target.classList.add("bg-green-800", "text-white");

    manageSpinner(true);

    setTimeout(() => {
      let filteredPlants;
      if (e.target.id === "all-plants") {
        filteredPlants = allPlants;
      } else {
        filteredPlants = allPlants.filter(
          (p) =>
            p.category.toLowerCase().trim() ===
            e.target.textContent.toLowerCase().trim()
        );
      }
      showPlants(filteredPlants);
    }, 100);
  });
};

//spinner fucntionality
const manageSpinner = (status) => {
  if (status == true) {
    document.getElementById("spinner").classList.remove("hidden");
    document.getElementById("plant-container").classList.add("invisible");
  } else {
    document.getElementById("spinner").classList.add("hidden");
    document.getElementById("plant-container").classList.remove("invisible");
  }
};


// modal fucntionality
const loadPlantDetail = async (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  const res = await fetch(url);
  const details = await res.json();
  displayPlantDetails(details.plants);
};

const displayPlantDetails = (plant) => {
  console.log(plant);
  const detailsBox = document.getElementById("details-container");
  detailsBox.innerHTML = `
             <div>
                <h2 class="text-[20px] md:text-2xl font-bold">${plant.name}</h2>
             </div>

             <div>
               <img src="${plant.image}" class="h-[200px] md:h-[250px] w-full object-cover object-center" alt="">
             </div>

             <div>
               <p class="text-[14px] md:text-[16px]"><span class="font-bold">Category:</span> ${plant.category}</p>
             </div>

             <div>
               <p class="text-[14px] md:text-[16px]"><span class="font-bold">Price:</span> <i class="fa-solid fa-bangladeshi-taka-sign"></i>${plant.price}</p>
             </div>

             <div>
              <p class="text-[14px] md:text-[16px]><span class="font-bold">Description:</span> ${plant.description}</p>
             </div>
   `;
  document.getElementById("my_modal_5").showModal();
};

const loadPlants = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => {
      allPlants = data.plants;
      showPlants(allPlants);
    })
    .catch((err) => {
      console.log(err);
    });
};

const showPlants = (plants) => {
  plantContainer.innerHTML = "";

  plants.forEach((plant) => {
    const description =
      plant.description.length > 100
        ? plant.description.slice(0, 100) + "..."
        : plant.description;

    plantContainer.innerHTML += `
    <div id="${plant.id}" class="bg-white w-[94%] mx-auto md:mx-0 md:w-full shadow rounded-lg p-4 flex flex-col h-[380px]">

                <img src="${plant.image}" alt="" class="h-[150px] w-full object-cover rounded mb-4">

                <h4 id="cart-title-${plant.id}" onClick="loadPlantDetail(${plant.id})" class="font-semibold mb-2 cursor-pointer">${plant.name}</h4>

                <p class="text-[12px] text-gray-500 text-left mb-4">${description}</p>

                <div class="flex justify-between items-center text-sm font-medium mb-4">
                    <span class="bg-[#DCFCE7] rounded-3xl py-1 px-3 text-[#15803D]">${plant.category}</span>
                    <span id="cart-price-${plant.id} data-price="${plant.price}"><i class="fa-solid fa-bangladeshi-taka-sign"></i>${plant.price}</span>
                </div>

                <button id="cart-${plant.id}" class="mt-auto bg-green-700 text-white py-2 rounded-3xl cursor-pointer hover:bg-green-600">Add to Cart</button>
            </div>
    `;
  });

  manageSpinner(false);
  addCartButtons();
};

//cart section functionality
let cart = [];

const addToCart = (plant) => {
const existing = cart.find((item) => item.id === plant.id);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...plant, quantity: 1 });
  }

  updateCart();
};

const updateCart = () => {
  const cartList = document.getElementById("cart-list");
  const cartTotal = document.getElementById("cart-total");
  const cartQuantity = document.getElementById("cart-quantity");

  cartList.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.className =
      "flex justify-between items-center mb-2 bg-[#F0FDF4] p-2 rounded";
    li.innerHTML = `
      <div>
        <div class="font-medium">${item.name}</div>
        <div class="text-sm text-gray-500">
          <i class="fa-solid fa-bangladeshi-taka-sign"></i>${item.price} x${item.quantity}
        </div>
      </div>
      <button class="text-gray-700 cursor-pointer" onclick="removeFromCart(${index})">
        <i class="fa-solid fa-x"></i>
      </button>
    `;
    cartList.appendChild(li);
    total += item.price * item.quantity;
  });

  cartTotal.innerHTML = `<i class="fa-solid fa-bangladeshi-taka-sign"></i>${total}`;
  cartQuantity.textContent = cart.reduce((sum, i) => sum + i.quantity, 0);
};

const removeFromCart = (index) => {
  cart.splice(index, 1);
  updateCart();
};

const addCartButtons = () => {
  allPlants.forEach((plant) => {
    const btn = document.getElementById(`cart-${plant.id}`);
    if (btn) {
      btn.addEventListener("click", () => addToCart(plant));
    }
  });
};

const btnClear = document.getElementById("btn-clear");
if (btnClear) {
  btnClear.addEventListener("click", () => {
    cart = [];
    updateCart();
  });
}

loadCategory();
loadPlants();
