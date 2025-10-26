import Link from 'next/link';

interface ViewAllLinkProps {
  category: string;
}

export const ViewAllLink = ({ category }: ViewAllLinkProps) => {
  return (
    <Link
      href={category ? `/products/?category=${category}` : '/products'}
      className="flex justify-end mt-4 underline text-sm text-gray-500">
      View all products
    </Link>
  );
};
