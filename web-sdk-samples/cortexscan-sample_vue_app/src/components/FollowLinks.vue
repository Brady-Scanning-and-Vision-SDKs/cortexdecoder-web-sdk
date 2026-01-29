<script setup lang="ts">
import FacebookIcon from './icons/IconFacebook.vue'
import LinkedInIcon from './icons/IconLinkedIn.vue'
import YouTubeIcon from './icons/IconYouTube.vue'

</script>

<template>
  <div class="greetings">
    <h3>
        <a target="_blank" href="https://www.facebook.com/code411" rel="noopener">
        <FacebookIcon />
      </a>
      <a target="_blank" href="https://www.linkedin.com/company/code-corporation" rel="noopener">
        <LinkedInIcon />
      </a>
      <a target="_blank" href="https://www.youtube.com/channel/UCpCKNpE3JGQLi-Dec0B6fkw" rel="noopener">
        <YouTubeIcon />
      </a>
    </h3>
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
  text-align: center;
}

/* Style the icons to be inline and add spacing */
.greetings h3 a {
  display: inline-block;
  margin: 0 10px;
  color: inherit; /* Ensures the icons inherit the text color */
  text-decoration: none; /* Removes underline on the links */
}

.greetings h3 a:hover {
  color: #0077b5; /* Example hover color for LinkedIn */
}

/* Center text on mobile, align left on larger screens */
@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
