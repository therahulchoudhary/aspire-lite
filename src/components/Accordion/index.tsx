import styles from "./Accordion.module.css";

interface Props {
  id: string;
  children: React.ReactNode;
  title: string;
  icon: string;
}

const Accordion = (props: Props): JSX.Element => {
  const { children, title, icon, id } = props;
  return (
    <div className="accordion mb-3" id={id}>
      <div className={`accordion-item ${styles.accordionItem}`}>
        <h2 className="accordion-header" id={`heading${id}`}>
          <button
            className={`accordion-button ${styles.accordionButton}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse${id}`}
            aria-expanded="true"
            aria-controls="collapse"
          >
            <div className="d-flex align-items-center">
              <img src={icon} />
              <p className="m-0 ms-2">{title}</p>
            </div>
          </button>
        </h2>
        <div
          id={`collapse${id}`}
          className="accordion-collapse collapse show"
          aria-labelledby={`heading${id}`}
          data-bs-parent={`#${id}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
