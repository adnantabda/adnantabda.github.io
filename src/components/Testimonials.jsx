import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';

const Testimonials = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section id="testimonials" className="py-24 sm:py-32" ref={ref}>
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate={isInView ? 'show' : 'hidden'}
                    className="space-y-16"
                >
                    {/* Section Header */}
                    <div className="max-w-3xl">
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                            Client Testimonials
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Real feedback from startup founders and teams I've worked with on Upwork.
                        </p>
                    </div>

                    {/* Testimonials Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {testimonials.map((testimonial) => (
                            <motion.div
                                key={testimonial.id}
                                variants={item}
                                className="relative p-8 rounded-2xl bg-card border border-border flex flex-col hover:border-green-500/30 transition-all duration-300 group"
                            >
                                <Quote className="absolute top-6 right-8 w-8 h-8 text-green-500/10 group-hover:text-green-500/20 transition-colors" />

                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={14}
                                            className={i < Math.floor(testimonial.rating) ? "fill-yellow-500 text-yellow-500" : "text-muted-foreground"}
                                        />
                                    ))}
                                </div>

                                <div className="flex-1">
                                    <p className="text-foreground leading-relaxed mb-6 italic">
                                        "{testimonial.quote}"
                                    </p>
                                </div>

                                <div className="pt-6 border-t border-border mt-auto">
                                    <h4 className="font-bold text-foreground">{testimonial.client}</h4>
                                    <p className="text-xs text-green-400 font-medium uppercase tracking-wider mt-1">
                                        {testimonial.project}
                                    </p>
                                    <p className="text-[10px] text-muted-foreground mt-2 uppercase tracking-widest">
                                        {testimonial.period}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Trust Link */}
                    <div className="text-center pt-8">
                        <a
                            href="https://www.upwork.com/freelancers/~01f84bd11081481fc7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-green-400 transition-colors"
                        >
                            <span>Verified on Upwork</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
