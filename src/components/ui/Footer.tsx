import GitHub from "../../icons/GitHub";
import Divider from "../ui/Divider";

const navigation = {
  social: [
    {
      name: "GitHub",
      href: "https://github.com/Samuelsf22/JGB_Management_Astro_Frontend",
      icon: (
        <GitHub className="hover:text-primary transition duration-300 ease-in-out hover:scale-125" />
      ),
    },
  ],
};

function Footer() {
  return (
    <footer className="relative mt-20 flex w-full flex-col place-items-center pb-20 pt-14 md:flex-row md:justify-between md:pt-16">
      <Divider className="absolute top-0 w-full md:my-9" />
      <div className="flex flex-col gap-4 text-center md:flex-row lg:gap-6">
        <span>
          &copy; {new Date().getFullYear()} José Gálvez Barrenechea{" "}
          <span aria-hidden="true" className="hidden md:inline">
            |
          </span>
          <br aria-hidden="true" className="block md:hidden" /> All rights
          reserved
        </span>
      </div>
      <Divider className="my-4 bg-transparent  md:hidden"/>
      <ul className="flex flex-row items-center gap-x-6">
        {navigation.social.map((item) => (
          <li>
            <a target="_blank" href={item.href}>
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
