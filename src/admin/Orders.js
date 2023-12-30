// import React, { useState, useEffect } from 'react';
// import { getOrderTotal, createOrder } from "../helper/OrderHelper"; // Import functions for interacting with your API

// const OrderComponent = () => {
//   const [orders, setOrders] = useState([]);
//   const [newOrder, setNewOrder] = useState({
//     // Initialize with default values or retrieve from a form
//     booking_details: {
//       paymentType: '',
//       travelClass: '',
//       seatType: '',
//     },
//   });

//   useEffect(() => {
//     // Fetch existing orders when the component mounts
//     fetchOrders();
//   }, []);

//   const fetchOrders = async () => {
//     try {
//       const response = await getOrderTotal(); // Implement the getOrders function to fetch orders from your API
//       setOrders(response.data);
//     } catch (error) {
//       console.error('Error fetching orders:', error);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewOrder((prevOrder) => ({
//       ...prevOrder,
//       booking_details: {
//         ...prevOrder.booking_details,
//         [name]: value,
//       },
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Implement the createOrder function to send a POST request to your API and create a new order
//       await createOrder({ booking: newOrder });
//       // After creating the order, fetch the updated list of orders
//       fetchOrders();
//     } catch (error) {
//       console.error('Error creating order:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Bookings</h1>
//       <ul>
//         {orders.map((booking) => (
//           <li key={booking._id}>
//             {/* Display order details */}
//             {JSON.stringify(booking)}
//           </li>
//         ))}
//       </ul>
//       <h2>Create New Order</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Payment Type:
//           <input
//             type="text"
//             name="paymentType"
//             value={newOrder.booking_details.paymentType}
//             onChange={handleInputChange}
//           />
//         </label>
//         <br />
//         <label>
//           Travel Class:
//           <input
//             type="text"
//             name="travelClass"
//             value={newOrder.booking_details.travelClass}
//             onChange={handleInputChange}
//           />
//         </label>
//         <br />
//         <label>
//           Seat Type:
//           <input
//             type="text"
//             name="seatType"
//             value={newOrder.booking_details.seatType}
//             onChange={handleInputChange}
//           />
//         </label>
//         <br />
//         <button type="submit">Create Order</button>
//       </form>
//     </div>
//   );
// };

// export default OrderComponent;
