import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <b>Contact </b>
      <ContactItem
        name="Email"
        href="mailto:mail@rhroberts.dev"
        iconName="icon-mail"
      />
      <ContactItem
        name="Matrix"
        href="https://matrix.to/#/@rustyr:matrix.org"
        iconName="icon-bubble"
      />
      <ContactItem
        name="GitHub"
        href="https://github.com/rhroberts"
        iconName="icon-git"
      />
    </div>
  );
}

interface ContactItemProps {
  name: string;
  iconName: string;
  href: string;
}

function ContactItem({ name, href, iconName }: ContactItemProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={name}>
      <svg className={`${styles.icon} ${iconName}`}>
        <use xlinkHref={`#${iconName}`}></use>
      </svg>
    </a>
  );
}
