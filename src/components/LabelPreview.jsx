// import React from "react";
// import { Card, Button } from "react-bootstrap";
// import StickerPreview from "./StickerPreview";

// const LabelPreview = ({ formData, longQrImage, smallQrImage, onRefresh }) => {
//   const printLabel = () => {
//     window.print();
//   };

//   return (
//     <Card className="shadow-sm">
//       <Card.Header className="d-flex justify-content-between align-items-center border-bottom border-primary pb-2">
//         <h2 className="mb-0">Label Preview</h2>
//         <div>
//           <span
//             className="d-inline-block bg-success rounded-circle me-2"
//             style={{ width: "10px", height: "10px" }}
//           ></span>
//           <span className="text-success fw-bold">Preview Ready</span>
//         </div>
//       </Card.Header>
//       <Card.Body>
//         <StickerPreview
//           formData={formData}
//           longQrImage={longQrImage}
//           smallQrImage={smallQrImage}
//         />

//         <div className="d-flex justify-content-center gap-3 mt-4">
//           <Button
//             variant="primary"
//             className="d-flex align-items-center gap-2"
//             onClick={onRefresh}
//           >
//             <i className="fas fa-redo"></i> Refresh Preview
//           </Button>
//           <Button
//             variant="success"
//             className="d-flex align-items-center gap-2"
//             onClick={printLabel}
//           >
//             <i className="fas fa-print"></i> Print Now
//           </Button>
//         </div>
//       </Card.Body>
//     </Card>
//   );
// };

// export default LabelPreview;

import React, { useRef } from "react";
import { Card, Button } from "react-bootstrap";
import StickerPreview from "./StickerPreview";

const LabelPreview = ({ formData, longQrImage, smallQrImage, onRefresh }) => {
  const stickerRef = useRef();

  const printLabel = () => {
    const printWindow = window.open("", "_blank");

    // Get the HTML content of the sticker
    const stickerContent = stickerRef.current.innerHTML;

    // Get current stylesheets
    const stylesheets = Array.from(document.styleSheets)
      .map((sheet) => {
        try {
          return Array.from(sheet.cssRules)
            .map((rule) => rule.cssText)
            .join("");
        } catch (e) {
          return "";
        }
      })
      .join("");

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Print Sticker</title>
          <style>
            ${stylesheets}
            
            /* Print-specific styles */
            @page {
              size: 47.2mm 72mm !important;
              margin: 0 !important;
              padding: 0 !important;
            }
            
            body {
              margin: 0 !important;
              padding: 0 !important;
              background-color: white !important;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              width: 47.2mm !important;
              height: 72mm !important;
              overflow: hidden !important;
            }
            
            .sticker-preview-container {
              display: flex !important;
              justify-content: center !important;
              padding: 0 !important;
              gap: 0 !important;
              background: transparent !important;
              box-shadow: none !important;
              position: absolute !important;
              top: 0 !important;
              left: 0 !important;
              width: 47.2mm !important;
              height: 72mm !important;
            }
            
            .sticker {
              position: absolute !important;
              top: 0 !important;
              left: 0 !important;
              width: 47.2mm !important;
              height: 72mm !important;
              border: none !important;
              box-shadow: none !important;
              margin: 0 !important;
              padding: 0 !important;
              transform: none !important;
            }
            
            /* Ensure all elements are positioned correctly */
            .barcode-section, .serial-number, .info-section, 
            .ivd-badge, .small-qr-section, .bottom-info {
              position: absolute !important;
              margin: 0 !important;
              padding: 0 !important;
            }
          </style>
        </head>
        <body>
          <div class="sticker-preview-container">
            <div class="sticker position-relative">
              ${stickerContent}
            </div>
          </div>
        </body>
      </html>
    `);

    printWindow.document.close();

    printWindow.onload = () => {
      // Give the browser a moment to render
      setTimeout(() => {
        printWindow.focus();
        printWindow.print();
        printWindow.onafterprint = () => printWindow.close();
      }, 300);
    };
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
          ref={stickerRef}
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
