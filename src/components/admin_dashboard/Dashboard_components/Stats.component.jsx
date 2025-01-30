import React from 'react';
import { useSelector } from 'react-redux';
import { isWithinInterval, subDays, parseISO } from 'date-fns';

const Stats = () => {
  const usersdata = useSelector((state) => state.users);
  const users = usersdata.users.usersData;
  const orderdata = useSelector((state) => state.orders);
  const orders = orderdata.orders.ordersData.orders;
  const ordersShippings = orderdata.orders.ordersData.ordersShippings;
  // console.log("Orters: ", orders, ordersShippings);
  const totalSales = orders.reduce((accumulator, currentObject) => {
    return currentObject?.totalAmount ? accumulator + Number(currentObject?.totalAmount?.$numberDecimal) : accumulator;
  }, 0);
  const pendingOrders = ordersShippings.filter(item => item.status === 'Pending');
  const shippedOrders = ordersShippings.filter(item => item.status === 'Shipped');

  function getMostSoldProduct(data) {
    const productFrequency = new Map();

    // Accumulate product counts and store names
    data.forEach(({ products }) => {
      products.forEach(({ _id, name }) => {
        if (!productFrequency.has(_id)) {
          productFrequency.set(_id, { count: 0, name });
        }
        productFrequency.get(_id).count += 1;
      });
    });

    // Get all products sorted by their sales count in descending order
    const sortedProducts = [...productFrequency.entries()]
      .sort((a, b) => b[1].count - a[1].count);

    // Extract the highest and second-highest sales counts
    const topSales = sortedProducts[0]?.[1].count || 0; // Highest sales count
    const secondTopSales = sortedProducts.find(([_, { count }]) => count < topSales)?.[1].count || 0; // Second highest sales count

    // Collect products matching the top two sales counts
    const topSellingProducts = sortedProducts
      .filter(([_, { count }]) => count === topSales || count === secondTopSales)
      .map(([productId, { name, count }]) => ({ productId, name, sales: count }));

    return topSellingProducts;
  }
  const mostSold = getMostSoldProduct(orders);


  function isLastUsers(dates) {
    const today = new Date();
    const past30Days = subDays(today, 30);

    // Check if any date is within the interval
    return dates.filter(date =>
      date.createdAt &&
      isWithinInterval(parseISO(date.createdAt), { start: past30Days, end: today })
    );
  }
  const latestUsers = isLastUsers(users);

  return (
    <div className="stats-container">
      <div className="stat-box">
        <h4>Total Sales</h4>
        <p>${totalSales.toFixed(2)}</p>
      </div>
      <div className="stat-box">
        <h4>Orders</h4>
        <p>Pending: {pendingOrders.length}<br />Processed: {shippedOrders.length}</p>
      </div>
      <div className="stat-box">
        <h4>Top-Selling</h4>
        {/* <p>Product {`${mostSold[0]?.name.substring(0, 7)}...`}<br />Product {`${mostSold[1]?.name.substring(0, 7)}...`}</p> */}
        <p>{`${mostSold[0]?.name.substring(0, 10)}...`}<br />{`${mostSold[1]?.name.substring(0, 10)}...`}</p>
      </div>
      <div className="stat-box">
        <h4>New Users</h4>
        <p>{latestUsers.length}</p>
      </div>
    </div>
  );
};

export default Stats;