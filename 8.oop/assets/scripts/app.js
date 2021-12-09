class Product {
  constructor(title, imageUrl, price, description) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }
}

class ElementAttributes {
  constructor(attrName, attrValue) {
    this.name = attrName;
    this.value = attrValue;
  }
}
class Component {
  constructor(renderHookID, shouldRender = false) {
    this.hookID = renderHookID;
    if (shouldRender) {
      this.render();
    }
  }

  render() { }

  createRootElement(tag, cssClasses, attributes) {
    const rootElement = document.createElement(tag);
    if (cssClasses) {
      rootElement.className = cssClasses;
    }
    if (attributes && attributes.length > 0) {
      for (const attr of attributes) {
        rootElement.setAttribute(attr.name, attr.value);
      }
    }
    document.getElementById(this.hookID).append(rootElement);
    return rootElement;
  }
}

class ShoppingCart extends Component {
  items = [];

  constructor(renderHookID) {
    super(renderHookID, false);
    this.render();
  }

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
    const cartElement = this.createRootElement('section', 'cart')
    cartElement.innerHTML = `
      <h2>Total: &#x20B9; ${0}</h2>
      <button>Order Now!</button>
    `;
    this.totalOutput = cartElement.querySelector('h2');
    return cartElement;
  }
}

class ProductItem extends Component {
  constructor(product, renderHookID) {
    super(renderHookID, false);
    this.product = product;
    this.render();
  }

  addToCart() {
    App.addProductToCart(this.product);
  }

  render() {
    const productElement = this.createRootElement('li', 'product-item')
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
  }
}

class ProductList extends Component {
  products = [];

  constructor(renderHookID) {
    super(renderHookID, true);
    this.fetchProducts();
  }

  fetchProducts() {
    this.products = [
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
    this.renderProducts();
  }

  renderProducts() {
    for (const product of this.products) {
      new ProductItem(product, 'prod-list');
    }
  }

  render() {
    this.createRootElement('ul', 'product-list', [new ElementAttributes('id', 'prod-list')]);
    if (this.products && this.products.length > 0) {
      this.renderProducts();
    }
  }
}


class Shop {
  constructor() {
    this.render();
  }
  render() {
    this.cart = new ShoppingCart('app');
    new ProductList('app');
  }
}

//using static methods
class App {
  static cart;

  static init() {
    const shop = new Shop();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();