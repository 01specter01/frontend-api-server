import { useEffect, useState } from "react";

import { Container, Row } from "react-bootstrap";
import CardPreview from "../components/CardPreview";

function CardsOverview() {
    const [card, setCards] = useState([]);
    useEffect(() => {
        fetch("http://127.0.0.1:4000/cards")
            .then((res) => res.json())
            .then((data) => setCards(data));
    }, []);

    return (
        <>
            <Container>
                <Row>
                    {card.map((p, i) => (
                        <CardPreview key={i} card={p} />
                    ))}
                </Row>
            </Container>
        </>
    );
}
export default CardsOverview;
