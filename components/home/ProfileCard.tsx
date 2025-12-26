import Image from "next/image";
import profileImage from "@/public/images/profile-image.png";

export default function ProfileCard() {
 return (
   <div className="flex flex-col items-center">
    
     <div className="relative mb-6">
       <Image
         src={profileImage}
         width={200} 
         height={200}
         alt="Foto de Perfil"
         className="rounded-full shadow-xl border-4 border-brand-light"
         priority
       />
     </div>

     <h1 className="font-display text-4xl font-bold text-brand-charcoal mb-2">
      Rui Simões
     </h1>
     <p className="font-sans text-brand font-bold uppercase tracking-widest text-sm">
       Full Stack Developer
     </p>
   </div>
 );
}
