<template>
    <div class="container">
      <h1 class="red">Camera Scan</h1>
      <p>Camera Scan app gets access to the camera resource of the device and scans each frame to find a code. This app also offers functionality to set the resolution, focus and zoom for the video input.</p>
      <button @click="startCameraScanDemo">Start Camera Scan Demo</button>
    </div>
  </template>

<script setup lang="ts">
  import { useRouter } from 'vue-router';

  // Initialize the router
  const router = useRouter();

  const startCameraScanDemo = () => {
    router.push('/camera-scan-demo');
  };
</script>
  
  <style scoped>
  /* Center all content in the container */
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
  }
  
  /* Style for the header */
  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  /* Style for the paragraph */
  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    max-width: 600px; /* Optional: limits the width of text for better readability */
  }
  
  /* Style for the button */
  button {
    padding: 0.8rem 2rem;
    font-size: 1rem;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background-color:#AE2025;;
    color: white;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #91191B;
  }
  </style>
  