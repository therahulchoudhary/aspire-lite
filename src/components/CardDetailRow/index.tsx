import styles from './CardDetailRow.module.css';

interface Props {
    title: string,
    value: string
}

const CardDetailRow = (props: Props): JSX.Element => {
    const {title, value} = props;
    return (
      <div
        className={`d-flex justify-content-between py-3 mx-2 ${styles.cardDetailRow}`}
      >
        <p className="m-0">{title}</p>
        <p className="m-0 text-black-50">{value}</p>
      </div>
    );
};

export default CardDetailRow