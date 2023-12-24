import Sidebar from '@/components/fragments/Sidebar';

type Proptypes = {
  children: React.ReactNode;
};

const listSidebarItem = [
  {
    title: 'Dashboard',
    url: '/admin',
    icon: 'bxs-dashboard',
  },
  {
    title: 'Products',
    url: '/admin/products',
    icon: 'bxs-box',
  },
];

const AdminLayout = (props: Proptypes) => {
  const { children } = props;
  return (
    <div className="flex gap-2">
      <Sidebar lists={listSidebarItem} />
      {children}
    </div>
  );
};

export default AdminLayout;
