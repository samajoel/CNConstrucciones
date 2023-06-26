import Cecon from "../assets/IMG_3807.jpg";
import Vallemi from "../assets/IMG_3808.jpg";
import Ladrillo from "../assets/IMG_3809.jpg";
import Arena from "../assets/IMG_3810.jpg";

import Products from "../components/Products.jsx";
import Products2 from "../components/Products2.jsx";

const features = [
  { name: "Origin", description: "Designed by Good Goods, Inc." },
  {
    name: "Cementos",
    description:
      "Contamos con un stock de Cementos de las marcas Vallemi y Cecon",
  },
  {
    name: "Cal",
    description: "De Contretmix",
  },
  { name: "Varillas", description: "De 6'' 8'' 10'' 12'' 16''" },
  { name: "Fluidos para Construcciones", description: "Sika" },
  {
    name: "Y mucho mas",
    description: "",
  },
];

export default function About() {
  return (
    <div name="about" className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nosotros
          </h2>
          <p className="mt-4 text-gray-500">
            Nos especializamos en proporcionar soluciones integrales de
            almacenamiento de materiales para empresas de diversos sectores,
            brindando un servicio confiable y de calidad. Nuestra misión es ser
            su socio estratégico en la gestión eficiente de sus materiales. Nos
            comprometemos a ofrecerle un depósito moderno, seguro y bien
            organizado, que le permita optimizar sus operaciones y centrarse en
            su core business.
          </p>
          <Products2 />
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trabajamos con las mejores marcas.
          </h2>
          <p className="mt-4 text-gray-500">
            En nuestro depósito, nos aseguramos de contar con una amplia
            variedad de materiales provenientes de reconocidos fabricantes y
            proveedores. Sabemos lo importante que es para ustedes obtener
            productos duraderos, eficientes y de alta calidad, por lo que nos
            esforzamos en seleccionar cuidadosamente cada artículo que
            ofrecemos.
          </p>
          <Products />
        </div>
      </div>
    </div>
  );
}
