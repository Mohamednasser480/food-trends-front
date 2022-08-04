import * as Joi from "joi";

const addProductSchema = Joi.object({
  productName: Joi.string()
    .pattern(new RegExp(/^[A-Za-z]+$/))
    .required()
    .messages({
      "string.pattern.base": "Product name must be letters only",
      "string.empty": `Please enter your email`,
      "any.required": `Please enter your email`,
    }),
  summary: Joi.string().required().messages({
    "string.empty": `Summary cannot be an empty field`,
    "any.required": `Summary is required`,
  }),
  description: Joi.string().required().messages({
    "string.empty": `Description cannot be an empty field`,
    "any.required": `Description cannot be an empty field`,
  }),
  price: Joi.number().required().messages({
    "number.base": `Please provide a price`,
    "any.required": `Price is required`,
  }),
  inStock: Joi.number().required().messages({
    "number.base": `Please provide how much is your stock`,
    "any.required": `Stock is required`,
  }),
  category: Joi.string().required().messages({
    "string.empty": `Description cannot be an empty field`,
    "any.required": `Description cannot be an empty field`,
  }),
  weight: Joi.number().messages({
    "number.base": `Please provide how much weight`,
    "any.required": `Weight is required`,
  }),
  discount: Joi.number().messages({
    "number.base": `Please provide how much discount`,
  }),
});

export default addProductSchema;
