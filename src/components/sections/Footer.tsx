"use client"
import Link from "next/link"
import { motion } from "motion/react"
import ElasticLine from "@/fancy/components/physics/elastic-line"
 


interface FooterItemProps {
    text: string;
    link: string;
}

const FooterItem = ({ text, link }: FooterItemProps) => {
return (
    <li>
        <Link href={link} className="duration-200 hover:text-red-600">
            {text}
        </Link>
    </li>
)
}
 
interface FooterItem {
    id: number;
    text: string;
    link: string;
}

interface FooterBlockItemProps {
    title: string;
    items: FooterItem[];
}

const FooterBlockItem = ({ title, items }: FooterBlockItemProps) => {
return (
    <div className="space-y-6">
        <h1 className="text-lg font-semibold text-white">
            {title}
        </h1>
        <ul className="space-y-3">
            {
                items.map(item => (
                    <FooterItem key={item.id} {...item} />
                ))
            }
        </ul>
    </div>
)
}
 
const footerBlocks = [
{
    id: 1,
    title: "Courses",
    items: [
        {
            id: 1,
            text: "Web development",
            link: "#"
        },
        {
            id: 2,
            text: "Robotics",
            link: "#"
        },
        {
            id: 3,
            text: "UI/UX Designing",
            link: "#"
        },
        {
            id: 4,
            text: "Drone Programming",
            link: "#"
        },
        {
            id: 5,
            text: "AI Programming",
            link: "#"
        },
    ]
},
{
    id: 2,
    title: "Company",
    items: [
        {
            id: 1,
            text: "About",
            link: "#"
        },
        {
            id: 2,
            text: "Career",
            link: "#"
        },
        {
            id: 3,
            text: "Solutions",
            link: "#"
        },
        {
            id: 4,
            text: "Workshops",
            link: "#"
        },
        {
            id: 5,
            text: "DIY Kits",
            link: "#"
        },
        {
            id: 6,
            text: "Contact",
            link: "#"
        },
    ]
},
{
    id: 3,
    title: "Social",
    items: [
        {
            id: 1,
            text: "Twitter X",
            link: "#"
        },
        {
            id: 2,
            text: "LinkedIn",
            link: "#"
        },
        {
            id: 3,
            text: "Facebook",
            link: "#"
        },
        {
            id: 4,
            text: "YouTube",
            link: "#"
        },
        {
            id: 5,
            text: "Instagram",
            link: "#"
        },
    ]
},
{
    id: 4,
    title: "Resources",
    items: [
        {
            id: 1,
            text: "Blog",
            link: "#"
        },
        {
            id: 2,
            text: "Privacy Policy",
            link: "#"
        },
        {
            id: 3,
            text: "Terms & Conditions",
            link: "#"
        },
        {
            id: 4,
            text: "FAQ",
            link: "#"
        },
        {
            id: 5,
            text: "Support",
            link: "#"
        },
    ]
},
]
 
 
const FooterBlock = () => {
    return (
      <footer className="bg-[#0a0a0a] text-gray-400 relative mx-auto -mt-10 flex max-w-7xl flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
          <div className="border-t border-t-gray-700 py-16 md:py-20 flex flex-col lg:flex-row gap-14 gap-y-16">
            <div className="w-full lg:w-96 space-y-6">
              <Link href="#">
                <div className="flex items-center gap-2">
                  <img
                    src="/bglessLogo.png"
                    alt="Nexora TLX Logo"
                    className="h-10 object-contain"
                  />
                  <h1 className="text-base font-bold md:text-2xl text-white">Nexora TLX</h1>
                </div>
              </Link>
              <p className="max-w-lg text-gray-400 mt-4">
                Shaping The Future of STEAM Education
              </p>
            </div>
  
            <nav className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-10">
              {footerBlocks.map((footerBlock) => (
                <FooterBlockItem key={footerBlock.id} {...footerBlock} />
              ))}
            </nav>
          </div>
          {/* Animated elastic line */}
        <ElasticLine
                releaseThreshold={50}
                strokeWidth={1}
                className="-mt-28"
                animateInTransition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    delay: 0.15,
                }}
        />
        </div>

        <div className="py-3 -mt-16  ">
          <div className="max-w-3xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex justify-center text-center">
            <p className="text-gray-400">© 2025 Nexora TLX Ltd. | Copyrights and all rights reserved</p>
          </div>
        </div>
      </footer>
    );
  };
  
 
export default FooterBlock