// import React, { useRef, useEffect } from "react";
// import QRCode from "qrcode";

// const StickerPreview = ({ formData, longQrImage, smallQrImage }) => {
//   const smallQrCanvasRef = useRef(null);
//   const [smallQrData, setSmallQrData] = React.useState("");

//   useEffect(() => {
//     if (!smallQrImage && smallQrCanvasRef.current) {
//       const data = `Product: ${formData.title}\nREF: ${formData.ref}\nM: ${formData.m}\nR1: ${formData.r1}\nR2: ${formData.r2}\nLOT: ${formData.lot}\nExpiry: ${formData.expiry}`;

//       if (data !== smallQrData) {
//         setSmallQrData(data);
//         QRCode.toCanvas(
//           smallQrCanvasRef.current,
//           data,
//           { width: 80 },
//           (error) => {
//             if (error) console.error(error);
//           }
//         );
//       }
//     }
//   }, [formData, smallQrImage, smallQrData]);

//   return (
//     <div className="d-flex justify-content-center p-4 bg-light rounded">
//       <div
//         className="position-relative sticker"
//         style={{
//           width: "47.2mm",
//           height: "72mm",
//           border: "2px solid #333",
//           background: "white",
//           boxShadow: "0 6px 15px rgba(0, 0, 0, 0.15)",
//         }}
//       >
//         {/* Barcode section */}
//         <div
//           className="position-absolute"
//           style={{
//             left: "9px",
//             top: "10px",
//             border: "1px solid #ccc",
//             background: "white",
//             width: "21mm",
//             height: "66mm",
//           }}
//         >
//           {longQrImage ? (
//             <img
//               src={longQrImage}
//               alt="Barcode"
//               className="w-100 h-100"
//               style={{ objectFit: "cover" }}
//             />
//           ) : (
//             <div className="d-flex flex-column align-items-center justify-content-center h-100 text-muted">
//               <span className="small">Upload Barcode</span>
//             </div>
//           )}
//         </div>
//         {/* Serial number */}
//         <div
//           className="position-absolute"
//           style={{
//             left: "55%",
//             bottom: "10%",
//             fontSize: "6px",
//             color: "#666",
//             transform: "rotate(-90deg)",
//             transformOrigin: "left bottom",
//             width: "200px",
//           }}
//         >
//           117654096072056
//         </div>

//         {/* Information section */}
//         <div
//           className="position-absolute"
//           style={{
//             left: "98px",
//             top: "8px",
//             width: "80px",
//             fontSize: "11px",
//             lineHeight: "1.3",
//           }}
//         >
//           <div className="fw-bold mb-1" style={{ fontSize: "18px" }}>
//             {formData.title}
//           </div>
//           <div
//             className="border border-secondary d-inline-block px-1 mb-1"
//             style={{ fontSize: "10px" }}
//           >
//             1410
//           </div>

//           <div className="d-flex align-items-center gap-1 mb-1">
//             <span
//               className="fw-bold border border-secondary px-1 small"
//               style={{ minWidth: "20px", fontSize: "10px" }}
//             >
//               REF
//             </span>
//             <span style={{ fontSize: "9px" }}>{formData.ref}</span>
//           </div>

//           <div className="d-flex align-items-center gap-1 mb-1">
//             <span
//               className="fw-bold border border-secondary px-1 small"
//               style={{ minWidth: "20px", fontSize: "10px" }}
//             >
//               M
//             </span>
//             <span style={{ fontSize: "9px" }}>{formData.m}</span>
//           </div>

//           <div className="d-flex align-items-center gap-1 mb-1">
//             <span
//               className="fw-bold border border-secondary px-1 small"
//               style={{ minWidth: "20px", fontSize: "10px" }}
//             >
//               R1
//             </span>
//             <span style={{ fontSize: "9px" }}>{formData.r1}</span>
//           </div>

//           <div className="d-flex align-items-center gap-1 mb-1">
//             <span
//               className="fw-bold border border-secondary px-1 small"
//               style={{ minWidth: "20px", fontSize: "10px" }}
//             >
//               R2
//             </span>
//             <span style={{ fontSize: "9px" }}>{formData.r2}</span>
//           </div>

//           <div className="d-flex align-items-center gap-1 mb-1">
//             <span
//               className=" px-1 small"
//               style={{ minWidth: "20px", fontSize: "10px" }}
//             >
//               &nbsp;
//             </span>
//             <span style={{ fontSize: "9px" }}> 6162</span>
//           </div>

//           <div className="d-flex align-items-center gap-1 mb-1">
//             <span
//               className="fw-bold border border-secondary px-1 small"
//               style={{ minWidth: "20px", fontSize: "9px" }}
//             >
//               LOT
//             </span>
//             <span className="small" style={{ fontSize: "9px" }}>
//               {formData.lot}
//             </span>
//           </div>

//           <div
//             className="d-flex align-items-center gap-1 mt-1"
//             style={{ fontSize: "11px" }}
//           >
//             <span>⏳</span>
//             <span className="small">{formData.expiry}</span>
//           </div>

//           <div className="mt-1" style={{ fontSize: "10px" }}>
//             <div className="d-flex align-items-center gap-1">
//               <span>8°C</span>
//             </div>
//             <div className="d-flex align-items-center gap-1">
//               <span>2°C</span>
//               <span>🌡️</span>
//             </div>
//           </div>
//         </div>

