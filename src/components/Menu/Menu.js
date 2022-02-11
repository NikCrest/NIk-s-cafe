import MenuItem from "./MenuItem";
import classes from "./Menu.module.css";
const DUMMY_DATA = [
  {
    id: 1,
    img: "https://denewlanmarkhotel.com/wp-content/uploads/2020/05/espresso.jpg",
    name: "Espresso",
    price: 10,
    ingredients: "espresso",
  },
  {
    id: 2,
    img: "https://espressococo.files.wordpress.com/2012/10/double-espresso-macchiato.jpg",
    name: "Espresso Macchiato",
    price: 12,
    ingredients: "espresso, milk foam",
  },
  {
    id: 3,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Italian_breakfast_cappucino%2C_Esino_Lario.jpg/800px-Italian_breakfast_cappucino%2C_Esino_Lario.jpg",
    name: "Cappuccino",
    price: 19,
    ingredients: "espresso, steamed milk, milk foam",
  },
  {
    id: 4,
    img: "https://i1.wp.com/gatherforbread.com/wp-content/uploads/2014/10/Dark-Chocolate-Mocha-Square.jpg?fit=1000%2C1000&ssl=1",
    name: "Mocha",
    price: 8,
    ingredients: "espresso ,chocolate syrup, steamed milk, whipped cream",
  },
  {
    id: 5,
    img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-d8ada0f.jpg?quality=90&webp=true&resize=440,400",
    name: "Flat White",
    price: 18,
    ingredients: "espresso, steamed milk",
  },
  {
    id: 6,
    img: "https://cdn.buttercms.com/AB7ud4YSE6nmOX0iGlgA",
    name: "Americano",
    price: 7,
    ingredients: "espresso, water",
  },
  {
    id : 7,
    img: "https://www.thespruceeats.com/thmb/x7I8C5ZULZdDah4KgxqFT4WCAlI=/4200x2800/filters:fill(auto,1)/how-to-make-caffe-latte-765372-hero-01-2417e49c4a9c4789b3abdd36885f06ab.jpg",
    name: "Cafe Latte",
    price: 16,
    ingredients: "espresso, steamed milk, milk foam",
  },
  {
    id:8,
    img: "https://i2.wp.com/www.teacoffeecup.com/wp-content/uploads/2020/08/classic-espresso-con-panna.jpg?fit=550%2C367&ssl=1",
    name: "Espresso Con Panna",
    price: 14,
    ingredients: "espresso, whipped cream",
  },
  {
    id:9,
    img: "https://sandykaybarublog.files.wordpress.com/2018/04/bravo-3.png",
    name: "Cafe Breve",
    price: 15,
    ingredients: "espresso, steamed milk, steamed cream, milk foam",
  },
];

const Menu = () => {
  const menuData = DUMMY_DATA.map((ele) => (
    <MenuItem
      id={ele.id}
      key={ele.id}
      name={ele.name}
      price={ele.price}
      image={ele.img}
      ingredients={ele.ingredients}
    />
  ));
  return <div className={classes.main}>{menuData}</div>;
};
export default Menu;
