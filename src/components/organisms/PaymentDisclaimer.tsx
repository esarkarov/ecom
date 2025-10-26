import Image from 'next/image';

export const PaymentDisclaimer = () => {
  return (
    <>
      <div className="flex items-center gap-2 mt-4">
        <Image
          src="/klarna.png"
          alt="klarna"
          width={50}
          height={25}
          className="rounded-md"
        />
        <Image
          src="/cards.png"
          alt="cards"
          width={50}
          height={25}
          className="rounded-md"
        />
        <Image
          src="/stripe.png"
          alt="stripe"
          width={50}
          height={25}
          className="rounded-md"
        />
      </div>
      <p className="text-gray-500 text-xs">
        By clicking Pay Now, you agree to our <span className="underline hover:text-black">Terms & Conditions</span> and{' '}
        <span className="underline hover:text-black">Privacy Policy</span>. You authorize us to charge your selected
        payment method for the total amount shown. All sales are subject to our return and{' '}
        <span className="underline hover:text-black">Refund Policies</span>.
      </p>
    </>
  );
};
