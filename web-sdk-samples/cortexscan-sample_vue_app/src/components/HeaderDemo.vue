<!-- Header.vue -->
<template>
  <header class="header">
    <RouterLink to="/">
      <img src="@/assets/CodeBrady-logo.png" alt="Code Logo" class="logo" />
    </RouterLink>
    <div class="header-text">
      <h1>{{ props.headerText }}</h1>
    </div>
    <a class="contact_link" target="_blank" href="https://codecorp.com/contact" rel="noopener">Contact Us</a>
  </header>
</template>

<script setup lang="ts">
  import { RouterLink } from 'vue-router'
  import { defineProps } from 'vue';

  const props = defineProps<{ headerText: string }>();


  // Import any necessary assets or utilities for the header component
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 80px;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  padding: 0 2rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000; /* Ensures the header stays on top */
}

.logo {
  height: 50px;
  margin-right: 1rem;
}

.header-text {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.header-text h1 {
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
}

.contact_link {
  text-decoration: none;
  color: #0073e6;
  font-weight: bold;
  transition: color 0.3s;
}

.contact-link:hover {
  color: #005bb5;
}

/* Responsive styling for mobile screens */
@media (max-width: 768px) {
  .header {
    flex-direction: column; /* Stack logo and text vertically */
    height: auto;
    padding: 1rem;
    text-align: center;
  }

  .logo {
    height: 40px; /* Smaller logo for mobile */
    margin: 0 0 0.5rem 0;
  }

  .header-text h1 {
    font-size: 1.2rem; /* Smaller font size for mobile */
  }

  /* .contact_link {
    font-size: 1.2rem;
    font-weight: bold;
  } */
}
</style>
