# Joi Currency Plugin

> A [Joi](https://github.com/hapijs/joi) plugin that validates if the string is an [ISO 3166](https://en.wikipedia.org/wiki/ISO_3166) currency code.


## Installing
```shell
npm install joi-nochange --save
```

## Usage

```js
const BaseJoi = require('joi');
const currency = require('../joi-currency');
const Joi = BaseJoi.extend(currency); // indicate this plugin extends Joi

const product = {
    id: 'k1773y',
    name: 'Hello Kitty Backpack',
    price: 125,
    currency: 'XYZ'
    };

const schema = Joi.object().keys({
    id: Joi.string().noChange(origObj).required().label('id'),
    name: Joi.string().required().label('name'),
    price: Joi.number().positive().integer().label('price),
    currency: Joi.string().currency().required().label('currency)
    }
});

var result = schema.validate(product);

// check and throw if there is an error (there is)
if (result.error) {
    throw result.error; // Joi Error
}
// object is available at `result.value`
```