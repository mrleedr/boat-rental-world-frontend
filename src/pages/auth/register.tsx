import { Footer } from '@/components/common/Footer';
import { Header } from '@/components/common/Header';
import { Button } from '@/components/elements/Button';
import { Card } from '@/components/elements/Card';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const RegisterPage = () => {
  return (
    <Main
      meta={
        <Meta
          title="Register - Boat Rental World"
          description="Boat Rental World"
        />
      }
    >
      <Header />
      <div className="bg-[#164E63] py-32 px-2">
        <div className="mx-auto max-w-lg">
          <Card>
            <div>
              <h2 className="text-xl">Create account</h2>
              <p className="mt-2 text-sm text-gray-500">
                Or{' '}
                <a
                  href="#"
                  className="font-medium text-yellow-500 hover:text-yellow-500"
                >
                  login
                </a>
              </p>
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <form action="#" method="POST" className="space-y-6">
                  <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-6">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-6">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Password
                      </label>
                      <div className="mt-1">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <Button
                      variant="primary"
                      type="submit"
                      className="w-full justify-center"
                    >
                      Register
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <Footer />
    </Main>
  );
};

export default RegisterPage;
