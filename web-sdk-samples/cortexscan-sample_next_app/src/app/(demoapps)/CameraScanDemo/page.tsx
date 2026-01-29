'use client'

import dynamic from "next/dynamic";

// Dynamically import CameraScanDemo with SSR disabled
const CameraScanDemo = dynamic(() => import("./components/CameraScanDemo"), { ssr: false });

export default function CameraScanDemoPage() {
  return <CameraScanDemo />;
}