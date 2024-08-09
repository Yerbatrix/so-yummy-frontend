import Joi from "joi";

const addRecipeSchema = Joi.object({
  image: Joi.string().uri().required().label("Image URL"),
  title: Joi.string().required().label("Title"),
  description: Joi.string().required().label("Description"),
  cookTime: Joi.string().required().label("Cook Time"),
  category: Joi.string().required().label("Category"),
  ingredients: Joi.array()
    .items(
      Joi.object({
        id: Joi.string().required(),
        unitValue: Joi.string().required(),
        unitNumber: Joi.string().required(),
        name: Joi.string().required(),
      })
    )
    .required()
    .label("Ingredients"),
  preparation: Joi.string().required().label("Preparation"),
});

export default addRecipeSchema;
