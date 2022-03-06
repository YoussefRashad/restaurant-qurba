import Joi from "joi";

const CreateValidator = Joi.object({
  code: Joi.string().required(),
  name: Joi.string().required(),
  age: Joi.number().required(),
  location: Joi.string().required(),
  website: Joi.string().required()
});

export default CreateValidator;