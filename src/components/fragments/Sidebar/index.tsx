import Button from '@/components/ui/Button';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Proptypes = {
  lists: Array<{
    title: string;
    url: string;
    icon: string;
  }>;
};

const Sidebar = (props: Proptypes) => {
  const { lists } = props;
  const { pathname } = useRouter();
  return (
    <div className="bg-slate-600 text-white p-[20px] w-[300px] h-screen flex flex-col justify-between">
      <div className="">
        <h1 className="text-center px-2 mb-[30px] text-2xl font-bold">Admin Panel</h1>
        <div className="flex flex-col gap-2 text-slate-50">
          {lists.map((list, index) => (
            <Link
              href={list.url}
              key={list.title}
              className={` py-1 px-2 rounded text-sm flex items-center font-semibold gap-2 transition-all ${
                pathname === list.url ? 'active:text-slate-600 text-slate-600 active:bg-slate-50 bg-slate-50' : 'hover:text-slate-50 hover:bg-slate-400'
              }`}
            >
              <i className={`bx ${list.icon} text-lg`}></i>
              <h4 className="">{list.title}</h4>
            </Link>
          ))}
        </div>
      </div>
      <div>
        <button className="text-slate-600 bg-slate-50 hover:text-slate-50 hover:bg-slate-400 py-1 px-2 rounded flex items-center justify-center gap-2 font-semibold transition-all w-full" type="button" onClick={() => signOut()}>
          <i className="bx bx-log-out text-xl" /> Keluar
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
