import { signIn, signOut, useSession } from 'next-auth/react';

const Navbar = () => {
  const { data } = useSession();

  const userIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-slot="icon" className="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
    </svg>
  );

  return (
    <div className="flex justify-end items-center w-full h-[80px] bg-slate-900 text-white px-[5%]">
      <button onClick={() => (data ? signOut() : signIn())} className="bg-slate-50 hover:bg-slate-500 rounded text-slate-800 hover:text-slate-50 hover:shadow-sm hover:shadow-slate-50 px-2 py-1 font-bold">
        {data ? userIcon : 'Masuk'}
      </button>
    </div>
  );
};

export default Navbar;
