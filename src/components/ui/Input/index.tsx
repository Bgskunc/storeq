type Propstypes = {
  label?: string;
  name: string;
  type: string;
  placeholder?: string;
  inform?: string;
};

const Input = (props: Propstypes) => {
  const { label, name, type, placeholder, inform } = props;
  return (
    <div className="flex flex-col my-[20px]">
      {label && (
        <label htmlFor={name} className="font-bold text-slate-700">
          {label}
        </label>
      )}
      <input type={type} id={name} name={name} placeholder={placeholder} className="p-[10px] mt-[5px] rounded ring-1 ring-slate-300 focus:ring-sky-400 outline-none  focus:shadow-md focus:shadow-sky-300/50" />
      {inform ? (
        <label htmlFor="" className="text-sm text-slate-500">
          {inform}
        </label>
      ) : null}
    </div>
  );
};

export default Input;
