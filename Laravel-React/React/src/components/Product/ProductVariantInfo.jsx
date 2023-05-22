const productVariantInfo = (props) => {
  const product = props.product;
  const type = product.type_name;

  return (
    <div className="text-gray-600">
      {
        {
          Book: `Weight: ${product.weight} kg`,
          DVD: `Size: ${product.size} MB`,
          Furniture: `Dimension: ${product.width}x${product.height}x${product.length}`,
        }[type]
      }
    </div>
  );
};

export default productVariantInfo;
