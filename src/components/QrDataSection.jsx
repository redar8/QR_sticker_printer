import React from "react";
import { Card, Form, Button } from "react-bootstrap";

const QrDataSection = ({
  longQrImage,
  setLongQrImage,
  smallQrImage,
  setSmallQrImage,
}) => {
  const handleFileUpload = (e, setImage) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Card className="mb-4 shadow-sm h-100">
      <Card.Header className="d-flex align-items-center gap-2 border-bottom border-primary pb-2">
        <div
          className="bg-primary text-white d-flex align-items-center justify-content-center rounded"
          style={{ width: "40px", height: "40px" }}
        >
          <i className="fas fa-qrcode"></i>
        </div>
        <h2 className="mb-0">QR Codes & Data</h2>
      </Card.Header>
      <Card.Body>
        {/* Vertical Barcode Section */}
        <div className="mb-4">
          <h5 className="mb-3">
            <i className="fas fa-barcode me-2 text-primary"></i>
            Vertical Barcode/Data Matrix (66mm × 21mm)
          </h5>

          <Form.Group>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={(e) => handleFileUpload(e, setLongQrImage)}
              className="d-none"
              id="longQrFile"
            />

            <div
              className="border border-2 border-dashed rounded p-4 text-center cursor-pointer"
              onClick={() => document.getElementById("longQrFile").click()}
            >
              <div className="text-primary mb-3">
                <i className="fas fa-cloud-upload-alt fa-2x"></i>
              </div>
              <h6>Upload Barcode/Data Matrix Image</h6>
              <p className="text-muted small mb-0">
                Supports JPG, PNG, GIF, SVG | Drag & Drop or Click to Upload
              </p>
            </div>

            {longQrImage && (
              <div className="mt-3 text-center">
                <img
                  src={longQrImage}
                  alt="Long QR Preview"
                  className="img-fluid rounded border shadow-sm"
                  style={{ maxHeight: "120px" }}
                />
                <Button
                  variant="danger"
                  size="sm"
                  className="mt-2"
                  onClick={() => setLongQrImage(null)}
                >
                  <i className="fas fa-trash-alt me-2"></i>Clear Image
                </Button>
              </div>
            )}
          </Form.Group>
        </div>

        {/* Small QR Section */}
        <div>
          <h5 className="mb-3">
            <i className="fas fa-qrcode me-2 text-primary"></i>
            Small QR/Data Matrix Code
          </h5>

          <Form.Group>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={(e) => handleFileUpload(e, setSmallQrImage)}
              className="d-none"
              id="smallQrFile"
            />

            <div
              className="border border-2 border-dashed rounded p-4 text-center cursor-pointer"
              onClick={() => document.getElementById("smallQrFile").click()}
            >
              <div className="text-primary mb-3">
                <i className="fas fa-cloud-upload-alt fa-2x"></i>
              </div>
              <h6>Upload Small QR/Data Matrix Image</h6>
              <p className="text-muted small mb-0">
                Supports JPG, PNG, GIF, SVG | Drag & Drop or Click to Upload
              </p>
            </div>

            {smallQrImage && (
              <div className="mt-3 text-center">
                <img
                  src={smallQrImage}
                  alt="Small QR Preview"
                  className="img-fluid rounded border shadow-sm"
                  style={{ maxHeight: "120px" }}
                />
                <Button
                  variant="danger"
                  size="sm"
                  className="mt-2"
                  onClick={() => setSmallQrImage(null)}
                >
                  <i className="fas fa-trash-alt me-2"></i>Clear Image
                </Button>
              </div>
            )}
          </Form.Group>
        </div>
      </Card.Body>
    </Card>
  );
};

export default QrDataSection;
