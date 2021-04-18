import PropTypes from 'prop-types';
import s from './GoBackButton.module.css';

const GoBackButton = ({ state, url, push, search }) => {
  return (
    <button
      className={s.goback_button}
      onClick={() => {
        const params =
          search?.indexOf('?') !== -1
            ? { pathname: url, search }
            : { pathname: url };
        push(params, state);
      }}
    >
      Go back
    </button>
  );
};
export default GoBackButton;

GoBackButton.propTypes = {
  state: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
  push: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};
