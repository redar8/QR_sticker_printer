// import React, { useRef, useEffect, useState, forwardRef } from "react";
// import QRCode from "qrcode";
// import JsBarcode from "jsbarcode";

// const StickerPreview = forwardRef(
//   ({ formData, longQrImage, smallQrImage }, ref) => {
//     const smallQrCanvasRef = useRef(null);
//     const longBarcodeCanvasRef = useRef(null);

//     const [smallQrData, setSmallQrData] = useState("");
//     const [generatedSmallQrUrl, setGeneratedSmallQrUrl] = useState(null);

//     // Generate small QR code
//     useEffect(() => {
//       if (!smallQrImage && smallQrCanvasRef.current) {
//         const data = `Product: ${formData.title}\nREF: ${formData.ref}\nM: ${formData.m}\nR1: ${formData.r1}\nR2: ${formData.r2}\nLOT: ${formData.lot}\nExpiry: ${formData.expiry}`;

//         if (data !== smallQrData) {
//           setSmallQrData(data);
//           QRCode.toCanvas(
//             smallQrCanvasRef.current,
//             data,
//             { width: 80 },
//             (error) => {
//               if (error) {
//                 console.error(error);
//                 return;
//               }
//               setGeneratedSmallQrUrl(smallQrCanvasRef.current.toDataURL());
//             }
//           );
//         }
//       }
//     }, [formData, smallQrImage, smallQrData]);

//     // Generate long barcode
//     useEffect(() => {
//       if (
//         !longQrImage &&
//         longBarcodeCanvasRef.current &&
//         formData.barcodeValue
//       ) {
//         try {
//           JsBarcode(longBarcodeCanvasRef.current, formData.barcodeValue, {
//             format: "CODE128",
//             width: 2,
//             height: 250,
//             displayValue: false,
//             margin: 0,
//           });
//         } catch (err) {
//           console.error("Barcode generation error:", err);
//         }
//       }
//     }, [formData.barcodeValue, longQrImage]);

//     return (
//       <div className="sticker-preview-container">
//         <div className="sticker" ref={ref}>
//           {/* Barcode section */}
//           <div className="barcode-section">
//             {longQrImage ? (
//               <img src={longQrImage} alt="Barcode" />
//             ) : (
//               <canvas ref={longBarcodeCanvasRef} />
//             )}
//           </div>

//           {/* Serial number */}
//           <div className="serial-number">
//             {formData.barcodeValue || "117654096072056"}
//           </div>

//           {/* Information section */}
//           <div className="info-section">
//             <div className="info-title">{formData.title}</div>
//             <div className="ref-box">1410</div>

//             <div className="info-line-ref">
//               <span className="label">REF</span>
//               <span className="info-value">{formData.ref}</span>
//             </div>
//             <div className="info-line-me">
//               <span className="label-me">M</span>
//               <span className="info-value-me">{formData.m}</span>
//             </div>
//             <div className="info-line-me">
//               <span className="label-me">R1</span>
//               <span className="info-value-me r1-value">{formData.r1}</span>
//             </div>
//             <div className="info-line-me">
//               <span className="label-me r2-bottom-border">R2</span>
//               <span className="info-value-me r2-value">{formData.r2}</span>
//             </div>
//             <div className="info-line">
//               <span className="info-value only-num">6162</span>
//             </div>
//             <div className="info-line">
//               <span className="label">LOT</span>
//               <span className="info-value">{formData.lot}</span>
//             </div>

//             <div className="info-line date-label">
//               <img
//                 src="/hourglass-icon.svg"
//                 alt="Hourglass"
//                 className="icon-small"
//               />
//               <span className="info-value expire">{formData.expiry}</span>
//             </div>
//             <img src="/termometre.svg" alt="Hourglass" className="my-icon" />
//           </div>
//           <div className="ivd-badge small">
//             <span className="ivd-label small">IVD</span>
//           </div>
//           {/* Small QR section */}
//           <div className="small-qr-section">
//             {smallQrImage ? (
//               <img src={smallQrImage} alt="Small QR" />
//             ) : generatedSmallQrUrl ? (
//               <img src={generatedSmallQrUrl} alt="Small QR" />
//             ) : (
//               <canvas ref={smallQrCanvasRef} />
//             )}
//           </div>

