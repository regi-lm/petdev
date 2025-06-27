
import golden from '../../../public/golden.png'
import royal from '../../../public/royal.png'
import primier from '../../../public/primier.png'
import whiskas from '../../../public/whiskas.png'
import natural from '../../../public/natural.png'
import Image from 'next/image'
import { FacebookLogoIcon, InstagramLogoIcon, YoutubeLogoIcon, WhatsappLogoIcon } from '@phosphor-icons/react/dist/ssr'

const brands = [
    { name: "Royal Canin", logo: royal },
    { name: "Golden", logo: golden },
    { name: "Primier", logo: primier },
    { name: "Formula Natural", logo: natural },
    { name: "Whiskas", logo: whiskas },
    { name: "Golden", logo: golden },
]

export function Footer(){
    return(
        <section className="bg-[#E84c3d] py-16 text-white">
            <div className='container mx-auto px-4'>

                <div className='border-b border-white/20 pb-8' data-aos="fade-down" data-aos-delay="300">
                    <h4 className='text-3xl font-semibold mb-8 text-center'>Marcas que trabalhamos</h4>

                    <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
                        {brands.map((item, index) =>(
                            <div key={index} className='bg-white p-4 rounded-lg flex items-center justify-center'>
                                <Image
                                src={item.logo}
                                alt={item.name}
                                width={100}
                                height={50}
                                quality={100}
                                style={{
                                    width: "auto",
                                    height: "auto",
                                }}
                                className="object-contain"
                                />
                            </div>
                        ))}
                    </div>

                </div>

                <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5' data-aos="fade-down" data-aos-delay="300">
                        <div>
                            <h3 className='text-2xl font-semibold mb-2'>Pet Shop Dev</h3>
                            <p className='mb-4'>Cuidando do seu melhor amigo com amor e dedicação.</p>
                            <a 
                            target='_blank'
                            href={'https://wa.me/5591984536649?text=Olá, vim pelo site e gostaria de mais informações.'}
                            className="bg-green-500 px-5 py-2 rounded-md font-semibold 
                            flex items-center justify-center w-fit gap-2">
                            
                            <WhatsappLogoIcon className='w-5 h-5'/>
                                Contato via WhatsApp
                            </a>
                        </div>

                        <div>
                            <h3 className='text-2xl font-semibold mb-2'>Contatos</h3>
                            <p>Email: teste@teste.com</p>
                            <p>Telefone: (xx) 4002-8922</p>
                            <p>Rua X, centro, Belém | PA</p>
                        </div>

                        <div>
                            <h3 className='text-2xl font-semibold mb-2'>Redes sociais</h3>
                            <div className='flex gap-4'>
                                <a href="#"
                                target='_blank'
                                >
                                    <FacebookLogoIcon className='w-8 h-8'/>
                                </a>
                                <a href="#"
                                target='_blank'
                                >
                                    <InstagramLogoIcon className='w-8 h-8'/>
                                </a>
                                <a href="#"
                                target='_blank'
                                >
                                    <YoutubeLogoIcon className='w-8 h-8'/>
                                </a>
                            </div>
                        </div>

                </footer>

            </div>
        </section>
    )
}