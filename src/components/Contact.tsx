import '../styles/global.css';
import { Mail, Phone } from "lucide-react";
import { FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import contactData from "@/lib/contact.json";

export default function ContactSection() {
  return (
    <div className="text-neutral-300 pt-[2rem] flex flex-col items-center gap-[2rem] text-sm">
      <p className="text-center max-w-2xl">
        You can reach me via email, phone, WhatsApp, or follow me on social media.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
        {contactData.contacts.map((contact, index) => {
          let Icon: React.ElementType;

          switch (contact.type) {
            case "email": Icon = Mail; break;
            case "phone": Icon = Phone; break;
            case "linkedin": Icon = FaLinkedin; break;
            case "facebook": Icon = FaFacebook; break;
            case "instagram": Icon = FaInstagram; break;
            case "whatsapp": Icon = FaWhatsapp; break;
            default: Icon = Mail;
          }

          return (
            <motion.a
              key={index}
              href={contact.link}
              target="_blank"
              className="group p-4 rounded-2xl bg-neutral-800 shadow-md flex items-center gap-3 border-2 border-transparent hover:border-yellow-300 cursor-pointer"
              whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(250,204,21,0.7)" }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
            >
              <Icon className="w-6 h-6 text-yellow-200" />
              <span className="text-neutral-100">{contact.label}</span>
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}
