import Link from 'next/link';

import { Footer } from '@/components/common/Footer';
import { Header } from '@/components/common/Header';
import { Button } from '@/components/elements/Button';
import { Card } from '@/components/elements/Card';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const LoginPage = () => {
  return (
    <Main
      meta={
        <Meta
          title="Login - Boat Rental World"
          description="Boat Rental World"
        />
      }
    >
      <Header />
      <div className="bg-[#164E63] py-32 px-2">
        <div className="mx-auto max-w-lg">
          <Card>
            <div>
              <h2 className="text-xl">Sign in to your account</h2>
              <p className="mt-2 text-sm text-gray-500">
                Or{' '}
                <Link href="/auth/register">
                  <a className="font-medium text-yellow-500 hover:text-yellow-500">
                    create account
                  </a>
                </Link>
              </p>
            </div>

            <div className="mt-8">
              <form action="#" method="POST" className="space-y-6">
                <div>
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
                      required
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 shadow-sm placeholder:text-gray-400 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1">
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
                      required
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 shadow-sm placeholder:text-gray-400 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-yellow-500 focus:ring-yellow-500"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-yellow-500 hover:text-yellow-500"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <div>
                  <Button
                    variant="primary"
                    type="submit"
                    className="w-full justify-center"
                  >
                    Sign in
                  </Button>
                </div>
              </form>
            </div>
          </Card>
        </div>
      </div>
      <Footer />
    </Main>
  );
};

export default LoginPage;
