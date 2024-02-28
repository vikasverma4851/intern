import "./LoginForm.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div>
      <nav className="navbar">
        <select className="select-wrapper">
          <option value="ca_ES">Catalan</option>
          <option value="cs_CZ">Česky</option>
          <option value="da_DK">Dansk</option>
          <option value="de_DE">Deutsch</option>
          <option value="en_US" selected="selected">
            English
          </option>
          <option value="es_ES">Español</option>
          <option value="fr_FR">Français</option>
          <option value="hu_HU">Magyar</option>
          <option value="is_IS">íslenska</option>
          <option value="it_IT">Italiano</option>
          <option value="ja_JP">日本語</option>
          <option value="ko_KR">한국어</option>
          <option value="nl_NL">Nederlands</option>
          <option value="pl_PL">Polski</option>
          <option value="pt_BR">Português (BR)</option>
          <option value="ru_RU">Русский</option>
          <option value="zh_CN">简体中文</option>
          <option value="zh_TW">繁體中文</option>
        </select>
      </nav>

      <div className="wrapper">
        <form action="">
          <img src="./assets/header_logo.png" alt="barracuda_logo" />
          <div className="form-box">
            <p>Please enter your administrator login and password.</p>
            <div className="input-box">
              <input type="text" placeholder="Username" required />
            </div>

            <div className="input-box">
              <input type="password" placeholder="Password" />
            </div>
            <Link to="/mainpage">
              <button type="submit">Sign in</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
