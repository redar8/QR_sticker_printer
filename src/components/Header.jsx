import React from "react";

const Header = () => {
  return (
    <header className="text-center mb-4 p-4 bg-white rounded shadow-sm">
      <h1 className="d-flex align-items-center justify-content-center gap-3">
        <span
          className="d-flex align-items-center justify-content-center rounded-circle bg-primary text-white"
          style={{ width: "50px", height: "50px" }}
        >
          <i className="fas fa-qrcode fa-lg"></i>
        </span>
        Professional QR Sticker Printer
      </h1>
      <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
        Create and print professional QR stickers with customizable content and
        barcode integration
      </p>
    </header>
  );
};

export default Header;
