import { CONTACTS } from "../constants/constants";
import styles from "../styles/style";

const ContactsItem = ({ icon, text, link }) => {
  return (
    <div
      className={`rounded-[58px] bg-gray-950 bg-opacity-85 max-w-[580px] w-[100%] z-20 ${styles.outline}`}
    >
      <div className="backdrop-blur-sm rounded-[58px] mx-[69px] my-[10px]">
        <a
          href={link}
          target="_blank"
          className="flex flex-row md:gap-[15px] gap-[5px] justify-center items-center"
        >
          {icon !== undefined ? (
            <div className="xl:w-[96px] xl:h-[96px] md:w-[74px] md:h-[74px] w-[52px] h-[52px] text-main-white">
              {icon}
            </div>
          ) : null}
          <p className="flex text-main-white xl:text-[64px] md:text-[42px] text-2xl font-bold xl:h-[96px] md:h-[74px] h-[52px] items-center">
            {text}
          </p>
        </a>
      </div>
    </div>
  );
};

const Contacts = () => {
  return (
    <section className="flex justify-center pt-12 relative" id="contacts">
      <div className="w-[1280px] p-8 flex flex-col">
        <h2 className={styles.heading2}>Contacts:</h2>
        <div className="pt-10 pb-24 flex flex-row gap-[35px] xl:justify-between md:justify-center items-center flex-wrap">
          {CONTACTS.map((contact, index) => {
            return <ContactsItem {...contact} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Contacts;
