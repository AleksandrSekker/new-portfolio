import { links, user } from "@/constants/general";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
type FooterProps = {
  firstName?: string;
  lastName?: string;
  linksArray?: { link: string; id: number; icon: IconDefinition }[];
};
const Footer = ({
  firstName = user.firstName,
  lastName = user.lastName,
  linksArray = links,
}: FooterProps) => {
  return (
    <footer className="bg-background-light  p-4 dark:bg-background-dark sm:p-6">
      <div className="mx-auto max-w-screen-xl">
        <div className="text-center sm:flex sm:items-center sm:justify-between">
          <span className="w-100 order-last text-center text-sm text-white sm:order-first">
            {`© ${firstName} ${lastName} ${new Date().getFullYear()}`}
          </span>
          <div className="mt-4 flex justify-center space-x-6 sm:mt-0">
            {linksArray.map(({ link, icon, id }) => (
              <Link key={id} href={link}>
                <FontAwesomeIcon
                  icon={icon}
                  className="h-4 w-4 text-white hover:text-gray-600"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
