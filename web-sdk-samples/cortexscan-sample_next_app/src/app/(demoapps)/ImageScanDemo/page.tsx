'use client'

import dynamic from "next/dynamic";

// Dynamically import CameraScanDemo with SSR disabled
const ImageScanDemo = dynamic(() => import("./components/ImageScanDemo"), { ssr: false });

export default function ImageScanDemoPage() {
  return <ImageScanDemo />;
}