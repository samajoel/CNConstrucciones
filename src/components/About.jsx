import Cecon from "../assets/IMG_3807.jpg";
import Vallemi from "../assets/IMG_3808.jpg";
import Ladrillo from "../assets/IMG_3809.jpg";
import Arena from "../assets/IMG_3810.jpg";

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

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
                <img src={feature.url} alt="" />
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src={Cecon}
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100 shadow-md  "
          />
          <img
            src={Vallemi}
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100 shadow-md  "
          />
          <img
            src={Ladrillo}
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100 shadow-md "
          />
          <img
            src={Arena}
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100 shadow-md "
          />
        </div>
      </div>
    </div>
  );
}
