const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center px-6 py-4 border font-montserrat text-lg leading-none rounded-lg text-white bg-purple-700">
      {label}
      {iconURL && (
        <img src={iconURL} alt="arrowright" className="w-5 h-5 ml-3" />
      )}
    </button>
  );
};

export default Button;
