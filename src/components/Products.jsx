const products = [
  {
    id: 1,
    name: "",
    href: "#",
    imageSrc: "https://www.cecon.com.py/assets/imagenes/cecon-logo-dark.png",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "",
    href: "#",
    imageSrc:
      "https://sika.scene7.com/is/image/sika/Sika_NoClaim_pos_rgb_mobile?wid=320&hei=277&fit=crop%2C1&fmt=webp-alpha",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "",
    href: "#",
    imageSrc:
      "https://www.inc.gov.py/application/files/cache/thumbnails/720bdec72163a890bd05c8b9bfc31372.png",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "",
    href: "#",

    imageSrc:
      "https://pbs.twimg.com/profile_images/1609870801653612544/UVINZXkN_400x400.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },

  // More products...
];

export default function Pro() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
