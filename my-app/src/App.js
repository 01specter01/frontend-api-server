import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navi from "./components/Navi";
import Main from "./views/Main";
import Card from "./views/Card";
import CardsOverview from "./views/CardsOverview";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navi />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/cards/:cardsId" element={<Card />} />
                    <Route path="/cards" element={<CardsOverview />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
