$("#myForm").validate({
    rules: {
        title: {
            required: true
        },
        price: {
            required: true
        }
    }
})
const seedArr = [
  {
    product_id: 1,
    name: "Smartphone",
    description: "High-end smartphone with advanced features.",
    price: 599.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI2FiOAgw_LycADPAh6qz-O9_yl4VOALeRhA&s",
    category: "Electronics",
  },
  {
    product_id: 2,
    name: "Laptop",
    description: "Powerful laptop for work and gaming.",
    price: 999.99,
    image:
      "https://png.pngtree.com/png-vector/20250522/ourmid/pngtree-modern-laptop-computer-with-screen-open-technology-digital-device-png-image_16345445.png",
    category: "Electronics",
  },
  {
    product_id: 3,
    name: "Wireless Headphones",
    description: "Premium wireless headphones with noise-cancellation.",
    price: 149.99,
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/024/558/883/small_2x/black-wireless-headphones-isolated-on-transparent-background-ai-generated-png.png",
    category: "Electronics",
  },
  {
    product_id: 4,
    name: "Smartwatch",
    description: "Feature-packed smartwatch with fitness tracking.",
    price: 199.99,
    image:
      "https://png.pngtree.com/png-clipart/20250104/original/pngtree-smart-watch-png-image_18709852.png",
    category: "Wearables",
  },
  {
    product_id: 5,
    name: "Professional DSLR Camera",
    description: "High-quality DSLR camera for photography enthusiasts.",
    price: 499.99,
    image:
      "https://i.pinimg.com/originals/52/f7/86/52f786c1bf9b23e0beed47ed45c0dd02.jpg",
    category: "Cameras",
  },
];

let arr = [];
let searchQuery = "";
let activeCategory = "All";
let sortMode = "none";

function loadProducts() {
  try {
    const raw = localStorage.getItem("products");
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed;
    return null;
  } catch (e) {
    return null;
  }
}

function saveProducts() {
  try {
    localStorage.setItem("products", JSON.stringify(arr));
  } catch (e) {
    // ignore storage errors
  }
}

arr = loadProducts() || seedArr.slice();
function getVisibleProducts() {
  let list = arr.slice();
  // filter by search
  if (searchQuery.trim()) {
    const q = searchQuery.trim().toLowerCase();
    list = list.filter(p =>
      String(p.name || "").toLowerCase().includes(q) ||
      String(p.category || "").toLowerCase().includes(q) ||
      String(p.description || "").toLowerCase().includes(q)
    );
  }
  // filter by category
  if (activeCategory && activeCategory !== "All") {
    list = list.filter(p => String(p.category) === activeCategory);
  }
  // sort
  if (sortMode === "name_asc") {
    list.sort((a,b) => String(a.name).localeCompare(String(b.name)));
  } else if (sortMode === "price_asc") {
    list.sort((a,b) => Number(a.price) - Number(b.price));
  } else if (sortMode === "price_desc") {
    list.sort((a,b) => Number(b.price) - Number(a.price));
  } else if (sortMode === "newest") {
    list.sort((a,b) => Number(b.product_id) - Number(a.product_id));
  } else if (sortMode === "oldest") {
    list.sort((a,b) => Number(a.product_id) - Number(b.product_id));
  }
  return list;
}

function renderCategories() {
  const sel = document.getElementById("categoryFilter");
  if (!sel) return;
  const unique = ["All", ...Array.from(new Set(arr.map(p => String(p.category))))];
  const current = sel.value || "All";
  sel.innerHTML = unique.map(c => `<option value="${c}">${c}</option>`).join("");
  sel.value = unique.includes(current) ? current : "All";
}

function existProduct() {
  let str = "";
  const list = getVisibleProducts();
  list.forEach(item => {
    str += `<div class="col-3 mb-3">
                      <div class="card h-100">
                          <div class=" w-100" style="height: 300px;">
                              <img src="${item.image}" class="card-img-top w-100 object-fit-cover h-100 img-fluid" alt="...">
                          </div>
                          <div class="card-body">
                              <h5 class="card-title">${item.name}</h5>
                              <p class="card-text">${item.description}</p>
                              <p>Category: ${item.category}</p>
                              <p>${item.price}</p>
                              <button type="button" class="btn btn-primary me-2" onclick="editProd(${item.product_id})">Edit</button>
                              <button type="button" class="btn btn-danger" onclick="removeProd(${item.product_id})">Remove</button>
                          </div>
                      </div>
                  </div>`;
  })
  document.getElementById("existProd").innerHTML = str;
};
existProduct();

