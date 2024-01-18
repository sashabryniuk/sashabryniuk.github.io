import { CONTACTS } from "../constants/constants";
import styles from "../styles/style";

const ContactsItem = ({ icon, text, link }) => {
  return (
    <div
      className={`rounded-[10px] p-1 md:max-w-[270px] w-[100%] z-20 ${styles.outline} text-main-white bg-main-blue hover:bg-main-white hover:text-main-blue duration-100`}
    >
      <a
        href={link}
        target="_blank"
        className="flex flex-row md:gap-[15px] gap-[5px] justify-center items-center"
      >
        {icon !== undefined ? (
          <div className={`${styles.contactsText} max-w-[42px] max-h-[42px]`}>
            {icon}
          </div>
        ) : null}
        <p
          className={`${styles.contactsText} flex justify-center items-center`}
        >
          {text}
        </p>
      </a>
    </div>
  );
};

const Contacts = () => {
  return (
    <div className="mt-4 flex flex-row flex-wrap gap-4 max-w-[560px]">
      {CONTACTS.map((contact, index) => {
        return <ContactsItem {...contact} key={index} />;
      })}
    </div>
  );
};

export default Contacts;
