import OrderPage from '@/components/Pages/OrderPage/OrderPage';

import getRestaurantDetails from '../../utils/getRestaurantDetails';

const Order = async () => {
  const data = await getRestaurantDetails();

  return <OrderPage restaurantDetails={...data.restaurantDetails} />;
};

export default Order;
