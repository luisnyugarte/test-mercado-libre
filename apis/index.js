const express = require("express");
var cors = require('cors');
const fetch = require('node-fetch');
const app = express();

app.use(cors());
  // Search endpoint
  app.get('/api/items', (req, res) => {
    // get search params 
    var searchParam = req.query.q || '';
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${searchParam}`)
    .then(res => res.json())
    .then(body => {
      // find categories
      const categories = [];
      body.available_filters.find((item) => {
        if (item.id === 'category') {
            item.values.forEach((category) => {
            categories.push(category.name);
          })
        }
      });
      // Find items
      const items = [];
      body.results.forEach((item) => {
        items.push({
            "id": item.id,
            "title": item.title,
            "price": {
                "currency": item.installments.currency_id,
                "amount": item.installments.amount,
                "decimals": Number((item.installments.amount + "").split(".")[1]),
            },
            "picture": item.thumbnail,
            "condition" : item.condition,
            "free-shipping": item.shipping.free_shipping
        });
      });
      // Send filters (this point is necesary for build the breadcrumb)
      const breadcrumb = [];
      body.filters.forEach((item) => {
        breadcrumb.push(item.values[0].name)
      })
        return res.send({
            "autor": {
                "name": "Luisny",
                "lastname": "Ugarte"
            },
            "breadcrumb": breadcrumb,
            "categories": categories,
            "items": items
        });
    });
  });

  // Individual item endpoint
  app.get('/api/items/:id', (req, res) => {
    var itemParam = req.params.id || '';
    fetch(`https://api.mercadolibre.com/items/${itemParam}`)
    .then(res => res.json())
    .then(body => {
      fetch(`https://api.mercadolibre.com/items/${itemParam}/description`)
      .then(res => res.json())
      .then(description => {
        return res.send({
          "autor": {
              "name": "Luisny",
              "lastname": "Ugarte"
          },
          "item": {
            "id": body.id,
            "title": body.title,
            "price": {
              "currency": body.currency_id,
              "amount": body.price,
              "decimals": Number((body.price + "").split(".")[1]) || '',
            },
            "picture": body.thumbnail,
            "condition" : body.condition,
            "free-shipping": body.shipping.free_shipping,
            "sold_quantity": body.sold_quantity,
            "description": description.plain_text
          },
      });
      });
    });

  });
  
app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});