export const Products = () => {
    const products= [ {
        id: "1",
        title: "description",
        description: "Descripcion",
        price: 5044,
        imageUrl: "https://www.lecuine.com/blog/wp-content/uploads/2014/06/cuchillo-santoku-global-lecuine.jpg"
    }, 
    {
        id: "2",
        title: "description",
        description: "Descripcion",
        price: 5044,
        imageUrl: "https://www.lecuine.com/blog/wp-content/uploads/2014/06/cuchillo-santoku-global-lecuine.jpg"
    },
    {
        id: "3",
        title: "description",
        description: "Descripcion",
        price: 5044,
        imageUrl: "https://www.lecuine.com/blog/wp-content/uploads/2014/06/cuchillo-santoku-global-lecuine.jpg"
    },
    {
        id: "4",
        title: "description",
        description: "Descripcion",
        price: 5044,
        imageUrl: "https://www.lecuine.com/blog/wp-content/uploads/2014/06/cuchillo-santoku-global-lecuine.jpg"
    },
    {
        id: "5",
        title: "description",
        description: "Descripcion",
        price: 5044,
        imageUrl: "https://www.lecuine.com/blog/wp-content/uploads/2014/06/cuchillo-santoku-global-lecuine.jpg"
    },
    {
        id: "6",
        title: "description",
        description: "Descripcion",
        price: 5044,
        imageUrl: "https://www.lecuine.com/blog/wp-content/uploads/2014/06/cuchillo-santoku-global-lecuine.jpg"
    },
 ]
 return (
    <div>
      {products.map(product => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  );
}