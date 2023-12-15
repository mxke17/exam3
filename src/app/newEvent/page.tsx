"use client";

import { NewEvent } from "@/components/newEvent";
import { Col, Container, Row } from "react-bootstrap";

export default async function newEvent() {

    return <>
        <Container fluid="md">
            <Row>
                <Col xs={1}></Col>
                <Col>
                    <NewEvent></NewEvent>
                </Col>
                <Col xs={1}></Col>
            </Row>
        </Container>
    </>;
}