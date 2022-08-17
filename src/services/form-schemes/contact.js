import * as Joi from 'joi';

const contactUsSchema = Joi.object({
  name: Joi.string().required().messages({
    'string.empty': `Please enter your name`,
    'any.required': `Please enter your name`,
  }),
  email: Joi.string().required().messages({
    'string.empty': `Please enter your email`,
    'any.required': `Please enter your email`,
  }),
  message: Joi.string().required().messages({
    'string.empty': `Please enter your message`,
    'any.required': `Please enter your password`,
  }),
});

export default contactUsSchema;
