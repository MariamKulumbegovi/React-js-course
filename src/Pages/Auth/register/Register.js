import { LoginForm } from '../../../components/forms/loginform/LoginForm';

export const Register = () => {
  return (
    <div className="container">
      <div class="field">
        <label class="label">Username</label>
        <div class="control has-icons-left has-icons-right">
          <input
            class="input is-success"
            type="text"
            placeholder="Text input"
            value="bulma"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </div>
      </div>
      <LoginForm />
    </div>
  );
};
