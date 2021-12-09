class Product {
  // title = 'deafult';
  // imageUrl;
  // price;
  // description;

  constructor(title, imageUrl, price, description) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }
}

// console.log(new Product());

class ShoppingCart {
  items = [];

  constructor() { }

  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `<h2>Total: &#x20B9; ${this.totalAmount.toFixed(2)}</h2>`;
  }

  get totalAmount() {
    const sum = this.items.reduce((previousValue, currentItem) => previousValue + currentItem.price, 0);
    return sum;
  }

  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }

  render() {
    const cartElement = document.createElement('section');
    cartElement.innerHTML = `
      <h2>Total: &#x20B9; ${0}</h2>
      <button>Order Now!</button>
    `;
    cartElement.className = 'cart';
    this.totalOutput = cartElement.querySelector('h2');
    return cartElement;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    App.addProductToCart(this.product);
  }

  render() {
    const productElement = document.createElement('li');
    productElement.className = 'product-item';
    productElement.innerHTML = `
      <div>
        <img src="${this.product.imageUrl}" alt="${this.product.title}" />
        <div class="product-item__content"> 
          <h2>${this.product.title}</h2>
          <h3>&#x20B9; ${this.product.price}</h3>
          <p>${this.product.description}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    `;
    const addToCartButton = productElement.querySelector('button');
    addToCartButton.addEventListener('click', this.addToCart.bind(this));
    return productElement;
  }
}

class ProductList {
  Products = [
    new Product(
      'A pillow',
      'https://www.pacificcoast.com/on/demandware.static/-/Sites-pcf-master-catalog/default/dw98d1dd36/images/Pillows/prod-image_NP_Eurosquare20x20_1_907.jpg',
      300,
      'A soft pillow'
    ),
    new Product(
      'A carpet',
      'https://static.turbosquid.com/Preview/2019/01/08__08_20_42/Carpetfreesignture.jpg90372B2C-418D-4252-8B64-911283D4C396Large.jpg',
      900,
      'A carpet which u might like'
    )
  ];

  constructor() { }

  render() {
    const productList = document.createElement('ul');
    productList.className = 'product-list';

    for (const product of this.Products) {
      const produtItem = new ProductItem(product);
      const productElement = produtItem.render();
      productList.append(productElement);
    }
    return productList;
  }
}


class Shop {
  render() {
    const renderHook = document.getElementById('app');
    this.cart = new ShoppingCart();
    console.log(this);
    console.log(this.cart);
    const cartElement = this.cart.render();
    const productList = new ProductList();
    const productListElement = productList.render();
    renderHook.append(cartElement);
    renderHook.append(productListElement);
  }
}

//using static methods
class App {
  static cart;

  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();