import { SpinnerRoundOutlined } from 'spinners-react';
import s from './Loader.module.css';

const Loader = ({ size, color }) => (
  <div className={s.Loader}>
    <SpinnerRoundOutlined size={size} color={color} />
  </div>
);

export default Loader;
