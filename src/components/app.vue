<template>
<f7-app :params="f7params" class="color-theme-teal text-color-teal">

  <!-- Left panel with cover effect-->
  <f7-panel left cover>
    <f7-view>
      <f7-page class="bg-color-teal text-color-yellow">
        <div class="wrapper">
          <img src="https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg">
          <p class="p">Human Brain</p>
        </div>
        <f7-block style="margin-top: 10px; border-top: 1px solid grey;">Left panel content goes here</f7-block>
      </f7-page>
    </f7-view>
  </f7-panel>

  <f7-views tabs class="safe-areas">
    <f7-toolbar tabbar labels bottom>
      <f7-link tab-link="#view-home" tab-link-active icon-ios="f7:house_fill" icon-aurora="f7:house_fill" icon-md="material:home" text="Dashboard"></f7-link>
      <f7-link tab-link="#view-catalog" icon-ios="f7:square_list_fill" icon-aurora="f7:square_list_fill" icon-md="material:view_list" text="Catalog"></f7-link>
      <f7-link tab-link="#view-settings" icon-ios="f7:gear" icon-aurora="f7:gear" icon-md="material:settings" text="Settings"></f7-link>
      <f7-link tab-link="#view-quiz" icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" text="Quiz"></f7-link>
    </f7-toolbar>

    <f7-view id="view-home" main tab tab-active url="/"></f7-view>
    <f7-view id="view-catalog" name="catalog" tab url="/catalog/"></f7-view>
    <f7-view id="view-settings" name="settings" tab url="/settings/"></f7-view>
    <f7-view id="view-quiz" name="quiz" tab url="/quiz/"></f7-view>
  </f7-views>


  <!-- Popup -->
  <f7-popup id="my-popup">
    <f7-view>
      <f7-page>
        <f7-navbar title="Popup">
          <f7-nav-right>
            <f7-link popup-close>Close</f7-link>
          </f7-nav-right>
        </f7-navbar>
        <f7-block>
          <p>Popup content goes here.</p>
        </f7-block>
      </f7-page>
    </f7-view>
  </f7-popup>

  <f7-login-screen id="my-login-screen">
    <f7-view>
      <f7-page login-screen>
        <f7-login-screen-title>Login</f7-login-screen-title>
        <f7-list form>
          <f7-list-input type="text" name="username" placeholder="Your username" :value="username" @input="username = $event.target.value"></f7-list-input>
          <f7-list-input type="password" name="password" placeholder="Your password" :value="password" @input="password = $event.target.value"></f7-list-input>
        </f7-list>
        <f7-list>
          <f7-list-button title="Sign In" @click="alertLoginData"></f7-list-button>
          <f7-block-footer>
            Some text about login information.<br>Click "Sign In" to close Login Screen
          </f7-block-footer>
        </f7-list>
      </f7-page>
    </f7-view>
  </f7-login-screen>

</f7-app>
</template>
<script>
  import { Device }  from 'framework7/framework7-lite.esm.bundle.js';
  import cordovaApp from '../js/cordova-app.js';
  import routes from '../js/routes.js';

  export default {
    data() {
      return {
        // Framework7 Parameters
        f7params: {
          id: 'io.framework7.mymarks', // App bundle ID
          name: 'My Marks', // App name
          theme: 'auto', // Automatic theme detection
          // App root data
          data: function () {
            return {

              // Demo products for Catalog section
              products: [
                {
                  id: '1',
                  title: 'Apple iPhone 8',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
                },
                {
                  id: '2',
                  title: 'Apple iPhone 8 Plus',
                  description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
                },
                {
                  id: '3',
                  title: 'Apple iPhone X',
                  description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
                },
              ]
            };
          },

          // App routes
          routes: routes,

          // Register service worker
          serviceWorker: Device.cordova ? {} : {
            path: '/service-worker.js',
          },
          // Input settings
          input: {
            scrollIntoViewOnFocus: Device.cordova && !Device.electron,
            scrollIntoViewCentered: Device.cordova && !Device.electron,
          },
          // Cordova Statusbar settings
          statusbar: {
            iosOverlaysWebView: true,
            androidOverlaysWebView: false,
          },
        },

        // Login screen data
        username: '',
        password: '',
      }
    },
    methods: {
      alertLoginData() {
        this.$f7.dialog.alert('Username: ' + this.username + '<br>Password: ' + this.password, () => {
          this.$f7.loginScreen.close();
        });
      }
    },
    mounted() {
      this.$f7ready((f7) => {
        // Init cordova APIs (see cordova-app.js)
        if (Device.cordova) {
          cordovaApp.init(f7);
        }
        // Call F7 APIs here
      });
    }
  }
</script>

<style>
.p {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  margin: 0%;
}
.wrapper {
  padding: 0%;
  padding-top: 5%;
  padding-bottom: 0px;
  text-align: center;
  justify-content: center;
  align-items: center;
  object-position: center;
}
.wrapper img {
  height: 100px;
  width: 100px;
  border-radius: 50%;
}
</style>