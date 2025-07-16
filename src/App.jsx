import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./components/Header";
import LabelInfoForm from "./components/LabelInfoForm";
import QrDataSection from "./components/QrDataSection";
import LabelPreview from "./components/LabelPreview";
import Footer from "./components/Footer";

function App() {
  const [formData, setFormData] = useState({
    title: "B12 II",
    ref: "07212771",
    m: "6.5 mL",
    r1: "10 mL",
    r2: "8.5 mL",
    lot: "80642201",
    expiry: "2026-02-28",
  });

  const [longQrImage, setLongQrImage] = useState(null);
  const [smallQrImage, setSmallQrImage] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Function to refresh the page
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <Container
      fluid
      className="py-4"
      style={{
        background: "linear-gradient(135deg, #f5f7fa 0%, #e4edf5 100%)",
        minHeight: "100vh",
      }}
    >
      <Header />

      <Row className="mb-4">
        <Col md={6}>
          <LabelInfoForm
            formData={formData}
            handleInputChange={handleInputChange}
          />
        </Col>
        <Col md={6}>
          <QrDataSection
            longQrImage={longQrImage}
            setLongQrImage={setLongQrImage}
            smallQrImage={smallQrImage}
            setSmallQrImage={setSmallQrImage}
          />
        </Col>
      </Row>

      <LabelPreview
        formData={formData}
        longQrImage={longQrImage}
        smallQrImage={smallQrImage}
        onRefresh={handleRefresh}
      />

      <Footer />
    </Container>
  );
}

export default App;
