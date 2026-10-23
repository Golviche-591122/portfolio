"use client"
import { LuMail, LuMapPin, LuPhone, LuSend } from "react-icons/lu";
import SectionHeader from "../components/ui/SectionHeader";
import { useState } from "react";
import toast from "react-hot-toast";

const contactInfo = [
  {
    icon: LuMail,
    label: "Email",
    value: "golvichen@gmail.com",
    href: "mailto:golvichen@gmail.com",
  },
  {
    icon: LuPhone,
    label: "Telephone",
    value: "+243 825299798",
    href: "tel:+243 825299798",
  },
  {
    icon: LuMapPin,
    label: "Localisation",
    value: "Kinshasa",
    href: "#",
  },
];

export default function ContactSection() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event:React.SubmitEvent) => {
    event.preventDefault();
    setLoading(true)
    
    const formData = new FormData(event.target);
    formData.append("access_key", "9768bec6-1dfa-45fe-bf27-ffcc9c1e3911");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      toast.success("Soumission de formulaire réçu")
      event.target.reset();
    } else {
      toast.error("Erreur de soumission de formulaire")
    }
    setLoading(false)
  };

  return (
    <section id="contact" className="py-24 overflow-hidden relative">
      {/* iamge glow */}
      <div
        className="absolute top-1/3 right-1/4 bg-primary/10 
        -translate-x-1/2 w-80 h-80 rounded-full blur-3xl"
      />

      <div className="w-[90%] max-w-6xl mx-auto relative z-10 space-y-16">
        <SectionHeader
        title="Un projet d'analyse de données ?"
        highlight="Parlons-en"
        badge="Contact"
        description="Vous avez un projet data, un besoin en reporting ou une opportunité de collaboration ? Je suis disponible pour échanger et contribuer à vos projets."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* left-form */}
        <form
        data-aos="fade-right" data-aos-delay="100" data-aos-anchor-placement="top-center"
        onSubmit={onSubmit} className="p-6 rounded-2xl bg-surface border border-border space-y-5">
            <h3 className="text-lg font-semibold text-text">Envoyez un message</h3>
            {/* name */}

            <div>
              <label className="text-sm text-gray-400 block mb-1">Nom</label>
              <input name="name" type="text" required placeholder="Ton nom"
              className="w-full px-4 py-2 rounded-lg bg-background border
              border-border text-text outline-none focus:border-primary transition" />
            </div>
            {/* Email */}

            <div>
              <label className="text-sm text-gray-400 block mb-1">Email</label>
              <input name="email" type="email" required placeholder="Ton address mail"
              className="w-full px-4 py-2 rounded-lg bg-background border
              border-border text-text outline-none focus:border-primary transition" />
            </div>
            <div>
              <label className="text-sm text-gray-400 block mb-1">Message</label>
              <textarea name="message" rows={4} placeholder="ton message..."
              className="w-full px-4 py-2 rounded-lg bg-background border
              border-border text-text outline-none focus:border-primary
              transition resize-none"></textarea>
            </div>

            <button
            disabled={loading}
             type="submit"  
             className="w-full py-3 rounded-full bg-primary text-gray-200 font-medium
            hover:opacity-90 transition flex items-center justify-center gap-2
            cursor-pointer">
             {loading ? 
             <>
             <span className="w-6 h-6 border-3 border-white/30 border-t-white
             rounded-full animate-spin"></span>
              Envoi message...
             </> : 
             <>
             Envoyer
             <LuSend className="w-4 h-4"/>
             </>}
            </button>
        </form>
        {/* right - contact info */}
        <div className="p-2"
          data-aos="fade-left" data-aos-delay="100" data-aos-anchor-placement="top-center">
          <h3 className="text-xl font-semibold mb-6">Mes information contact</h3>
          <div className="space-y-4">
            {contactInfo.map((contact,index) => (
              <a href={contact.href} key={index} className="flex items-center gap-4 p-4
              rounded-xl hover:bg-surface transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex
                items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <contact.icon className="w-5 h-5 text-primary"/>
                </div>
                <div>
                  <div className="text-gray-400 text-sm">
                    {contact.label}
                  </div>
                  <div className="font-medium">
                    {contact.value}
                  </div>
                </div>

              </a>
            ))}

          </div>
        </div>

        </div>
      </div>
    </section>
  );
}
