import s from './GoBackButton.module.css';

const GoBackButton = ({ state, url, push, search }) => {
  return (
    <button
      className={s.goback_button}
      onClick={() => push({ pathname: url, search: search }, state)}
    >
      Go back
    </button>
  );
};
export default GoBackButton;
