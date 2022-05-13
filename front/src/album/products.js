import { faker } from "@faker-js/faker";

// ----------------------------------------------------------------------

const PRODUCT_NAME = [
  "frontend developer",
  "backend developer",
  "machine learning engineer",
  "data scientist",
  "embedded software engineer",
  "security analyst",
  "business intelligence analyst",
  "devops engineer",
];
const skills = [
  ["Reactjs", "html", "css"],
  ["Nodejs", "Express", "Mongodb"],
  ["tensorflow", "python"],
  ["Python", "SQL", "PySpark"],
  [""],
  [""],
  [""],
  [],
];
// ----------------------------------------------------------------------
const status = ["Applied", "", "", "Applied", "Applied", "", "", "Applied"];
const products = [...Array(8)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    cover: `/mock-images/products/product_${setIndex}.jpg`,
    name: PRODUCT_NAME[index],
    status: status[index],
    skills: skills[index],
  };
});

export default products;
