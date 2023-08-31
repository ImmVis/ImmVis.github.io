import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";


export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-legal">
        <div className="flex gap-x-4">
          <div className="flex self-center text-xl">
            <FontAwesomeIcon icon={solidIcons.faLocationDot} />
          </div>
          <div className="text-sm tracking-tight">
            <span>Linköpings Universitet, Campus Norrköping</span>
            <br />
            <span>601 74 Norrköping, Sweden</span>
          </div>
        </div>

        <div className="flex gap-8 ml-auto">
          <div className="footer-legal-privacy">
            <a>Copyright</a>
            <span>/</span>
            <a>Term of Use</a>
            <span>/</span>
            <a>Privacy</a>
            <span>/</span>
            <a>Integrity policy</a>
          </div>

          <span className="footer-legal-copyright">© ImmVis</span>
        </div>
      </div>
    </div>
  );
}
