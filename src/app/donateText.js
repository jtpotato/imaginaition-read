import React from "react";

function DonateText() {
  return (
    <div className="font-sans w-72 flex flex-col space-y-4">
      <a
        href="https://www.buymeacoffee.com/jtpotato"
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        <p className="m-0 p-0 text-xs text-white/50 underline">
          {"Consider donating 😊"}
        </p>
      </a>
      <p className="text-white/50 text-xs">
        {
          "If you can't donate, consider disabling your content-blocker on this site! Analytics are important to us 📈 and we promise we won't sell that data to anyone else. 🙏"
        }
      </p>
    </div>
  );
}

export default DonateText;
