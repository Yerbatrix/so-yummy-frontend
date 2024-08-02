import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import { Field, getIn, useFormikContext } from "formik";
import React from "react";
import { useSelector } from "react-redux";
import sprite from "../../images/AddRecipePage/sprite.png";
import useStyles from "./RecipeDescriptionFieldsStyles";

const RecipeDescriptionFields = ({ file, handleFile }) => {
  const styles = useStyles();
  const categoryRecipes = useSelector(selectCategoryList);
  const categories = categoryRecipes.map((el) => ({
    value: el._id,
    label: el.name,
  }));

  const time = cookTime.map((el) => ({
    value: el.time,
    label: el.time,
  }));

  const { setFieldValue, errors, touched } = useFormikContext();

  const hasError = (fieldName) =>
    getIn(touched, fieldName) && getIn(errors, fieldName);

  return (
    <Flex className={styles.descriptionFields}>
      <Box className={styles.photoFieldWrapper}>
        <Field name="photo" type="file">
          {({ field }) => (
            <Box position="relative">
              <FormControl>
                <FormLabel htmlFor={field.name}>
                  <Box className={`${styles.imgWrapper}`}>
                    {file ? (
                      <Image
                        src={URL.createObjectURL(file)}
                        alt="Uploaded"
                        borderRadius="8px"
                      />
                    ) : (
                      <svg width={64} height={64}>
                        <use href={`${sprite}#capture`} />
                        <use
                          href={`${sprite}#photo-camera`}
                          width={24}
                          height={24}
                          x={20}
                          y={20}
                        />
                      </svg>
                    )}
                  </Box>
                </FormLabel>
                <Input
                  accept="image/*"
                  type="file"
                  id={field.name}
                  display="none"
                  onChange={(event) => {
                    setFieldValue("photo", event.target.files[0]);
                    handleFile(event);
                  }}
                />
              </FormControl>
              {errors.photo && touched.photo && (
                <Text color="red.500" pt={2}>
                  {errors.photo}
                </Text>
              )}
            </Box>
          )}
        </Field>
      </Box>

      <Box className={styles.fieldWrapper}>
        <FormControl mb={8}>
          <FormLabel htmlFor="title">Enter item title</FormLabel>
          <Field
            name="title"
            as={Input}
            id="title"
            type="text"
            className={styles.input}
          />
          {errors.title && touched.title && (
            <Text color="red.500" pt={2}>
              {errors.title}
            </Text>
          )}
        </FormControl>

        <FormControl mb={8}>
          <FormLabel htmlFor="about">Enter about recipe</FormLabel>
          <Field
            name="about"
            as={Input}
            id="about"
            type="text"
            className={styles.input}
          />
          {errors.about && touched.about && (
            <Text color="red.500" pt={2}>
              {errors.about}
            </Text>
          )}
        </FormControl>

        <FormControl mb={8}>
          <FormLabel htmlFor="category">Category</FormLabel>
          <Field
            name="category"
            as={Select}
            id="category"
            placeholder="Select category"
            className={styles.select}
            onChange={(event) => setFieldValue("category", event.target.value)}
          >
            {categories.map((category) => (
              <option value={category.value} key={category.value}>
                {category.label}
              </option>
            ))}
          </Field>
          {errors.category && touched.category && (
            <Text color="red.500" pt={2}>
              {errors.category}
            </Text>
          )}
        </FormControl>

        <FormControl mb={8}>
          <FormLabel htmlFor="time">Cooking time</FormLabel>
          <Field
            name="time"
            as={Select}
            id="time"
            placeholder="Select cooking time"
            className={styles.select}
            onChange={(event) => setFieldValue("time", event.target.value)}
          >
            {time.map((t) => (
              <option value={t.value} key={t.value}>
                {t.label}
              </option>
            ))}
          </Field>
          {errors.time && touched.time && (
            <Text color="red.500" pt={2}>
              {errors.time}
            </Text>
          )}
        </FormControl>
      </Box>
    </Flex>
  );
};

export default RecipeDescriptionFields;
