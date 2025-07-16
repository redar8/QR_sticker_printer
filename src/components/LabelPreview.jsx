import React from "react";
import { Card, Button } from "react-bootstrap";
import StickerPreview from "./StickerPreview";

const LabelPreview = ({ formData, longQrImage, smallQrImage, onRefresh }) => {
  const printLabel = () => {
    window.print();
  };

  return (
    <Card className="shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center border-bottom border-primary pb-2">
        <h2 className="mb-0">Label Preview</h2>
        <div>
          <span
            className="d-inline-block bg-success rounded-circle me-2"
            style={{ width: "10px", height: "10px" }}
          ></span>
          <span className="text-success fw-bold">Preview Ready</span>
        </div>
      </Card.Header>
      <Card.Body>
        <StickerPreview
          formData={formData}
          longQrImage={longQrImage}
          smallQrImage={smallQrImage}
        />

        <div className="d-flex justify-content-center gap-3 mt-4">
          <Button
            variant="primary"
            className="d-flex align-items-center gap-2"
            onClick={onRefresh}
          >
            <i className="fas fa-redo"></i> Refresh Preview
          </Button>
          <Button
            variant="success"
            className="d-flex align-items-center gap-2"
            onClick={printLabel}
          >
            <i className="fas fa-print"></i> Print Now
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default LabelPreview;
