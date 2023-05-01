import Link from "next/link"
import Head from "next/head";

export default function NotFound() {
  return (
    <main className="grid h-[100vh] place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <Head>
          <title>404: Not Found</title>
        </Head>
        <div className="text-center">
          <p className="text-base font-semibold text-secondary">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="/" className="group rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Go back to home <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
  )
}