//         {/* Small QR section */}
//         <div
//           className="position-absolute"
//           style={{
//             right: "8px",
//             bottom: "40px",
//             width: "30px",
//             height: "30px",
//             border: "1px solid #ccc",
//           }}
//         >
//           {smallQrImage ? (
//             <img src={smallQrImage} alt="Small QR" className="w-100 h-100" />
//           ) : (
//             <canvas ref={smallQrCanvasRef} className="w-100 h-100" />
//           )}
//         </div>

//         {/* Bottom info */}
//         <div
//           className="position-absolute d-flex justify-content-between align-items-center"
//           style={{
//             bottom: "10px",
//             left: "101px",
//             right: "8px",
//             fontSize: "9px",
//           }}
//         >
//           <span className="space">0303</span>
//           <span className="border border-secondary rounded-pill px-2">
//             Roche
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StickerPreview;

import React, { useRef, useEffect, useState, forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperatureHalf,
  faHourglassHalf,
} from "@fortawesome/free-solid-svg-icons";
import QRCode from "qrcode";

const StickerPreview = forwardRef(
  ({ formData, longQrImage, smallQrImage }, ref) => {
    const smallQrCanvasRef = useRef(null);
    const [smallQrData, setSmallQrData] = useState("");
    const [generatedSmallQrUrl, setGeneratedSmallQrUrl] = useState(null);

    // Generate small QR code
    useEffect(() => {
      if (!smallQrImage && smallQrCanvasRef.current) {
        const data = `Product: ${formData.title}\nREF: ${formData.ref}\nM: ${formData.m}\nR1: ${formData.r1}\nR2: ${formData.r2}\nLOT: ${formData.lot}\nExpiry: ${formData.expiry}`;

        if (data !== smallQrData) {
          setSmallQrData(data);
          QRCode.toCanvas(
            smallQrCanvasRef.current,
            data,
            { width: 80 },
            (error) => {
              if (error) {
                console.error(error);
                return;
              }
              // Convert canvas to data URL for printing
              setGeneratedSmallQrUrl(smallQrCanvasRef.current.toDataURL());
            }
          );
        }
      }
    }, [formData, smallQrImage, smallQrData]);

    return (
      <div className="sticker-preview-container">
        <div className="sticker position-relative" ref={ref}>
          {/* Barcode section */}
          <div className="barcode-section">
            {longQrImage ? (
              <img
                src={longQrImage}
                alt="Barcode"
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
              />
            ) : (
              <div className="d-flex flex-column align-items-center justify-content-center h-100 text-muted">
                <span className="small">Upload Barcode</span>
              </div>
            )}
          </div>

          {/* Serial number */}
          <div className="serial-number">117654096072056</div>

          {/* Information section */}
          <div className="info-section">
            <div className="info-title mb-1">{formData.title}</div>
            <div className="ref-box mb-1">1410</div>
            <div className="d-flex align-items-center gap-1 mb-2">
              <span className="label">REF</span>
              <span className="info-value">{formData.ref}</span>
            </div>
            <div className="d-flex align-items-center gap-1 mb-2">
              <span className="label">M</span>
              <span className="info-value">{formData.m}</span>
            </div>
            <div className="d-flex align-items-center gap-1 mb-2">
              <span className="label">R1</span>
              <span className="info-value">{formData.r1}</span>
            </div>
            <div className="d-flex align-items-center gap-1 mb-2">
              <span className="label">R2</span>
              <span className="info-value">{formData.r2}</span>
            </div>
            <div className="d-flex align-items-center gap-1 mb-2">
              <span className="info-value">6162</span>
            </div>
            <div className="d-flex align-items-center gap-1 mb-2">
              <span className="label">LOT</span>
              <span className="info-value">{formData.lot}</span>
            </div>
            <div className="d-flex align-items-center gap-1 mt-1">
              <FontAwesomeIcon
                icon={faHourglassHalf}
                style={{ fontSize: "8px", color: "#444" }}
              />
              <span className="small">{formData.expiry}</span>
            </div>
            <div className="temperature-section">
              <div className="d-flex align-items-center gap-1 position-relative">
                <span className="high">8°C</span>
              </div>

              {/* Diagonal line */}
              <div className="line"></div>

              <div className="d-flex align-items-center gap-1">
                <span className="low">2°C</span>
                <span className="icon">
                  <FontAwesomeIcon icon={faTemperatureHalf} />
                </span>
              </div>
            </div>
          </div>

          <div className="ivd-badge small">
            <span className="ivd-label small">IVD</span>
          </div>

          {/* Small QR section */}
          <div className="small-qr-section">
            {smallQrImage ? (
              <img src={smallQrImage} alt="Small QR" className="w-100 h-100" />
            ) : generatedSmallQrUrl ? (
              <img
                src={generatedSmallQrUrl}
                alt="Small QR"
                className="w-100 h-100"
              />
            ) : (
              <canvas ref={smallQrCanvasRef} className="w-100 h-100" />
            )}
          </div>

          {/* Bottom info */}
          <div
            className="position-absolute d-flex justify-content-between align-items-center"
            style={{
              bottom: "0%",
              left: "101px",
              right: "8px",
            }}
          >
            <span className="space">0303</span>

            {/* Refined Roche logo */}
            <svg
              viewBox="0 0 120 60"
              width="30"
              height="30"
              style={{ display: "block" }}
            >
              <polygon
                points="25,0 95,0 120,30 95,60 25,60 0,30"
                stroke="#333"
                fill="none"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
              <text
                x="60"
                y="37"
                fontSize="20"
                fontWeight="700"
                fontFamily="'Segoe UI', Tahoma, sans-serif"
                textAnchor="middle"
                fill="#333"
              >
                Roche
              </text>
            </svg>
          </div>
        </div>
      </div>
    );
  }
);

export default StickerPreview;
