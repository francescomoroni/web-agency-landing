const testimonials = [
  {
    quote: "Finalmente un servizio pensato per chi non vuole spendere una fortuna ma vuole comunque un sito professionale. Ho avuto il mio sito pronto in una settimana!",
    author: "Maria",
    role: "Fisioterapista",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
  },
  {
    quote: "Non ho mai avuto tempo per occuparmi di queste cose. Ora il mio sito è sempre aggiornato e sicuro. Il tutto al costo di un caffè al giorno",
    author: "Simone",
    role: "Parrucchiere",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    quote: "Il mio sito è sempre aggiornato e non devo preoccuparmi di nulla. Ho più tempo per concentrarmi sul mio lavoro.",
    author: "Martino",
    role: "Medico",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 container-padding bg-neutral-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Ecco perché altri come te ci hanno scelto
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card p-6 rounded-xl">
              <p className="text-neutral-600 mb-6">{testimonial.quote}</p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-neutral-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;