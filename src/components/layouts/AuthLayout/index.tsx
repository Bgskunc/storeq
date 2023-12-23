import Link from 'next/link';

type Propstypes = {
  error?: string | null;
  title?: string;
  children: React.ReactNode;
  link: string;
  linkText?: string;
  linkLabel?: string;
};

const AuthLayout = (props: Propstypes) => {
  const { error, title, children, link, linkText, linkLabel } = props;
  return (
    <div className="flex items-center justify-center h-screen w-full flex-col">
      <h1 className="text-[32px] mt-[5px]">{title}</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="md:w-[35%] sm:w-[50%] w-full pt-[5px] pb-[20px] px-[20px] mb-[20px]">{children}</div>

      <p>
        {linkText}
        <Link href={link} className="font-bold text-slate-700">
          {linkLabel}
        </Link>{' '}
      </p>
    </div>
  );
};

export default AuthLayout;
