let allProducts = [];

const searchProductBtn = document.getElementById('searchProduct');
const addProductBtn = document.getElementById('addProduct');
const productList = document.getElementById('productList');

const displayProducts = (products) => {
    productList.innerHTML = '';
    products.forEach((el, index) => {
        const productItem = document.createElement('tr');

        productItem.innerHTML =
            `<td>${el.category}</td><td>${el.name}</td><td>${el.price}</td><td colspan=1 rowspan=1>${el.description}</td><td>${el.available}</td>` +
            `<td><button type="button" class="btn btn-danger delete">Delete</button><button type="button" class="btn btn-secondary edit">Edit</button></td>`;

        productItem.querySelector('.edit').addEventListener('click', () => {
            document.getElementById('category').value = el.category;
            document.getElementById('productName').value = el.name;
            document.getElementById('productPrice').value = el.price;
            document.getElementById('description').value = el.description;
            document.getElementById('availability').value =
                el.available === 'Yes';
            products.splice(index, 1);
            displayProducts();
        });

        productItem.querySelector('.delete').addEventListener('click', () => {
            products.splice(index, 1);
            displayProducts();
        });

        productList.appendChild(productItem);
    });
};

const searchProducts = () => {};

addProductBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let productCategoryId = document.getElementById('category');
    let productNameId = document.getElementById('productName');
    let productPriceId = document.getElementById('productPrice');
    let descriptionId = document.getElementById('description');
    let availabilityId = document.getElementById('availability');

    let productCategory = productCategoryId.value;
    let productName = productNameId.value.trim();
    let productPrice = productPriceId.value;
    let description = descriptionId.value;
    if (productCategory === 'Choose one..') {
        alert('Please choose a category!!');
        return;
    } else if (productName === '') {
        alert('Please provide a name!!');
        return;
    } else if (productPrice <= 0) {
        alert('Please provide a valid price!!');
        return;
    } else if (description === '') {
        alert('Please provide a description!!');
        return;
    }
    allProducts.push({
        category: productCategory,
        name: productName,
        price: productPrice,
        description: description,
        available: availabilityId.value === 'on' ? 'Yes' : 'No',
    });

    displayProducts(allProducts);

    productCategoryId.value = 'Choose one..';
    productNameId.value = '';
    productPriceId.value = '';
    descriptionId.value = '';
    availabilityId.value = false;
});

searchProductBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let productNameId = document.getElementById('searchByName');
    let productCategoryId = document.getElementById('searchByCategory');

    let productCategory = productCategoryId.value;
    let productName = productNameId.value.trim();

    let products = allProducts;
    if (productName != '')
        products = products.filter((el) => el.name === productName);
    if (productCategory != 'Choose one..')
        products = products.filter((el) => el.category === productCategory);

    displayProducts(products);

    productCategoryId.value = 'Choose one..';
    productNameId.value = '';
});