//           {/* Bottom info */}
//           <div className="bottom-info">
//             <span className="space fw-bold">0303</span>
//             <svg viewBox="0 0 120 60" width="28" height="28">
//               <polygon
//                 points="25,0 95,0 120,30 95,60 25,60 0,30"
//                 stroke="#333"
//                 fill="none"
//                 strokeWidth="1"
//                 vectorEffect="non-scaling-stroke"
//               />
//               <text
//                 x="60"
//                 y="37"
//                 fontSize="24"
//                 fontWeight="700"
//                 fontFamily="Helvetica Neue"
//                 textAnchor="middle"
//                 fill="#333"
//               >
//                 Roche
//               </text>
//             </svg>
//           </div>
//         </div>
//       </div>
//     );
//   }
// );

// export default StickerPreview;

import React, { useRef, useEffect, useState, forwardRef } from "react";
import QRCode from "qrcode";
import JsBarcode from "jsbarcode";

const StickerPreview = forwardRef(
  ({ formData, longQrImage, smallQrImage }, ref) => {
    const smallQrCanvasRef = useRef(null);
    const longBarcodeCanvasRef = useRef(null);

    const [smallQrData, setSmallQrData] = useState("");
    const [generatedSmallQrUrl, setGeneratedSmallQrUrl] = useState(null);

    // Generate small QR code
    useEffect(() => {
      if (!smallQrImage && smallQrCanvasRef.current) {
        // Added serial to QR data
        const data = `Product: ${formData.title}\nREF: ${formData.ref}\nM: ${formData.m}\nR1: ${formData.r1}\nR2: ${formData.r2}\nLOT: ${formData.lot}\nSerial: ${formData.serial}\nExpiry: ${formData.expiry}`;

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
              setGeneratedSmallQrUrl(smallQrCanvasRef.current.toDataURL());
            }
          );
        }
      }
    }, [formData, smallQrImage, smallQrData]);

    // Generate long barcode
    useEffect(() => {
      if (
        !longQrImage &&
        longBarcodeCanvasRef.current &&
        formData.barcodeValue
      ) {
        try {
          JsBarcode(longBarcodeCanvasRef.current, formData.barcodeValue, {
            format: "CODE128",
            width: 2,
            height: 250,
            displayValue: false,
            margin: 0,
          });
        } catch (err) {
          console.error("Barcode generation error:", err);
        }
      }
    }, [formData.barcodeValue, longQrImage]);

    return (
      <div className="sticker-preview-container">
        <div className="sticker" ref={ref}>
          {/* Barcode section */}
          <div className="barcode-section">
            {longQrImage ? (
              <img src={longQrImage} alt="Barcode" />
            ) : (
              <canvas ref={longBarcodeCanvasRef} />
            )}
          </div>

          {/* Serial number - Updated to use formData.serial */}
          <div className="serial-number">
            {formData.serial || "Serial Number"}
          </div>

          {/* Information section */}
          <div className="info-section">
            <div className="info-title">{formData.title}</div>
            <div className="ref-box">1410</div>

            <div className="info-line-ref">
              <span className="label">REF</span>
              <span className="info-value">{formData.ref}</span>
            </div>
            <div className="info-line-me">
              <span className="label-me">M</span>
              <span className="info-value-me">{formData.m}</span>
            </div>
            <div className="info-line-me">
              <span className="label-me">R1</span>
              <span className="info-value-me r1-value">{formData.r1}</span>
            </div>
            <div className="info-line-me">
              <span className="label-me r2-bottom-border">R2</span>
              <span className="info-value-me r2-value">{formData.r2}</span>
            </div>
            <div className="info-line">
              <span className="info-value only-num">6162</span>
            </div>
            <div className="info-line">
              <span className="label">LOT</span>
              <span className="info-value">{formData.lot}</span>
            </div>

            <div className="info-line date-label">
              <img
                src="/hourglass-icon.svg"
                alt="Hourglass"
                className="icon-small"
              />
              <span className="info-value expire">{formData.expiry}</span>
            </div>
            <img src="/termometre.svg" alt="Hourglass" className="my-icon" />
          </div>
          <div className="ivd-badge small">
            <span className="ivd-label small">IVD</span>
          </div>
          {/* Small QR section */}
          <div className="small-qr-section">
            {smallQrImage ? (
              <img src={smallQrImage} alt="Small QR" />
            ) : generatedSmallQrUrl ? (
              <img src={generatedSmallQrUrl} alt="Small QR" />
            ) : (
              <canvas ref={smallQrCanvasRef} />
            )}
          </div>

          {/* Bottom info */}
          <div className="bottom-info">
            <span className="space fw-bold">0303</span>
            <svg viewBox="0 0 120 60" width="28" height="28">
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
                fontSize="24"
                fontWeight="700"
                fontFamily="Helvetica Neue"
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
