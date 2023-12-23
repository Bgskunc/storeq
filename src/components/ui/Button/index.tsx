type Propstype = {
  type?: 'button' | 'submit' | undefined;
  onClick?: () => void;
  children: React.ReactNode;
};

const Button = (props: Propstype) => {
  const { type, onClick, children } = props;
  return (
    <button type={type} onClick={onClick} className="bg-slate-600 hover:bg-slate-800 rounded text-white w-full p-[10px] font-bold">
      {children}
    </button>
  );
};

export default Button;
