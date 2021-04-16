import s from './GoBackButton.module.css';

const GoBackButton = ({ state, url, push }) => {
  return (
    <button
      className={s.goback_button}
      onClick={() => push({ pathname: url }, state)}
    >
      Go back
    </button>
  );
};
export default GoBackButton;
