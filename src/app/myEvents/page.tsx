"use client";

import { getServerSession } from "next-auth";
import { Col, Container, Row } from "react-bootstrap";

export default async function newAuction() {

    const session = await getServerSession();
    // el email del oganirzador es: session ession?.user?.email
    

    return <>
        <Container fluid="md">
            <Row>
                <Col xs={1}></Col>
                <Col>
                    <h1>MIS EVENTOS</h1>
                </Col>
                <Col xs={1}></Col>
            </Row>
        </Container>
    </>;
}