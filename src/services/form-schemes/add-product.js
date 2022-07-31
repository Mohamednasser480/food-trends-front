import * as Joi from 'joi';

const addProductSchema = Joi.object({
  productName: Joi.string()
    .regex(/^[A-Za-z]+$/)
    .required()
    .messages({
      'string.pattern.base': 'Product name must be letters only',
      'string.empty': `Product name is required`,
      'any.required': `Product name is required`,
    }),
  summary: Joi.string().required().messages({
    'string.empty': `Summary cannot be an empty field`,
    'any.required': `Summary is required`,
  }),
  description: Joi.string().messages({
    'string.empty': `Summary cannot be an empty field`,
  }),
  price: Joi.number().required().messages({
    'number.base': `Please provide a price`,
    'any.required': `Price is required`,
  }),
  category: Joi.string().messages({
    'string.empty': `Summary cannot be an empty field`,
  }),
  discount: Joi.number().messages({
    'string.empty': `Summary cannot be an empty field`,
  }),
  inStock: Joi.number().required().min(2).messages({
    'number.base': `Please provide how much is your stock`,
    'any.required': `Stock is required`,
  }),
  weight: Joi.number().required().min(2).messages({
    'number.base': `Please provide your shipment weight`,
    'any.required': `Stock is required`,
  }),
});

export default addProductSchema;
