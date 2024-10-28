import Container from "../../shared/Container/Container";
import Behance from "../../icons/Behance";
import Instagram from "../../icons/Instagram";
import WhatsApp from "../../icons/WhatsApp";
import Pintrest from "../../icons/Pintrest";
import LinkedIn from "../../icons/LinkedIn";
import Twitter from "../../icons/Twitter";
import Telegram from "../../icons/Telegram";
import SnapChat from "../../icons/SnapChat";
import { Link } from "react-router-dom";
// Social channels data
const socialChannels = [
  { id: 1, name: "Behance", icon: Behance, link: "#" },
  { id: 2, name: "Instagram", icon: Instagram, link: "#" },
  { id: 3, name: "WhatsApp", icon: WhatsApp, link: "#" },
  { id: 4, name: "Pintrest", icon: Pintrest, link: "#" },
  { id: 5, name: "LinkedIn", icon: LinkedIn, link: "#" },
  { id: 6, name: "Telegram", icon: Telegram, link: "#" },
  { id: 7, name: "Twitter", icon: Twitter, link: "#" },
  { id: 8, name: "Snapchat", icon: SnapChat, link: "#" },
];
const SocialNetworks = () => {
  return (
    <section className="mt-[90px] lg:mt-[120px] xl:mt-[150px]">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[30px]">
          {socialChannels.map((social, index) => (
            <Link key={index} to={social.link}>
              <div className="border border-[#E7E7EB] p-4">
                <div className="flex justify-center items-center max-w-[120px] h-[40px] mx-auto">
                  <social.icon />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SocialNetworks;
