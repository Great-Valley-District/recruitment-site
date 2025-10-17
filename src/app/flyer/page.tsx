'use client';

import { QRCodeSVG } from 'qrcode.react';
import { useEffect } from 'react';

export default function Flyer() {
  useEffect(() => {
    // Add print styles
    const style = document.createElement('style');
    style.textContent = `
      @media print {
        body { margin: 0; padding: 0; }
        nav, .no-print { display: none !important; }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-white p-8">
      <div className="max-w-md w-full space-y-6 text-center">
        {/* Header with Scouting Logo Placeholder */}
        <div className="mb-4">
          <div className="text-4xl font-bold text-gray-800 mb-2">
            Join Scouting!
          </div>
          <div className="text-xl text-emerald-700 font-semibold">
            Great Valley District
          </div>
        </div>

        {/* Main Call to Action */}
        <div className="space-y-4">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Adventure awaits!</strong> Build character, develop leadership skills, and make lifelong friends through outdoor adventures in Virginia&apos;s Blue Ridge Mountains.
          </p>

          <div className="bg-emerald-50 border-2 border-emerald-200 rounded-lg p-4">
            <p className="text-emerald-900 font-bold text-lg mb-2">
              Ages 5-17
            </p>
            <p className="text-emerald-800 text-sm">
              Cub Scouts • Scouts BSA
            </p>
          </div>
        </div>

        {/* QR Code */}
        <div className="flex flex-col items-center space-y-3 py-4">
          <div className="bg-white p-4 rounded-lg border-4 border-gray-800">
            <QRCodeSVG
              value="https://greatvalleydistrict.org"
              size={180}
              level="H"
              includeMargin={false}
            />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-semibold text-gray-800">
              Scan to Learn More & Join
            </p>
            <p className="text-xs text-gray-600">
              greatvalleydistrict.org
            </p>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="border-t-2 border-gray-200 pt-4 space-y-2">
          <div className="grid grid-cols-3 gap-2 text-xs text-gray-700">
            <div className="flex flex-col items-center">
              <div className="font-bold text-emerald-700 mb-1">⛺</div>
              <div>Camping &amp; Hiking</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-bold text-emerald-700 mb-1">🏆</div>
              <div>Leadership Skills</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-bold text-emerald-700 mb-1">🤝</div>
              <div>Community Service</div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-xs text-gray-600 border-t border-gray-200 pt-3">
          <p>Questions? Email us at</p>
          <p className="font-semibold text-emerald-700">info@greatvalleydistrict.org</p>
        </div>

        {/* Print Button (hidden when printing) */}
        <div className="no-print pt-4">
          <button
            onClick={() => window.print()}
            className="bg-emerald-700 text-white px-6 py-3 rounded-lg hover:bg-emerald-800 transition-colors font-semibold"
          >
            Print Flyer
          </button>
        </div>
      </div>
    </div>
  );
}
