// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.

// const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string,
// );

const Checkout = () => {
  // const cart = useRecoilValue(OrderAtom);
  // const [checkoutCalculateMut, { data }] = useCheckoutCalculateMutMutation();

  // React.useEffect(() => {
  //   if (cart) {
  //     checkoutCalculateMut({
  //       variables: {
  //         checkoutCalculateMutInput2: {
  //           orders: cart,
  //         },
  //       },
  //       context: {
  //         Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`,
  //       },
  //     });
  //   }
  // }, [cart, checkoutCalculateMut]);

  return (
    <div className="App">
      {/* {data?.CheckoutCalculateMut?.clientSecret && (
        <Elements
          options={{
            clientSecret: data?.CheckoutCalculateMut?.clientSecret,
            appearance: {
              theme: 'stripe',
            },
          }}
          stripe={stripePromise}
        >
          <CheckoutForm />
        </Elements>
      )} */}
    </div>
  );
};

export default Checkout;
