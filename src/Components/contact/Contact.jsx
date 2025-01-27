// src/components/contact/Contact.jsx
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { SectionTitle } from '../common/SectionTitle';

const ContactLink = ({ Icon, href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
  >
    <Icon size={20} />
    <span>{children}</span>
  </a>
);

const Contact = () => {
  const contactLinks = [
    {
      Icon: MdOutlineEmail,
      href: "mailto:manojrgowdamanoj@gmail.com",
      text: "manojrgowdamanoj@gmail.com"
    },
    {
      Icon: CiLinkedin,
      href: "https://www.linkedin.com/in/manojr06",
      text: "LinkedIn"
    },
    {
      Icon: FaGithub,
      href: "https://github.com/Manojgowda2000",
      text: "GitHub"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-[#465697]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <SectionTitle className="mb-4">Contact</SectionTitle>
          <p className="text-xl text-gray-200">Feel free to reach out!</p>
        </div>
        
        <div className="space-y-4">
          {contactLinks.map((link, index) => (
            <ContactLink key={index} {...link}>
              {link.text}
            </ContactLink>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Contact;