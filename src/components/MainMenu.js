import { Link } from "react-router-dom";
import { MainMenuContainer } from "../style/MainMenuContainer";

export const MainMenu = () => (
    <MainMenuContainer>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Sobre</Link></li>
        </ul>
    </MainMenuContainer>
)