import photo from "../assets/images/IMG-2508.jpg";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div>
        <img src={photo} alt="Laurens professional pic" />
      </div>

      <div>
        <h1>Lauren Gabaldon</h1>
      </div>
    </header>
  );
}
