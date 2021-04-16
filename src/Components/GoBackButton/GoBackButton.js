import { useLocation, useHistory } from 'react-router-dom';

const GoBackButton = (pathname, push) => {
  // const { pathname } = useLocation();
  // const { push } = useHistory();

  return <button onClick={() => push(`${pathname}`)}>Go back</button>;
};
export default GoBackButton;
