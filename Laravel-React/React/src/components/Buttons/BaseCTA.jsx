const BaseCTA = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={
        `bg-primary-600 hover:bg-primary-700 rounded-lg px-4 py-2 text-sm
        font-medium capitalize text-white outline-none ring-4 lg:px-5 lg:py-2.5` +
        props.background
      }
    >
      {props.text}
    </button>
  );
};

export default BaseCTA;
