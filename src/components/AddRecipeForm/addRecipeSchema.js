import Joi from "joi";

const addRecipeSchema = Joi.object({
  image: Joi.string().required().messages({
    "string.empty": "Add picture",
    "any.required": "Add picture",
  }),
  title: Joi.string().required().messages({
    "string.base": "Write a string",
    "string.empty": "Enter title",
    "any.required": "Enter title",
  }),
  description: Joi.string().required().messages({
    "string.base": "Write a string",
    "string.empty": "Enter about recipe",
    "any.required": "Enter about recipe",
  }),
  cookingTime: Joi.string().allow(""),
  category: Joi.string().allow(""),
  ingredients: Joi.array()
    .items(
      Joi.object({
        unitNumber: Joi.string().required().messages({
          "string.empty": "Enter number",
          "any.required": "Enter number",
        }),
        name: Joi.string().required().messages({
          "string.empty": "Enter ingredients",
          "any.required": "Enter ingredients",
        }),
        unitValue: Joi.string().allow(""),
        id: Joi.string().allow(""),
      })
    )
    .required()
    .messages({
      "array.base": "Ingredients is required",
      "any.required": "Ingredients is required",
    }),
  preparation: Joi.string().required().messages({
    "string.empty": "Enter recipe",
    "any.required": "Enter recipe",
  }),
});

export default addRecipeSchema;
