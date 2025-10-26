import Link from 'next/link';

export const SignInLink = () => {
  return (
    <Link
      href="/login"
      className="text-amber-400 hover:text-white border border-amber-400 hover:bg-amber-400 focus:outline-none font-medium rounded-lg text-sm px-4 py-1.5 text-center">
      Sign in
    </Link>
  );
};
