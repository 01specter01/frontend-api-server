import { useEffect, useState } from "react";

import { Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import CardPreview from "../components/CardPreview";

function CardsOverview() {
    const navigate = useNavigate();
    const { cardId } = useParams();
    const [card, setCards] = useState({});

    useEffect(() => {
        fetch(`http://127.0.0.1:4000/cards/${cardId}`)
            .then((res) => res.json())
            .then((data) => setCards(data));
    }, [cardId]);

    // const clickHandler = () => {
    //     fetch(`http://127.0.0.1:4000/cards/${cardId}`, {
    //         method: "DELETE",
    //     }).then((response) => {

    //         if (response.status === 202) {
    //             navigate("/cards");
    //         }
    //     });
    };

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
