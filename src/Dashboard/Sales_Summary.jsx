import React from "react";
import ".//dashboard_styles/Salessummary.css";
import firstimg from "../assets/firstimg.webp";
import secondimg from "../assets/secondimg.webp";
import thirdimg from "../assets/thirdimg.webp";
import fourthimg from "../assets/fourthimg.webp";
import fifthimg from "../assets/fifthimg.webp";



const products = [
  {
    id: 1,
    title: "Blue t-shirt",
    category: "Fashion",
    price: "$500.00",
    discount: "15%",
    sold: 300,
    totalOrders: 70,
    image: firstimg
  },
  {
    id: 2,
    title: "Nike Air Shoe",
    category: "Fashion",
    price: "$150.00",
    discount: "N/A",
    sold: 200,
    totalOrders: 70,
    image:secondimg
  },
  {
    id: 3,
    title: "Woman Dresses",
    category: "Fashion",
    price: "$300.00",
    discount: "$50.00",
    sold: 1500,
    totalOrders: 70,
    image:thirdimg 
  },
  {
    id: 4,
    title: "Smart Watch",
    category: "Fashion",
    price: "$400.00",
    discount: "$50.00",
    sold: 700,
    totalOrders: 70,
    image: fourthimg
  },
  {
    id: 5,
    title: "Hoodie Rose",
    category: "Fashion",
    price: "$300.00",
    discount: "25%",
    sold: 500,
    totalOrders: 70,
    image:  fifthimg
  }
];

const Sales_Summary = () => {
  return (
    <div className="table-container_sales">
      <h2>Sales Summary</h2>
      <table className="sales_table">
        <thead>
          <tr>
            <th>Items</th>
            <th>Price</th>
            <th>Discount</th>
            <th>Sold</th>
            <th>Total Orders</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.title} className="product-image" />
                {product.title}
                <div className="category">{product.category}</div>
              </td>
              <td>{product.price}</td>
              <td>{product.discount}</td>
              <td>{product.sold}</td>
              <td className="total-orders">{product.totalOrders}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Sales_Summary;
