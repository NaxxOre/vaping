"use client";

import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { zoomPlugin } from '@react-pdf-viewer/zoom';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '@react-pdf-viewer/zoom/lib/styles/index.css';

interface PdfViewProps {
  file: string;
}

const PdfView: React.FC<PdfViewProps> = ({ file }) => {
  const zoomPluginInstance = zoomPlugin();
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="flex flex-col items-center p-5 w-full h-screen">
      <div className="h-full w-full overflow-y-auto relative">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          <Viewer
            fileUrl={file}
            plugins={[zoomPluginInstance, defaultLayoutPluginInstance]}
          />
        </Worker>
      </div>
    </div>
  );
};

export default PdfView;