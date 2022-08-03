import * as Joi from 'joi';

const registerSchema = Joi.object({
  email: Joi.string().required().messages({
    'string.empty': `Please enter your email`,
    'any.required': `Please enter your email`,
  }),
  password: Joi.string().min(6).required().messages({
    'string.empty': `Please enter your password`,
    'string.min': 'Password must be at least 6 characters',
    'any.required': `Please enter your password`,
  }),
  name: Joi.string().required(),
  storeName: Joi.string().required(),
});

export default registerSchema;
