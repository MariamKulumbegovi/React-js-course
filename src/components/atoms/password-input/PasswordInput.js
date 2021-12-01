import { useEffect, useState } from 'react';
import { PASSWORD_MIN_VALUE } from '../../../constants/Validation';

export const PasswordInput = () => {
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  useEffect(() => {
    if (password && password.length < PASSWORD_MIN_VALUE) {
      setPasswordError(true);
    } else if (password && password.length >= PASSWORD_MIN_VALUE) {
      setPasswordError(false);
    }
  }, [password]);

  const getClassName2 = () => {
    let errorClassName = '';
    if (password && password.length < PASSWORD_MIN_VALUE) {
      errorClassName = 'is-danger';
    } else if (password && password.length >= PASSWORD_MIN_VALUE) {
      errorClassName = 'is-success';
    }
    return errorClassName;
  };

  return (
    <p className="control has-icons-left has-icons-right">
      <input
        className={`input ${getClassName2()}`}
        type="password"
        placeholder="Password"
        name="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
        required
      />
      <span className="icon is-small is-left">
        <i className="fas fa-lock"></i>
      </span>
      {!passwordError && password && (
        <span className="icon is-small is-right">
          <i className="fas fa-check"></i>
        </span>
      )}
      {passwordError && password && (
        <span className="icon is-small is-right">
          <i className="fas fa-exclamation-triangle"></i>
        </span>
      )}
    </p>
  );
};
