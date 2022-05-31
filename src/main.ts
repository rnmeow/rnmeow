import { createApp, App as Application } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Icons used
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import {
  faHeart, faEnvelope, faPenClip, faCodeBranch, faLaptop, faWifi
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub, faTelegram, faTwitter, faStackOverflow,
  faHtml5, faJs, faVuejs, faPhp, faYarn, faGolang, faGitAlt, faApple
} from '@fortawesome/free-brands-svg-icons'
library.add(
  faCopyright, faHeart, faEnvelope, faPenClip, faCodeBranch,
  faTwitter, faGithub, faTelegram, faStackOverflow,
  faHtml5, faJs, faVuejs, faPhp, faYarn, faGolang, faGitAlt,
  faApple, faLaptop, faWifi
)

const app: Application = createApp(App);

app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
