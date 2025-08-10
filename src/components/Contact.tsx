export default function Contact() {
  return (
    <div id="contact">
      <SvgDef />
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

function ContactItem({ href, iconName }: ContactItemProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <svg className={`icon ${iconName}`}>
        <use xlinkHref={`#${iconName}`}></use>
      </svg>
    </a>
  );
}

function SvgDef() {
  return (
    <svg
      aria-hidden="true"
      style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <symbol id="icon-bubble" viewBox="0 0 32 32">
          <path d="M16 2c8.837 0 16 5.82 16 13s-7.163 13-16 13c-0.849 0-1.682-0.054-2.495-0.158-3.437 3.437-7.539 4.053-11.505 4.144v-0.841c2.142-1.049 4-2.961 4-5.145 0-0.305-0.024-0.604-0.068-0.897-3.619-2.383-5.932-6.024-5.932-10.103 0-7.18 7.163-13 16-13z"></path>
        </symbol>
        <symbol id="icon-mail" viewBox="0 0 32 32">
          <path d="M26.666 0h-21.332c-2.934 0-5.334 2.4-5.334 5.333v21.333c0 2.934 2.4 5.334 5.334 5.334h21.332c2.936 0 5.334-2.4 5.334-5.334v-21.333c0-2.934-2.398-5.333-5.334-5.333zM8 8h16c0.286 0 0.563 0.061 0.817 0.177l-8.817 10.286-8.817-10.287c0.254-0.116 0.531-0.177 0.817-0.177zM6 22v-12c0-0.042 0.002-0.084 0.004-0.125l5.864 6.842-5.8 5.8c-0.045-0.167-0.069-0.34-0.069-0.517zM24 24h-16c-0.177 0-0.35-0.024-0.517-0.069l5.691-5.691 2.826 3.297 2.826-3.297 5.691 5.691c-0.167 0.045-0.34 0.069-0.517 0.069zM26 22c0 0.177-0.024 0.35-0.069 0.517l-5.8-5.8 5.864-6.842c0.003 0.041 0.004 0.083 0.004 0.125v12z"></path>
        </symbol>
        <symbol id="icon-git" viewBox="0 0 32 32">
          <path d="M31.397 14.575l-13.972-13.971c-0.804-0.805-2.109-0.805-2.915 0l-3.246 3.246 2.443 2.443c0.392-0.187 0.83-0.293 1.293-0.293 1.657 0 3 1.343 3 3 0 0.463-0.105 0.902-0.293 1.293l3.999 3.999c0.392-0.187 0.83-0.293 1.293-0.293 1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3c0-0.463 0.105-0.902 0.293-1.293l-3.999-3.999c-0.095 0.046-0.193 0.086-0.293 0.121v8.343c1.165 0.412 2 1.522 2 2.829 0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.306 0.835-2.417 2-2.829v-8.343c-1.165-0.412-2-1.522-2-2.829 0-0.463 0.105-0.902 0.293-1.293l-2.443-2.443-9.247 9.246c-0.805 0.806-0.805 2.11 0 2.915l13.973 13.971c0.804 0.805 2.109 0.805 2.915 0l13.906-13.906c0.805-0.805 0.805-2.111-0-2.915z"></path>
        </symbol>
      </defs>
    </svg>
  );
}
