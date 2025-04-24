"use client";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { MailIcon } from 'lucide-react' // Optional, you can use any email icon you like

const NewsletterSection = () => {

    const placeholders = [
        "yourname@youremail.com",
        "johndoe@youremail.com",
        "ansh@youremail.com",
        "kanika@youremail.com",
      ];
     
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
      };
      const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitted");
      };

//   return (
//     <section className="bg-[#e50914] py-16 px-5 relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-20">
//         {/* Left Text Block */}
//         <div className="md:w-1/2">
//           <h2 className="text-white text-3xl md:text-4xl font-semibold leading-snug md:text-left text-center">
//             Join the largest <br /> STEAM Education Revolution
//           </h2>
//         </div>

//         {/* Right Email Input Block */}

//     <div className="flex-1">
//         <PlaceholdersAndVanishInput
//         placeholders={placeholders}
//         onChange={handleChange}
//         onSubmit={onSubmit}
//         />
//     </div>

//       </div>
//     </section>
//   );

return (
    <section className="bg-[#e50914] py-16 px-5 relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
      <div className="w-full max-w-4xl flex flex-col items-center gap-10">
        
        {/* Top Text Block */}
        <div className="w-full text-center">
          <h2 className="text-white text-3xl md:text-4xl font-semibold leading-snug">
            Join the largest <br /> STEAM Education Revolution
          </h2>
        </div>
  
        {/* Bottom Email Input Block */}
        <div className="w-full">
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
        </div>
  
      </div>
    </section>
  );
  
};

export default NewsletterSection;
