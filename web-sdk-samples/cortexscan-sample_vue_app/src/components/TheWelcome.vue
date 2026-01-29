<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentation</template>

    View our 
    <a href="https://nexgen-docs.netlify.app/" target="_blank" rel="noopener">official documentation.</a>
    It provides you with all information you need to get started.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>About</template>
    Web SDK uses WebRTC to access the device camera. Hence it requires HTTPS (secure connection) or localhost.
    Our SDK is delivered as an NPM package and can be installed on both client-side and server-side JavaScript.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Browser support</template>
    The SDK has support on all popular browsers on both Android and IOS. Please see our browser support documentation here.

    <br />

    <a href="https://nexgen-docs.netlify.app/qsg/Web/web%20v.2#requirements" target="_blank" rel="noopener"
      >Browser Support</a
    >
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Release Notes</template>

    Get our updated release notes here:
    <a href="https://nexgen-docs.netlify.app/release/web" target="_blank" rel="noopener"> Web SDK Release Notes</a>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Quick Start this app</template>

    <ul>
      <li>
        <h3>Project Setup</h3>
        <code>
          npm install
        </code>
      </li>
      <li>
        <h3>Compile and Hot-Reload for Development</h3>
        <code>
          npm run dev
        </code>
      </li>
      <li>
        <h3>Type-Check, Compile and Minify for Production</h3>
        <code>
          npm run build
        </code>
      </li>
    </ul>
  </WelcomeItem>

</template>
