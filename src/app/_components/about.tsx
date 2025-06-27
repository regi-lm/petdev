import Image from "next/image";
import about1Img from '../../../public/about-1.png'
import about2Img from '../../../public/about-2.png'
import { Check, MapPin } from "lucide-react";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";

export function About(){
    return(
        <section className="bg-[#FDF6ec] py-16">
            <div className="container px-4 mx-auto">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative" data-aos="zoom-in" data-aos-delay="300">
                <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                    <Image
                        src={about1Img}
                        alt="Foto do cao"
                        fill
                        quality={100}
                        className="object-cover hover:scale-110 duration-300"
                        priority 
                    />
                </div>

                 <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 
                 overflow-hidden rounded-lg border-white">
                    <Image
                    src={about2Img}
                    alt="Foto do cao"
                    fill
                    quality={100}
                    priority 
                    />
                </div>
            </div>

            <div className="space-y-6 mt-10">
                <h2 className="text-4xl font-bold" data-aos="fade-right" data-aos-delay="300">Sobre</h2>

                <p data-aos="fade-right" data-aos-delay="300">
                    Em nosso PetShop, cuidar dos pets é coisa séria — mas feita com muito carinho. 
                    Oferecemos tudo o que seu animal precisa em um só lugar: desde alimentação e acessórios 
                    até banho, tosa e atendimento veterinário. Nossa equipe é apaixonada por pets e preparada 
                    para garantir um atendimento de qualidade, sempre com responsabilidade, atenção e aquele 
                    toque de afeto que faz toda a diferença. Aqui, seu pet é tratado como parte da família.
                </p>

                <ul className="space-y-4" data-aos="fade-right" data-aos-delay="300">
                    <li className="flex items-center gap-2">
                        <Check className="text-red-500"/>
                        Aberto desde 2025.
                    </li>
                    <li className="flex items-center gap-2">
                        <Check className="text-red-500"/>
                        Equipe com mais de 10 veterinários.
                    </li>
                    <li className="flex items-center gap-2">
                        <Check className="text-red-500"/>
                        Qualidade é nossa prioridade.
                    </li>
                </ul>

                <div className="flex gap-2">
                <a
                    data-aos="fade-right" data-aos-delay="300"
                    target='_blank'
                    href={'https://wa.me/5591984536649?text=Olá, vim pelo site e gostaria de mais informações.'}
                    className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2
                    rounded-md"
                >
                    <WhatsappLogoIcon className="w-5 h-5 text-white"/>
                    Contato via WhatsApp
                </a>

                <a
                data-aos="fade-right" data-aos-delay="300"
                target="_blank"
                href={'https://maps.app.goo.gl/u9wVL2H4mCBc8io3A'}
                className="flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
                >
                    <MapPin className="w-5 h-5 text-black"/>
                    Endereço da loja
                </a>
                </div>

            </div>
            </div>

            </div>
        </section>
    )
}