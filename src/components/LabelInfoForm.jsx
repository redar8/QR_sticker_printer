// import React from "react";
// import { Card, Form, Row, Col } from "react-bootstrap";

// const LabelInfoForm = ({ formData, handleInputChange }) => {
//   return (
//     <Card className="mb-4 shadow-sm h-100">
//       <Card.Header className="d-flex align-items-center gap-2 border-bottom border-primary pb-2">
//         <div
//           className="bg-primary text-white d-flex align-items-center justify-content-center rounded"
//           style={{ width: "40px", height: "40px" }}
//         >
//           <i className="fas fa-tag"></i>
//         </div>
//         <h2 className="mb-0">Label Information</h2>
//       </Card.Header>
//       <Card.Body>
//         <Row>
//           <Col sm={6}>
//             <Form.Group className="mb-3">
//               <Form.Label>
//                 <i className="fas fa-heading me-2 text-primary"></i>Title
//               </Form.Label>
//               <Form.Control
//                 type="text"
//                 id="title"
//                 value={formData.title}
//                 onChange={handleInputChange}
//                 placeholder="e.g., B12 II"
//               />
//             </Form.Group>
//           </Col>

//           <Col sm={6}>
//             <Form.Group className="mb-3">
//               <Form.Label>
//                 <i className="fas fa-hashtag me-2 text-primary"></i>REF
//               </Form.Label>
//               <Form.Control
//                 type="text"
//                 id="ref"
//                 value={formData.ref}
//                 onChange={handleInputChange}
//                 placeholder="Reference number"
//               />
//             </Form.Group>
//           </Col>

//           <Col sm={6}>
//             <Form.Group className="mb-3">
//               <Form.Label>
//                 <i className="fas fa-flask me-2 text-primary"></i>M
//               </Form.Label>
//               <Form.Control
//                 type="text"
//                 id="m"
//                 value={formData.m}
//                 onChange={handleInputChange}
//                 placeholder="e.g., 6.5 mL"
//               />
//             </Form.Group>
//           </Col>

//           <Col sm={6}>
//             <Form.Group className="mb-3">
//               <Form.Label>
//                 <i className="fas fa-vial me-2 text-primary"></i>R1
//               </Form.Label>
//               <Form.Control
//                 type="text"
//                 id="r1"
//                 value={formData.r1}
//                 onChange={handleInputChange}
//                 placeholder="e.g., 10 mL"
//               />
//             </Form.Group>
//           </Col>

//           <Col sm={6}>
//             <Form.Group className="mb-3">
//               <Form.Label>
//                 <i className="fas fa-vial me-2 text-primary"></i>R2
//               </Form.Label>
//               <Form.Control
//                 type="text"
//                 id="r2"
//                 value={formData.r2}
//                 onChange={handleInputChange}
//                 placeholder="e.g., 8.5 mL"
//               />
//             </Form.Group>
//           </Col>

//           <Col sm={6}>
//             <Form.Group className="mb-3">
//               <Form.Label>
//                 <i className="fas fa-barcode me-2 text-primary"></i>LOT
//               </Form.Label>
//               <Form.Control
//                 type="text"
//                 id="lot"
//                 value={formData.lot}
//                 onChange={handleInputChange}
//                 placeholder="Lot number"
//               />
//             </Form.Group>
//           </Col>

//           <Col sm={6}>
//             <Form.Group className="mb-3">
//               <Form.Label>
//                 <i className="fas fa-calendar-times me-2 text-primary"></i>
//                 Expiry Date
//               </Form.Label>
//               <Form.Control
//                 type="date"
//                 id="expiry"
//                 value={formData.expiry}
//                 onChange={handleInputChange}
//               />
//             </Form.Group>
//           </Col>
//         </Row>
//       </Card.Body>
//     </Card>
//   );
// };

// export default LabelInfoForm;

import React from "react";
import { Card, Form, Row, Col } from "react-bootstrap";

const LabelInfoForm = ({ formData, handleInputChange }) => {
  return (
    <Card className="mb-4 shadow-sm h-100">
      <Card.Header className="d-flex align-items-center gap-2 border-bottom border-primary pb-2">
        <div
          className="bg-primary text-white d-flex align-items-center justify-content-center rounded"
          style={{ width: "40px", height: "40px" }}
        >
          <i className="fas fa-tag"></i>
        </div>
        <h2 className="mb-0">Label Information</h2>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col sm={6}>
            <Form.Group className="mb-3">
              <Form.Label>
                <i className="fas fa-heading me-2 text-primary"></i>Title
              </Form.Label>
              <Form.Control
                type="text"
                id="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="e.g., B12 II"
              />
            </Form.Group>
          </Col>

          <Col sm={6}>
            <Form.Group className="mb-3">
              <Form.Label>
                <i className="fas fa-hashtag me-2 text-primary"></i>REF
              </Form.Label>
              <Form.Control
                type="text"
                id="ref"
                value={formData.ref}
                onChange={handleInputChange}
                placeholder="Reference number"
              />
            </Form.Group>
          </Col>

          <Col sm={6}>
            <Form.Group className="mb-3">
              <Form.Label>
                <i className="fas fa-flask me-2 text-primary"></i>M
              </Form.Label>
              <Form.Control
                type="text"
                id="m"
                value={formData.m}
                onChange={handleInputChange}
                placeholder="e.g., 6.5 mL"
              />
            </Form.Group>
          </Col>

          <Col sm={6}>
            <Form.Group className="mb-3">
              <Form.Label>
                <i className="fas fa-vial me-2 text-primary"></i>R1
              </Form.Label>
              <Form.Control
                type="text"
                id="r1"
                value={formData.r1}
                onChange={handleInputChange}
                placeholder="e.g., 10 mL"
              />
            </Form.Group>
          </Col>

          <Col sm={6}>
            <Form.Group className="mb-3">
              <Form.Label>
                <i className="fas fa-vial me-2 text-primary"></i>R2
              </Form.Label>
              <Form.Control
                type="text"
                id="r2"
                value={formData.r2}
                onChange={handleInputChange}
                placeholder="e.g., 8.5 mL"
              />
            </Form.Group>
          </Col>

          <Col sm={6}>
            <Form.Group className="mb-3">
              <Form.Label>
                <i className="fas fa-barcode me-2 text-primary"></i>LOT
              </Form.Label>
              <Form.Control
                type="text"
                id="lot"
                value={formData.lot}
                onChange={handleInputChange}
                placeholder="Lot number"
              />
            </Form.Group>
          </Col>

          {/* Serial Number Field Added Here */}
          <Col sm={6}>
            <Form.Group className="mb-3">
              <Form.Label>
                <i className="fas fa-hashtag me-2 text-primary"></i>Serial
              </Form.Label>
              <Form.Control
                type="text"
                id="serial"
                value={formData.serial}
                onChange={handleInputChange}
                placeholder="Serial number"
              />
            </Form.Group>
          </Col>

          <Col sm={6}>
            <Form.Group className="mb-3">
              <Form.Label>
                <i className="fas fa-calendar-times me-2 text-primary"></i>
                Expiry Date
              </Form.Label>
              <Form.Control
                type="date"
                id="expiry"
                value={formData.expiry}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default LabelInfoForm;
