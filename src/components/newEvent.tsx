"use client";

import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export function NewEvent() {
    const [endDate, setEndDate] = useState(new Date());

    const handleEndDateChange = (date: Date | null) => {
        if (date) {
            setEndDate(date);
        }
    };

    const handleSumbit = async (data: FormData) => {
        //const auctionCreated = await NewAuctionFromForm(data, "653be37c5ee549bea86cd466");

        //window.location.href = `/auction/${auctionCreated.id}`;
    };

    return (
        <Card style={{ marginBottom: "20px" }}>
            <Card.Body>
                <Form action={handleSumbit}>
                    <Form.Group className="mb-3" controlId="formGroupTitle">
                        <Form.Label>Nombre del evento: </Form.Label>{" "}
                        <Form.Control name="eventName" type="title" placeholder="Nombre evento" required />
                    </Form.Group>
                    <Form.Group controlId="formGroupEndDate" className="mb-3">
                        <Form.Label>Fecha y hora de comienzo del evento </Form.Label>{" "}
                        <DatePicker
                            name="date"
                            selected={endDate}
                            onChange={handleEndDateChange}
                            showTimeSelect
                            timeIntervals={15}
                            timeFormat="HH:mm"
                            dateFormat="yyyy-MM-dd h:mm aa"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupDescription">
                        <Form.Label>Codigo postal</Form.Label>
                        <Form.Control name="description" as="textarea" placeholder="Introduzca descripcion" rows={2} required />
                    </Form.Group>
                    <Form.Group controlId="formPicture" className="mb-3">
                        <Form.Label>Seleciona una foto: </Form.Label> {" "}
                        <Form.Control name="picture" type="file" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Crear evento
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}