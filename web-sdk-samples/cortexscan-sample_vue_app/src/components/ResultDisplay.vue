<!-- DataDisplay.vue -->
<template>
    <div class="data-display">
      <div class="data-row">
        <span class="data-key">Barcode Data:</span>
        <span class="data-value">{{ result.barcodeData }}</span>
      </div>
      <div class="data-row">
        <span class="data-key">Symbology Name:</span>
        <span class="data-value">{{ result.symbology }}</span>
      </div>
      <div class="data-row">
        <span class="data-key">Time taken to Decode:</span>
        <span class="data-value">{{ result.decodeTime }}</span>
      </div>
      <!-- Add more rows here if there are other properties in CDResult -->
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const props = defineProps({
    result: {
      type: Object,
      required: true
    }
  });
  </script>
  
  <style scoped>
  .data-display {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
    width: 50%;
    max-width: 50%;
    margin: 0 auto;
  }
  
  .data-row {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    border-bottom: 1px solid #e0e0e0;
  }
  
  .data-row:last-child {
    border-bottom: none;
  }
  
  .data-key {
    font-weight: bold;
    color: #333;
  }
  
  .data-value {
    color: #666;
  }

  @media (max-width: 768px) {
  .data-display {
    padding: 0.5rem;            /* Less padding */
    gap: 0.5rem;                /* Reduce spacing between rows */
  }

  .data-row {
    padding: 0.25rem;           /* Smaller padding for rows */
    flex-direction: column;     /* Stack key and value vertically */
    text-align: left;           /* Align text to the left */
  }

  .data-key {
    font-size: 0.9rem;          /* Smaller font for key */
  }

  .data-value {
    font-size: 0.9rem;          /* Smaller font for value */
  }
}
  </style>
  