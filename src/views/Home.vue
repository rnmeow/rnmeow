<template>
  <img id="avatar"
    src="@/assets/profile.webp"
    srcset="@/assets/profile.webp 1x, @/assets/profile.webp 2x"
    alt="Vue logo"
    type="image/png"
  /><!-- Avatar w/ 2x size image set for Retina devices-->
  <h1>Hi, KuoHuanHuan here!</h1>
  <!-- Social Buttons-->
  <section>
    <SocialButton
      link="mailto:hi@nekohuan.cyou"
      :icon="['fas', 'envelope']"
    />
    <SocialButton
      link="https://github.com/kuohuanhuan"
      :icon="['fab', 'github']"
    />
    <SocialButton
      link="https://t.me/kuohuanhuan"
      :icon="['fab', 'telegram']"
    />
    <SocialButton
      link="https://twitter.com/kuohuanhuan"
      :icon="['fab', 'twitter']"
    />
    <SocialButton
      link="https://stackoverflow.com/users/19172539"
      :icon="['fab', 'stack-overflow']"
    />
    <SocialButton id="blogLink"
      link="https://blog.nekohuan.cyou"
      :icon="['fas', 'pen-clip']"
    />
  </section>
  <hr/>
  <!-- TODO: Intro-->
  <h2>About me</h2>
  <p>
    I'm KuoHuanHuan, a Junior High student lives in 🇹🇼Taiwan.
    <br/>
    Also known as "KHH".
    <br/>
    Currently a Web front-end coder who loves to build some crazy things.
    <br/>
    Also a <a href="https://blog.nekohuan.cyou">blogger</a>, shares some <del>useless</del> infos.
    <br/>
    Still discovering my own interests and learning a lot of skills.
    <br/>
    Keep envolving, learning and growing.
  </p>
  <h2>Skills</h2>
  <p>
    <ul>
      <li>
        <font-awesome-icon :icon="['fab', 'html5']" size="lg"/>&nbsp;HTML5 & CSS3
      </li>
      <li>
        <font-awesome-icon :icon="['fab', 'js']" size="lg"/>&nbsp;JavaScript & TypeScript
      </li>
      <li>
        <font-awesome-icon :icon="['fab', 'php']" size="lg"/>&nbsp;PHP
      </li>
      <li>
        <font-awesome-icon :icon="['fab', 'yarn']" size="lg"/>&nbsp;Yarn (Node.js package manager)
      </li>
      <li>
        <font-awesome-icon :icon="['fab', 'golang']" size="lg"/>&nbsp;Golang
      </li>
      <li>
        <font-awesome-icon :icon="['fab', 'git-alt']" size="lg"/>&nbsp;Git
      </li>
      <li>
        <font-awesome-icon :icon="['fas', 'code-branch']" size="lg"/>&nbsp;GitHub Actions CI/CD
      </li>
    </ul>
  </p>
  <h2>Devices</h2>
  <p>
    <ul>
      <li>
        <font-awesome-icon :icon="['fab', 'apple']" size="lg"/>&nbsp;Apple iPhone 8
      </li>
      <li>
        <font-awesome-icon :icon="['fas', 'laptop']" size="lg"/>&nbsp;Acer TravelMate P455 w/
        <img src="@/assets/arch.svg" alt="Arch Linux Logo"/>Arch Linux
      </li>
      <li>
        <font-awesome-icon :icon="['fas', 'wifi']" size="lg"/>&nbsp;Redmi AC2100 Router
      </li>
    </ul>
  </p>
  <h2>Verify ME</h2>
  <p>
    You are visitin' this page, that means you trust me.
    <br/>
    But if you don't? I can provide my GnuPG public key for you to verify me.
    <br/>
    Use command
    <code>curl https://cdn.jsdelivr.net/gh/kuohuanhuan/cdn@master/publicGPG.asc | gpg --import</code>
    to import it.
  </p>
</template>

<script lang="ts">
import SocialButton from '@/components/SocialButton.vue'
export default {
  components: { SocialButton }
}
</script>

<style lang="scss" scoped>
@import url('@/styles/home.scss');
</style>
