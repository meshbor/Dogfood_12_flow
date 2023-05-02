const onResponse  = (res) => {
    return res.json()
} 

class Api {
  constructor(data) {
    this.baseUrl = data.baseUrl;
    this.headers = data.headers;
  }
  getProductList() {
    return fetch(`${this.baseUrl}/products`, {
        method: "GET",
        headers: this.headers,
    }).then(onResponse);
  }

  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
        headers: this.headers
    }).then(onResponse)
  }
  searchProducts(path) {
    return fetch(`${this.baseUrl}/products/search?query=${path}`, {
        headers: this.headers
    }).then((e)=>onResponse(e))
  }
  addLike(productId) {
    return fetch(`${this.baseUrl}/products/likes/${productId}`, {
      headers: this.headers,
      method: "PUT"
    }).then(onResponse)
  }
  deleteLike(productId) {
    return fetch(`${this.baseUrl}/products/likes/${productId}`, {
      headers: this.headers,
      method: "DELETE"
    }).then(onResponse)
  }
  changeProductLike(productId, isLiked) {
    return fetch(`${this.baseUrl}/products/likes/${productId}`, {
      headers: this.headers,
      method:  isLiked ? "DELETE" : 'PUT'
    }).then(onResponse)
  }
  getProductById(id) {
    return fetch(`${this.baseUrl}/products/${id}`, {
      headers: this.headers,
    }).then(onResponse)
  }
}

const config = {
    baseUrl: 'https://api.react-learning.ru',
    headers: {
        "Content-Type": "application/json",
        authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQ5YTI0ZDM5MmQzNjBiNzhhYjIzM2EiLCJpYXQiOjE2ODE4Mzg0NjUsImV4cCI6MTcxMzM3NDQ2NX0.6DlidhbPWJy05ofjiXnSJIiCxzghCucNOf3E5eGQ3Bg'
    }
}

export const api = new Api(config);

export const getProductList = () => {
  return fetch(`${config.baseUrl}/products`, {
      method: "GET",
      headers: config.headers,
  }).then(onResponse);
}

