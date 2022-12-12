import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Container, Row, Col, Button } from "react-bootstrap";

export default function Card() {
    const navigate = useNavigate();
    const { cardId } = useParams();

    const [card, setCard] = useState({});

    useEffect(() => {
        fetch(`http://127.0.0.1:4000/cards/${cardId}`)
            .then((response) => response.json())
            .then((data) => setCard(data));
    }, [cardId]);

    const clickHandler = () => {
        fetch(`http://127.0.0.1:4000/cards/${cardId}`, {
            method: "DELETE",
        }).then((response) => {
            if (response.status === 202) {
                navigate("/cards");
            }
        });
    };

    return (
        <Container>
            <Row className="m-3">
                <Col>
                    <div className="card-container">
                        <img src={card.url} alt="" />
                    </div>
                </Col>
                <Col>
                    <div>
                        <Button onClick={clickHandler}>Löschen</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
