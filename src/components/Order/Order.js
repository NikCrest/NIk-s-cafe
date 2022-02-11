import OrderItem from "./OrderItem";
import Card from "../../layout/Card";
import { useEffect, useState } from "react";
import AuthContext from "../../store/auth-context";
import { useContext } from "react";
const Order = () => {
  const authCtx = useContext(AuthContext);
  const [isLoading,setIsLoading] =  useState(false)
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      if (authCtx.id) {
        try {
            setIsLoading(true)
          const response = await fetch(
            `https://nik-s-cafe-default-rtdb.firebaseio.com/orders.json?orderBy="id"&equalTo="${authCtx.id}"`
          );
          if (!response.ok) {
            throw new Error("Something wrong happened");
          }
          const responseData = await response.json();
          setIsLoading(false)
          setData(responseData);
        } catch (err) {
          console.log(err);
        }
      }
    };
    fetchData();
  }, []);
  let updatedData = [];
  for (const key in data) {
    updatedData.push({items:data[key].items,totalAmount:data[key].totalAmount});
  }
  const invoiceData = updatedData.map((ele) => {
    return <OrderItem key={Math.random().toString()} items={ele.items} total={ele.totalAmount} />;
  });
  return (
    <Card>
       <h2>Your Orders</h2>
      {isLoading ? <h1>Loading...</h1> : invoiceData}
    </Card>
  );
};
export default Order;
