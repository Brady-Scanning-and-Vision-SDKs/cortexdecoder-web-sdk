<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import IntroPage from './components/IntroPage.vue'
  import ContactLinks from './components/ContactLinks.vue'
  import {CDDecoder, CDLicense} from 'codecorp-web_sdk'
  import {onMounted} from 'vue';

  onMounted(async () => {
    await initializeDecoder()
    await activateLicense()
  });

  const initializeDecoder = async ()=>{
    await CDDecoder.init(".")
  }

  const activateLicense = async ()=>{
    console.log(await CDLicense.activateLicense("Enter Licese Key Here"));
  }

</script>

<template>
    <header v-if="!$route.meta.standalone">

      <RouterLink to="/" class="logo-link">
        <img alt="Code Logo" class="logo" src="@/assets/CodeBrady-logo.png" />
      </RouterLink>

      <div class="wrapper">

        <RouterLink to="/" style="all: unset;"><IntroPage msg="Welcome to CortexScan VueApp!" /></RouterLink>

        <nav>
          <RouterLink to="/camera-scan">Camera Scan</RouterLink>
          <RouterLink to="/image-scan">Image Scan</RouterLink>
        </nav>

        <ContactLinks/>
      </div>
    </header>
    <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo-link {
  width: 50%; 
  min-width: 30%;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  width: 50%;
}

nav {
  font-size: 1.5rem;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    /* display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2); */
    line-height: 1.5;
    max-height: 100vh;
    display: flex;
    align-items: center;
    padding: 0 2rem;
  }

  .logo {
    /* margin: 0 2rem 0 0;
    min-width: 100%; */
    display: block;
    margin-right: 2rem; /* Increase this margin to add more space between the logo and wrapper */
    width: 100%;
  }

  .logo-link {
    /* width: 100%; */
    width: 30%;
    min-width: 20%;
  }

  header .wrapper {
    /* display: flex;
    place-items: flex-start;
    flex-wrap: wrap; */
    flex: 1; /* Allows the wrapper to take up the remaining space */
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Aligns content to the left */
    padding-left: 2rem;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1.5rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>