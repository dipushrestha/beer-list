import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  let errorMessage: string;
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    errorMessage = 'Unknown error';
  }

  console.error(error);

  return (
    <div className="flex min-h-screen flex-grow flex-col items-center justify-center gap-4 bg-gray-50">
      <h1 className="mb-4 text-4xl font-bold">Oops!</h1>
      <p className="text-gray-600">Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
      <a
        href="/"
        className="mt-4 inline-block rounded bg-sky-600 px-4 py-2 font-semibold text-white hover:bg-sky-700"
      >
        Go back to Home
      </a>
    </div>
  );
};

export default ErrorPage;
