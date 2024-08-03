import Joi from "joi";

const addRecipeSchema = Joi.object({
  image: Joi.string().required().messages({
    "any.required": "Add picture",
  }),
  title: Joi.string().required().messages({
    "string.base": "Write a string",
    "any.required": "Enter title",
  }),
  description: Joi.string().required().messages({
    "string.base": "Write a string",
    "any.required": "Enter about recipe",
  }),
  cookingTime: Joi.string(),
  category: Joi.string(),
  ingredients: Joi.array()
    .items(
      Joi.object({
        unitNumber: Joi.string().required().messages({
          "any.required": "Enter number",
        }),
        name: Joi.string().required().messages({
          "any.required": "Enter ingredients",
        }),
        unitValue: Joi.string(),
        id: Joi.string(),
      })
    )
    .required()
    .messages({
      "any.required": "Ingredients is required",
    }),
  preparation: Joi.string().required().messages({
    "any.required": "Enter recipe",
  }),
});

export default addRecipeSchema;
