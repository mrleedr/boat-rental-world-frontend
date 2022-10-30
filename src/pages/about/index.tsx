import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Login = () => {
  return (
    <Main
      meta={
        <Meta
          title="About Us | Boat Rental World"
          description="Search boat rentals, jet skis, yachts, pontoons, and fishing charters. Compare updated prices and availability, photos, reviews and more!"
        />
      }
    >
      <h1>About Us</h1>
    </Main>
  );
};

export default Login;