// Wire search, filter, sort
document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  const sortSelect = document.getElementById("sortSelect");
  if (searchInput) {
    searchInput.addEventListener("input", function() {
      searchQuery = searchInput.value || "";
      existProduct();
    });
  }
  if (categoryFilter) {
    renderCategories();
    categoryFilter.addEventListener("change", function() {
      activeCategory = categoryFilter.value || "All";
      existProduct();
    });
  }
  if (sortSelect) {
    sortSelect.addEventListener("change", function() {
      sortMode = sortSelect.value || "none";
      existProduct();
    });
  }
});

let editingId = null;

window.removeProd = (id) => {
  const indexToRemove = arr.findIndex(product => product.product_id === id);
  if (indexToRemove !== -1) {
    arr.splice(indexToRemove, 1);
    existProduct();
    saveProducts();
    renderCategories();
  }
}

window.editProd = (id) => {
  const product = arr.find(item => item.product_id === id);
  if (!product) return;
  editingId = id;
  const titleEl = document.getElementById("title");
  const priceEl = document.getElementById("price");
  const categoryEl = document.getElementById("category");
  const imageEl = document.getElementById("image");
  titleEl.value = product.name;
  priceEl.value = product.price;
  categoryEl.value = product.category;
  if (imageEl) {
    imageEl.value = "";
  }
  const submitBtn = document.querySelector('#myForm button[type="submit"], #myForm button');
  if (submitBtn) submitBtn.textContent = "Update Product";
  titleEl.focus();
}


$("#myForm").submit(function(e) {
  e.preventDefault();
  if (!$("#myForm").valid()) {
    return;
  }
  let titleEl = document.getElementById("title");
  let priceEl = document.getElementById("price");
  let imageEl = document.getElementById("image");
  let categoryEl = document.getElementById("category");
  let imageUrl = imageEl && imageEl.files && imageEl.files[0] ? URL.createObjectURL(imageEl.files[0]) : "";

  if (editingId !== null) {
    const index = arr.findIndex(p => p.product_id === editingId);
    if (index !== -1) {
      arr[index].name = titleEl.value.trim();
      arr[index].price = parseFloat(priceEl.value);
      arr[index].category = categoryEl.value.trim();
      if (imageEl && imageEl.files && imageEl.files[0]) {
        const reader = new FileReader();
        reader.onload = function(ev) {
          arr[index].image = ev.target.result;
          saveProducts();
          existProduct();
          renderCategories();
        };
        reader.readAsDataURL(imageEl.files[0]);
      } else {
        // No new image chosen; just save and re-render
        saveProducts();
        existProduct();
        renderCategories();
      }
    }
    editingId = null;
    const submitBtn = document.querySelector('#myForm button[type="submit"], #myForm button');
    if (submitBtn) submitBtn.textContent = "Add Product";
  } else {
    let product_id = arr.length ? Math.max(...arr.map(p => p.product_id)) + 1 : 1;
    const newProd = {
      product_id: product_id,
      name: titleEl.value.trim(),
      description: "",
      price: parseFloat(priceEl.value),
      image: "",
      category: categoryEl.value.trim()
    };
    if (imageEl && imageEl.files && imageEl.files[0]) {
      const reader = new FileReader();
      reader.onload = function(ev) {
        newProd.image = ev.target.result;
        arr.push(newProd);
        saveProducts();
        existProduct();
      };
      reader.readAsDataURL(imageEl.files[0]);
    } else {
      // keep empty or any typed URL value if provided (fallback)
      if (imageEl && imageEl.value) newProd.image = imageEl.value.trim();
      arr.push(newProd);
      saveProducts();
      existProduct();
      renderCategories();
    }
  }

  $("#myForm")[0].reset();
  // for cases where FileReader async branch handled render, we already re-rendered
})



