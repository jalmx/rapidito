import uid from "uid";

const generateNumber = (limit) => Math.floor(limit * Math.random());
const list = [
  {
    id: uid(10),
    title: "Pastel de Chocolate de Eva",
    abstract: "Magna tempor cupidatat nisi commodo sint.",
    imgUrl: "https://picsum.photos/400",
    body:
      "<p> Voluptate esse et cupidatat eu. Aliqua veniam commodo cupidatat ullamco cillum voluptate aute.</p><p> Voluptate esse et cupidatat eu. Aliqua veniam commodo cupidatat ullamco cillum voluptate aute.</p><p> Voluptate esse et cupidatat eu. Aliqua veniam commodo cupidatat ullamco cillum voluptate aute.</p><p> Voluptate esse et cupidatat eu. Aliqua veniam commodo cupidatat ullamco cillum voluptate aute.</p>",
    date: new Date(),
    precie: generateNumber(200),
    start: generateNumber(10),
  },
  {
    id: uid(10),
    title: "Pastel de Chocolate de Eva",
    abstract: "Magna tempor cupidatat nisi commodo sint.",
    imgUrl: "https://picsum.photos/400",
    body:
      "<p> Voluptate esse et cupidatat eu. Aliqua veniam commodo cupidatat ullamco cillum voluptate aute.</p><p> Voluptate esse et cupidatat eu. Aliqua veniam commodo cupidatat ullamco cillum voluptate aute.</p><p> Voluptate esse et cupidatat eu. Aliqua veniam commodo cupidatat ullamco cillum voluptate aute.</p><p> Voluptate esse et cupidatat eu. Aliqua veniam commodo cupidatat ullamco cillum voluptate aute.</p>",
    date: new Date(),
    precie: generateNumber(200),
    start: generateNumber(10),
  },
  {
    id: uid(10),
    title: "Pastel de Chocolate de Eva",
    abstract: "Magna tempor cupidatat nisi commodo sint.",
    imgUrl: "https://picsum.photos/400",
    body:
      "<p> Voluptate esse et cupidatat eu. Aliqua veniam commodo cupidatat ullamco cillum voluptate aute.</p><p> Voluptate esse et cupidatat eu. Aliqua veniam commodo cupidatat ullamco cillum voluptate aute.</p><p> Voluptate esse et cupidatat eu. Aliqua veniam commodo cupidatat ullamco cillum voluptate aute.</p><p> Voluptate esse et cupidatat eu. Aliqua veniam commodo cupidatat ullamco cillum voluptate aute.</p>",
    date: new Date(),
    precie: generateNumber(200),
    start: generateNumber(10),
  },
  {
    id: uid(10),
    title: "Carne de chinameca",
    abstract: "Magna tempor cupidatat nisi commodo sint.",
    imgUrl: "https://picsum.photos/400",
    body:
      "<p> Voluptate esse et cupidatat eu. Aliqua veniam commodo cupidatat ullamco cillum voluptate aute.</p><p> Voluptate esse et cupidatat eu. Aliqua veniam commodo cupidatat ullamco cillum voluptate aute.</p><p> Voluptate esse et cupidatat eu. Aliqua veniam commodo cupidatat ullamco cillum voluptate aute.</p><p> Voluptate esse et cupidatat eu. Aliqua veniam commodo cupidatat ullamco cillum voluptate aute.</p>",
    date: new Date(),
    precie: generateNumber(200),
    start: generateNumber(10),
  },
  {
    id: uid(10),
    title: "Mole de doañ lety",
    abstract: "Magna tempor cupidatat nisi commodo sint.",
    imgUrl: "https://picsum.photos/400",
    body:
      "<p> Voluptate esse et cupidatat eu. Aliqua veniam commodo cupidatat ullamco cillum voluptate aute.</p><p> Voluptate esse et cupidatat eu. Aliqua veniam commodo cupidatat ullamco cillum voluptate aute.</p><p> Voluptate esse et cupidatat eu. Aliqua veniam commodo cupidatat ullamco cillum voluptate aute.</p><p> Voluptate esse et cupidatat eu. Aliqua veniam commodo cupidatat ullamco cillum voluptate aute.</p>",
    date: new Date(),
    precie: generateNumber(200),
    start: generateNumber(10),
  },
  {
    id: uid(10),
    title: "Pastel de Chocolate de Eva",
    abstract: "Magna tempor cupidatat nisi commodo sint.",
    imgUrl: "https://picsum.photos/400",
    body:
      "<p> Voluptate esse et cupidatat eu. Aliqua veniam commodo cupidatat ullamco cillum voluptate aute.</p><p> Voluptate esse et cupidatat eu. Aliqua veniam commodo cupidatat ullamco cillum voluptate aute.</p><p> Voluptate esse et cupidatat eu. Aliqua veniam commodo cupidatat ullamco cillum voluptate aute.</p><p> Voluptate esse et cupidatat eu. Aliqua veniam commodo cupidatat ullamco cillum voluptate aute.</p>",
    date: new Date(),
    precie: generateNumber(200),
    start: generateNumber(10),
  },
  {
    id: uid(10),
    title: "Pastel de Chocolate de Eva",
    abstract: "Magna tempor cupidatat nisi commodo sint.",
    imgUrl: "https://picsum.photos/400",
    body:
      "<p> Voluptate esse et cupidatat eu. Aliqua veniam commodo cupidatat ullamco cillum voluptate aute.</p><p> Voluptate esse et cupidatat eu. Aliqua veniam commodo cupidatat ullamco cillum voluptate aute.</p><p> Voluptate esse et cupidatat eu. Aliqua veniam commodo cupidatat ullamco cillum voluptate aute.</p><p> Voluptate esse et cupidatat eu. Aliqua veniam commodo cupidatat ullamco cillum voluptate aute.</p>",
    date: new Date(),
    precie: generateNumber(200),
    start: generateNumber(10),
  },
  {
    id: uid(10),
    title: "Pastel de Chocolate de Eva",
    abstract: "Magna tempor cupidatat nisi commodo sint.",
    imgUrl: "https://picsum.photos/400",
    body:
      "<p> Voluptate esse et cupidatat eu. Aliqua veniam commodo cupidatat ullamco cillum voluptate aute.</p><p> Voluptate esse et cupidatat eu. Aliqua veniam commodo cupidatat ullamco cillum voluptate aute.</p><p> Voluptate esse et cupidatat eu. Aliqua veniam commodo cupidatat ullamco cillum voluptate aute.</p><p> Voluptate esse et cupidatat eu. Aliqua veniam commodo cupidatat ullamco cillum voluptate aute.</p>",
    date: new Date(),
    precie: generateNumber(200),
    start: generateNumber(10),
  },
  {
    id: uid(10),
    title: "Pastel de Chocolate de Eva",
    abstract: "Magna tempor cupidatat nisi commodo sint.",
    imgUrl: "https://picsum.photos/400",
    body:
      "<p> Voluptate esse et cupidatat eu. Aliqua veniam commodo cupidatat ullamco cillum voluptate aute.</p><p> Voluptate esse et cupidatat eu. Aliqua veniam commodo cupidatat ullamco cillum voluptate aute.</p><p> Voluptate esse et cupidatat eu. Aliqua veniam commodo cupidatat ullamco cillum voluptate aute.</p><p> Voluptate esse et cupidatat eu. Aliqua veniam commodo cupidatat ullamco cillum voluptate aute.</p>",
    date: new Date(),
    precie: generateNumber(200),
    start: generateNumber(10),
  },
];

export default list;
