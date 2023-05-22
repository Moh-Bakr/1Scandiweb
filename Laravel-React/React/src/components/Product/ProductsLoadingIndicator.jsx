const ProductsLoadingIndicator = () => {
  return (
    <div className="grid h-full w-full animate-pulse gap-20 rounded p-6 md:grid-cols-2 lg:grid-cols-4">
      <div className="h-64 rounded bg-slate-500"></div>
      <div className="h-64 rounded bg-slate-500"></div>
      <div className="h-64 rounded bg-slate-500"></div>
      <div className="h-64 rounded bg-slate-500"></div>
    </div>
  );
};

export default ProductsLoadingIndicator;
