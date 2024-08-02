import Joi from "joi";
import cookTime from "../src/const/timeCook";

const timeValidation = cookTime.map((el) => el.time);

const addRecipeSchema = Joi.object({
  photo: Joi.any()
    .required()
    .custom((value, helpers) => {
      if (value.size > 3000000) {
        return helpers.message("To limit the file size to a maximum of 3MB");
      }
      return value;
    })
    .custom((value, helpers) => {
      const validTypes = [
        "image/jpeg",
        "image/jpg",
        "image/bmp",
        "image/png",
        "image/svg",
        "image/webp",
      ];
      if (!validTypes.includes(value.type)) {
        return helpers.message(
          "Only the following formats are accepted: .jpeg, .jpg, .bmp, .png, .svg, and .webp"
        );
      }
      return value;
    }),

  title: Joi.string()
    .required()
    .pattern(/[а-яА-Яa-zA-Z]+/, "letters")
    .messages({
      "string.pattern.name": "Title must contain letters",
      "any.required": "Please enter the recipe title",
    }),

  about: Joi.string()
    .required()
    .pattern(/[а-яА-Яa-zA-Z]+/, "letters")
    .messages({
      "string.pattern.name": "Describe must contain letters",
      "any.required": "Please describe the recipe",
    }),

  category: Joi.string().required().messages({
    "any.required": "Please choose a category for your recipe",
  }),

  time: Joi.string()
    .valid(...timeValidation)
    .required()
    .messages({
      "any.only": "Please select the cooking time",
      "any.required": "Please select the cooking time",
    }),

  ingredients: Joi.array().items(
    Joi.object({
      value: Joi.string().required().messages({
        "any.required": "Please select an ingredient",
      }),
      measure: Joi.string().required().messages({
        "any.required": "Please enter the measure",
      }),
      label: Joi.string().optional(),
    })
  ),

  preparation: Joi.array()
    .items(
      Joi.string()
        .required()
        .custom((value, helpers) => {
          if (!value.trim()) {
            return helpers.message("Please enter the recipe");
          }
          return value;
        })
    )
    .messages({
      "any.required": "Please enter the recipe",
    }),
});

export default addRecipeSchema;
