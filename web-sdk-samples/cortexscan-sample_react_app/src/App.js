import './App.css';
import React from 'react';
import MainLayout from './main/MainLayout';
import Home from './main/Home';
import CameraScanIntro from './main/CameraScanIntro';
import ImageScanIntro from './main/ImageScanIntro';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CameraScanDemo from './demoApps/CameraScanDemo';
import ImageScanDemo from './demoApps/ImageScanDemo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={
              <MainLayout>
                <Routes>
                  <Route index element={<Home />} />
                  <Route path="CameraScanIntro" element={<CameraScanIntro />} />
                  <Route path="ImageScanIntro" element={<ImageScanIntro />} />
                </Routes>
              </MainLayout>
            }>
          </Route>
          <Route path="/CameraScanDemo" element={<CameraScanDemo />} />
          <Route path="/ImageScanDemo" element={<ImageScanDemo />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
