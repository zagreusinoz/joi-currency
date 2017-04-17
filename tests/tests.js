'use strict';

const expect = require('expect');

const BaseJoi = require('joi');
const currency = require('../joi-currency');
const Joi = BaseJoi.extend(currency);


it('should still validate a string', (done) => {

    const schema = Joi.object().keys({
        'id': Joi.number(),
        'name': Joi.string().required()
    });

    const object = {
        'id': 101,
        'name': 'Arnold Schwarzenegger'
    };

    const result = Joi.validate(object, schema);

    expect(result.error).toBe(null, 'should not have an error');
    expect(result.value.name).toBeA('string');
    expect(result.value.name).toBe('Arnold Schwarzenegger');

    done();
});

it('should validate an uppercase currency', (done) => {

    const schema = Joi.object().keys({
        'id': Joi.number(),
        'name': Joi.string().required(),
        'currency': Joi.string().currency().required()
    });

    const object = {
        'id': 101,
        'name': 'Arnold Schwarzenegger',
        'currency': 'USD'
    };

    const result = Joi.validate(object, schema);

    expect(result.error).toBe(null, 'should not have an error');
    expect(result.value.currency).toBeA('string');
    expect(result.value.currency).toBe('USD');

    done();
});


it('should validate a lowercase currency', (done) => {

    const schema = Joi.object().keys({
        'id': Joi.number(),
        'name': Joi.string().required(),
        'currency': Joi.string().currency().required()
    });

    const object = {
        'id': 101,
        'name': 'Arnold Schwarzenegger',
        'currency': 'usd'
    };

    const result = Joi.validate(object, schema);

    expect(result.error).toBe(null, 'should not have an error');
    expect(result.value.currency).toBeA('string');
    expect(result.value.currency).toBe('USD');

    done();
});

it('should not validate a non-currency', (done) => {

    const schema = Joi.object().keys({
        'id': Joi.number(),
        'name': Joi.string().required(),
        'currency': Joi.string().currency().required()
    });

    const object = {
        'id': 101,
        'name': 'Arnold Schwarzenegger',
        'currency': 'AAA'
    };

    const result = Joi.validate(object, schema);

    expect(result.error).toNotBe(null, 'should have an error');
    // expect(result.value.name).toBeA('string');
    // expect(result.value.name).toBe('USD');

    done();
});