import { Check, Globe, Clock, Shield, Users } from "lucide-react";

const features = [
  {
    title: "Maggiore Credibilità",
    description: "Un sito web professionale comunica ai clienti che sei serio, affidabile e al passo coi tempi.",
    icon: Shield,
  },
  {
    title: "Visibilità H24",
    description: "Sei sempre aperto online. Anche quando il tuo negozio o il tuo ufficio è chiuso, il sito continua a lavorare per te.",
    icon: Clock,
  },
  {
    title: "Maggiore Coinvolgimento",
    description: "Un sito web non parla solo dei tuoi prodotti o servizi, ma anche di te e del tuo team.",
    icon: Users,
  },
  {
    title: "Informazioni Sempre Accessibili",
    description: "Orari di apertura, numeri di telefono, servizi offerti, promozioni: tutto a portata di clic.",
    icon: Globe,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 container-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Perché ogni attività deve avere un sito web oggi
        </h2>
        <p className="text-neutral-600 text-center mb-12 max-w-2xl mx-auto">
          Un sito web ben fatto è molto più di una semplice pagina online. È il centro della tua presenza digitale.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-card p-8 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-xl">{feature.title}</h3>
              </div>
              <p className="text-neutral-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;