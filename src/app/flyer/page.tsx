'use client';

import { QRCodeSVG } from 'qrcode.react';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Flyer() {
  useEffect(() => {
    // Add print styles
    const style = document.createElement('style');
    style.textContent = `
      @media print {
        body { margin: 0; padding: 0; }
        nav, .no-print { display: none !important; }
        @page { margin: 0; }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-scouts-bsa-olive to-scouts-bsa-olive-dark p-8">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Banner Image */}
        <div className="w-full">
          <Image
            src="/banner.png"
            alt="Real Adventures"
            width={1200}
            height={400}
            className="w-full object-cover"
            priority
          />
        </div>

        {/* Main Content */}
        <div className="p-12 space-y-8">
          {/* Start Here and QR Code */}
          <div className="flex flex-col items-center space-y-8 relative">
            <p className="text-4xl font-bold text-scouts-bsa-olive mr-56 text-right w-full">
              Everyone ages 5–17:<br></br> Start your adventure here!
            </p>

            {/* Down Arrow - floating to the right */}
            <div className="absolute top-4 right-0 w-32 h-32 scale-x-[-1.5]">
              <Image
                src="/images/curve-arrow.png"
                alt="Down arrow"
                width={128}
                height={256}
                className="w-full h-full object-contain"
              />
            </div>

            {/* QR Code */}
            <div className="bg-white p-6 rounded-2xl border-4 border-scouts-bsa-olive shadow-lg">
              <QRCodeSVG
                value="https://greatvalleydistrict.org"
                size={220}
                level="H"
                includeMargin={false}
                fgColor="#243E2C"
              />
            </div>

            <p className="text-xl font-semibold text-gray-800">
              greatvalleydistrict.org
            </p>
          </div>
        </div>

        {/* Print Button */}
        <div className="no-print px-12 pb-8">
          <button
            onClick={() => window.print()}
            className="w-full bg-scouts-bsa-olive text-white px-8 py-4 rounded-xl hover:bg-scouts-bsa-olive-dark transition-colors font-bold text-lg shadow-lg"
          >
            Print Flyer
          </button>
        </div>
      </div>
    </div>
  );
}
