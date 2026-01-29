<script setup lang="ts">
import FollowLinks from './FollowLinks.vue'

// import FacebookIcon from './icons/IconFacebook.vue'
// import LinkedInIcon from './icons/IconLinkedIn.vue'
// import YouTubeIcon from './icons/IconYouTube.vue'

</script>

<template>
  <div class="greetings">
    <h3>
      What's next? 
      <a target="_blank" href="https://codecorp.com/contact" rel="noopener">Contact Us</a>
    </h3>
    <h2>
      Also, 
    </h2>
    <h3>
      Follow Us! 
    </h3>
    <FollowLinks/>
    
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

h2 {
  margin-top: 20px;
}

.greetings h1,
.greetings h3, h2 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3, 
  .greetings h2 {
    text-align: left;
  }
}
</style>
