import getRestaurantDetails from '../../utils/getRestaurantDetails';

export async function generateStaticParams() {
  const data = await getRestaurantDetails();

  console.log('data', data);

  const list = ['1', '2', '3', '4', '5'];

  return list.map((post) => ({
    slug: post,
  }));
}

const TestPage = ({ params }) => {
  const { slug } = params;

  console.log('slug', params);
  return (
    <div>
      <h1>Test</h1>
    </div>
  );
};

export default TestPage;
