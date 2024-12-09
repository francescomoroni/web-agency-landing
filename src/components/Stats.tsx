import { Check } from "lucide-react";

const features = [
  "Progettazione del Sito Web",
  "Dominio e Hosting",
  "Manutenzione e Sicurezza",
  "Supporto e Piccole Modifiche",
];

const Stats = () => {
  return (
    <section className="py-16 container-padding">
      <div className="max-w-4xl mx-auto glass-card rounded-xl p-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Pagherai una quota di soli 30€ che include:
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="bg-accent/10 p-1 rounded-full">
                  <Check className="w-4 h-4 text-accent" />
                </div>
                <p className="text-neutral-600">{feature}</p>
              </div>
            ))}
          </div>
          <div className="bg-neutral-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Come Funziona:</h3>
            <ol className="space-y-4 list-decimal list-inside text-neutral-600">
              <li>Parliamo delle tue esigenze</li>
              <li>Il sito è pronto in una settimana</li>
              <li>Manutenzione continua inclusa</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;