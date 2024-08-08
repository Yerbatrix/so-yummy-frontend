import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryList } from "../../../redux/categories/operations";
import { selectCategoryList } from "../../../redux/categories/selectors";
import {
  DescrCategoryItem,
  DescrCategoryList,
  DescrError,
  DescrFileInput,
  DescrFileInputWrap,
  DescrImage,
  DescrInput,
  DescrInputWrap,
  DescrLabel,
  DescrOneInputWrap,
  DescrRecipeImage,
  DescrSelect,
  DescrSelectText,
  DescrSelectWrap,
  DescrTimeItem,
  DescrTimeList,
  DescrWrap,
} from "./RecipeDescriptionFields.styled";

import { IoIosArrowDown } from "react-icons/io";
import photoDesktop from "../../../images/AddRecipePage/photo-input-desktop.png";
import photoMobile from "../../../images/AddRecipePage/photo-input-mobile.png";
import cookTime from "../../AddRecipeForm/cookTime.json";

const RecipeDescriptionFields = ({
  title,
  description,
  time,
  category,
  onInputImageSet,
  onTitleChange,
  onDescriptionChange,
  onTimeSet,
  onCategorySet,
  errors,
}) => {
  const dispatch = useDispatch();
  const categoriesList = useSelector(selectCategoryList);

  useEffect(() => {
    dispatch(getCategoryList());
  }, [dispatch]);

  const [image, setImage] = useState("");
  const [timeIsActive, setTimeIsActive] = useState(false);
  const [categoryIsActive, setCategoryIsActive] = useState(false);

  const onFileInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", (event) => {
      const buffer = event.target.result;
      const blob = new Blob([buffer], { type: file.type });
      const url = URL.createObjectURL(blob);
      setImage(url);
    });
    reader.readAsArrayBuffer(file);

    onInputImageSet(event);
  };

  const toggleTimeList = () => {
    setTimeIsActive(!timeIsActive);
  };

  const toggleCategory = () => {
    setCategoryIsActive(!categoryIsActive);
  };

  const setTime = (value) => {
    onTimeSet(value);
    setTimeIsActive(false);
  };

  const setCategory = (value) => {
    onCategorySet(value);
    setCategoryIsActive(false);
  };

  return (
    <DescrWrap>
      <DescrFileInputWrap onChange={(event) => onFileInputChange(event)}>
        <label htmlFor="photo">
          <DescrImage>
            <source srcSet={photoMobile} media="(max-width: 1439px)" />
            <source srcSet={photoDesktop} media="(min-width: 1440px)" />
            <img src={photoMobile} alt="addphoto" />
          </DescrImage>
        </label>
        <DescrFileInput type="file" accept=".jpg, .jpeg, .png" id="photo" />
        {image && (
          <DescrRecipeImage src={image} alt="recipeImage"></DescrRecipeImage>
        )}
        {errors.image && <p style={{ color: "red" }}>{errors.image}</p>}
      </DescrFileInputWrap>

      <DescrInputWrap>
        <DescrOneInputWrap>
          <DescrInput
            type="text"
            id="title"
            name="title"
            placeholder="Enter item title"
            onChange={(e) => onTitleChange(e.target.value)}
            value={title}
          />
          {errors.title && <DescrError>{errors.title}</DescrError>}
        </DescrOneInputWrap>
        <DescrOneInputWrap>
          <DescrInput
            type="text"
            id="about"
            name="about"
            placeholder="Enter about recipe"
            onChange={(e) => onDescriptionChange(e.target.value)}
            value={description}
          />
          {errors.description && <DescrError>{errors.description}</DescrError>}
        </DescrOneInputWrap>
        <DescrSelectWrap onClick={toggleCategory}>
          <DescrLabel>Category</DescrLabel>
          <DescrSelect>
            <DescrSelectText>{category}</DescrSelectText>
            <IoIosArrowDown size="18" />
          </DescrSelect>
          {categoryIsActive && (
            <DescrCategoryList>
              {categoriesList.map((item, index) => (
                <DescrCategoryItem
                  key={index}
                  onClick={() => setCategory(item.title)}
                >
                  {item.title}
                </DescrCategoryItem>
              ))}
            </DescrCategoryList>
          )}
        </DescrSelectWrap>
        <DescrSelectWrap onClick={toggleTimeList}>
          <DescrLabel>Cooking time</DescrLabel>
          <DescrSelect>
            <DescrSelectText>{time}</DescrSelectText>
            <IoIosArrowDown size="18" />
          </DescrSelect>
          {timeIsActive && (
            <DescrTimeList>
              {cookTime.map((item) => (
                <DescrTimeItem key={item} onClick={() => setTime(item)}>
                  {item}
                </DescrTimeItem>
              ))}
            </DescrTimeList>
          )}
        </DescrSelectWrap>
      </DescrInputWrap>
    </DescrWrap>
  );
};

export default RecipeDescriptionFields;
