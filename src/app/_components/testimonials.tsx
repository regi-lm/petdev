"use client"

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock } from 'lucide-react'
import tutor1 from '../../../public/tutor1.png'
import tutor2 from '../../../public/tutor2.png'
import Image from 'next/image'

const testimonials = [
    {
        content: "Desde que comecei a levar a Merida para banho e tosa aqui, ela nunca esteve tão feliz! O atendimento é impecável, os profissionais são super cuidadosos e sempre deixam minha neném linda e cheirosa. Recomendo de olhos fechados!",
        author: "Gizane Matos",
        role: "Tutora da Merida (Pinscher)",
        image: tutor1,
    },
    {
        content: "O serviço de hotel para pets foi uma experiência incrível! Precisei viajar e fiquei tranquilo sabendo que o Thor estava sendo bem cuidado. Recebi fotos e atualizações diárias, e ele voltou para casa super feliz! Sem dúvidas, o melhor petshop da região.",
        author: "Mairam Luiz",
        role: "Tutor do Zeus (Bulldog Francês)",
        image: tutor2,
    },


]

export function Testimonials(){

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true
    })

    function scrollPrev (){
        emblaApi?.scrollPrev();
    }

    function scrollNext (){
        emblaApi?.scrollNext();
    }

    return (
        <section className="bg-[#FFD449] py-16">
            <div className="container mx-auto px-4">
                <div data-aos="zoom-in" data-aos-delay="300">
                    <h2 className="text-4xl font-bold text-center mb-12">Depoimentos de nossos clientes</h2>

                    <div className="relative max-w-4xl mx-auto">

                        <div className='overflow-hidden' ref={emblaRef}>
                            <div className='flex'>
                                {testimonials.map((item, index) => (
                                    <div key={index} className="flex-[0_0_100%] min-w-0 px-3">
                                        <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col" data-aos="zoom-in" data-aos-delay="300">
                                           <div className='flex flex-col items-center text-center space-y-4 select-none'>
                                                <div className='relative w-24 h-24'>
                                                    <Image
                                                        src={item.image}
                                                        alt={item.author}
                                                        fill
                                                        sizes='96px'
                                                        quality={100}
                                                        className='object-cover rounded-full'
                                                    />
                                                </div>

                                                <p className='text-gray-200'>{item.content}</p>

                                                <div>
                                                    <p className='font-bold'>{item.author}</p>
                                                    <p className='text-sm text-gray-400'>{item.role}</p>
                                                </div>

                                           </div>
                                        </article>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button 
                            className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 
                            -translate-x-1/2 top-1/2 z-10'
                            onClick={scrollPrev}
                        >
                            <ChevronLeft className='w-6 h-6 text-gray-600'/>
                        </button>

                        <button 
                            className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-7 -translate-y-1/2 
                            -translate-x-1/2 top-1/2 z-10'
                            onClick={scrollNext}
                        >
                            <ChevronRight className='w-6 h-6 text-gray-600'/>
                        </button>

                    </div>

                </div>

            </div>
        </section>
    )
}