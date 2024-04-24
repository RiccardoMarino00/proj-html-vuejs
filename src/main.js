import { createApp } from 'vue'

// import './style.css'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

import {faInstagram} from '@fortawesome/free-brands-svg-icons'

import {faFacebook} from '@fortawesome/free-brands-svg-icons'

import {faTwitter} from '@fortawesome/free-brands-svg-icons'

import {faYoutube} from '@fortawesome/free-brands-svg-icons'

import {faBookOpenReader} from  '@fortawesome/free-solid-svg-icons'

import {faComments} from '@fortawesome/free-regular-svg-icons'

import {faFacebookF} from '@fortawesome/free-brands-svg-icons'

import {faPinterestP} from '@fortawesome/free-brands-svg-icons'

import {faCircleInfo} from  '@fortawesome/free-solid-svg-icons'

import {faHeart} from '@fortawesome/free-regular-svg-icons'

import {faArrowRightFromBracket} from  '@fortawesome/free-solid-svg-icons'







library.add(faMagnifyingGlass, faInstagram, faFacebook, faTwitter, faYoutube, faBookOpenReader, faComments, faFacebookF, faPinterestP, faCircleInfo, faHeart, faArrowRightFromBracket,)

const app = createApp (App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')



