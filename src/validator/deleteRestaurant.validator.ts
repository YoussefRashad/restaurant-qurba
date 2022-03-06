import Joi from "joi";

const deleteValidator = Joi.object({
  code: Joi.string().required()
});

export default deleteValidator;