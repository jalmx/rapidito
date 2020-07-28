import uid from 'uid'
import moment from "moment";

const getDate = () =>
  moment()
    .subtract(Math.floor(Math.random() * 100), "days")
    .calendar();


const messages = [
  {
    id: uid(10),
    name: "Consequat anim nisi dolor mollit.",
    email: "email@correo.com",
    date: getDate(),
    phone: "98328748923",
    message: "Id proident tempor amet officia ad laborum occaecat mollit aliquip. Ea magna est sit consectetur nostrud veniam anim nisi mollit. Dolore magna ullamco laboris dolore quis ad officia. Occaecat incididunt tempor eu minim. Esse eu dolor deserunt incididunt ullamco est dolore proident excepteur ad voluptate irure. Deserunt et occaecat laborum fugiat ut aliquip quis proident amet id enim aliqua. Et enim et consequat adipisicing commodo sit laboris consequat eu sit aute."
  },
  {
    id: uid(10),
    name: "Consequat anim nisi dolor mollit.",
    email: "email@correo.com",
    date: getDate(),
    phone: "98328748923",
    message: "Id proident tempor amet officia ad laborum occaecat mollit aliquip. Ea magna est sit consectetur nostrud veniam anim nisi mollit. Dolore magna ullamco laboris dolore quis ad officia. Occaecat incididunt tempor eu minim. Esse eu dolor deserunt incididunt ullamco est dolore proident excepteur ad voluptate irure. Deserunt et occaecat laborum fugiat ut aliquip quis proident amet id enim aliqua. Et enim et consequat adipisicing commodo sit laboris consequat eu sit aute."
  },
  {
    id: uid(10),
    name: "Consequat anim nisi dolor mollit.",
    email: "email@correo.com",
    date: getDate(),
    phone: "98328748923",
    message: "Id proident tempor amet officia ad laborum occaecat mollit aliquip. Ea magna est sit consectetur nostrud veniam anim nisi mollit. Dolore magna ullamco laboris dolore quis ad officia. Occaecat incididunt tempor eu minim. Esse eu dolor deserunt incididunt ullamco est dolore proident excepteur ad voluptate irure. Deserunt et occaecat laborum fugiat ut aliquip quis proident amet id enim aliqua. Et enim et consequat adipisicing commodo sit laboris consequat eu sit aute."
  },
  {
    id: uid(10),
    name: "Consequat anim nisi dolor mollit.",
    email: "email@correo.com",
    date: getDate(),
    phone: "98328748923",
    message: "Id proident tempor amet officia ad laborum occaecat mollit aliquip. Ea magna est sit consectetur nostrud veniam anim nisi mollit. Dolore magna ullamco laboris dolore quis ad officia. Occaecat incididunt tempor eu minim. Esse eu dolor deserunt incididunt ullamco est dolore proident excepteur ad voluptate irure. Deserunt et occaecat laborum fugiat ut aliquip quis proident amet id enim aliqua. Et enim et consequat adipisicing commodo sit laboris consequat eu sit aute."
  },
  {
    id: uid(10),
    name: "Consequat anim nisi dolor mollit.",
    email: "email@correo.com",
    date: getDate(),
    phone: "98328748923",
    message: "Id proident tempor amet officia ad laborum occaecat mollit aliquip. Ea magna est sit consectetur nostrud veniam anim nisi mollit. Dolore magna ullamco laboris dolore quis ad officia. Occaecat incididunt tempor eu minim. Esse eu dolor deserunt incididunt ullamco est dolore proident excepteur ad voluptate irure. Deserunt et occaecat laborum fugiat ut aliquip quis proident amet id enim aliqua. Et enim et consequat adipisicing commodo sit laboris consequat eu sit aute."
  },
  {
    id: uid(10),
    name: "Consequat anim nisi dolor mollit.",
    email: "email@correo.com",
    date: getDate(),
    phone: "98328748923",
    message: "Id proident tempor amet officia ad laborum occaecat mollit aliquip. Ea magna est sit consectetur nostrud veniam anim nisi mollit. Dolore magna ullamco laboris dolore quis ad officia. Occaecat incididunt tempor eu minim. Esse eu dolor deserunt incididunt ullamco est dolore proident excepteur ad voluptate irure. Deserunt et occaecat laborum fugiat ut aliquip quis proident amet id enim aliqua. Et enim et consequat adipisicing commodo sit laboris consequat eu sit aute."
  },
]

export default messages
