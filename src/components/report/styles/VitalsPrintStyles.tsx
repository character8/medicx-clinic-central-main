
import React from 'react';

const VitalsPrintStyles = () => {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
      @media print {
        /* Medical Vitals section - fixed height and proper spacing */
        .medical-vitals-section {
          width: 190mm;
          height: 28mm;
          border: 0.5mm solid #000;
          padding: 2mm;
          margin-bottom: 1mm;
          page-break-inside: avoid;
        }

        .medical-vitals-section h3 {
          font-size: 11pt;
          font-weight: bold;
          margin: 0 0 2mm 0;
          color: #000;
          height: 3mm;
          line-height: 3mm;
        }

        .vitals-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: 1mm 3mm; /* Reduced gap between vital-items */
          height: 18mm;
          align-items: center;
        }

        .vital-item {
          display: flex;
          align-items: center;
          height: 3mm;
          font-size: 10pt;
          overflow: hidden;
          margin: 0;
          padding: 0;
        }

        .vital-label {
          font-weight: bold;
          margin-right: 1.5mm;
          white-space: nowrap;
        }

        .vital-value {
          color: #000;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* Clinical Complaint section - reduced height */
        .clinical-complaint-section {
          width: 190mm;
          min-height: 16mm;
          border: 0.5mm solid #000;
          padding: 2mm;
          margin-bottom: 1mm;
          page-break-inside: avoid;
        }

        .clinical-complaint-section h3 {
          font-size: 11pt;
          font-weight: bold;
          margin: 0 0 1.5mm 0;
          color: #000;
          height: 3mm;
          line-height: 3mm;
        }

        .clinical-complaint-text {
          font-size: 10pt;
          color: #000;
          line-height: 1.3;
          width: 100%;
          background: none;
          border: none;
          resize: none;
          min-height: 10mm;
        }
      }
      `
    }} />
  );
};

export default VitalsPrintStyles;
