<template>
  <v-app>
    <v-container class="container">
      <v-row justify="center" align="center" class="fill-height">
        <v-col cols="12" md="8" lg="6">
          <v-card class="login-card">
            <v-row no-gutters>
              <v-col cols="12" md="5" class="left-column">
                <v-img src="@/assets/icon/login/log.png" class="avatar"></v-img>
                <h2>Inicio de Sesion</h2>
                <div class="line">──────</div>
                <a href="#">Política de privacidad</a>
              </v-col>
              <v-col cols="12" md="7" class="right-column">
                <v-form @submit.prevent="login">
                  <v-text-field
                    v-model="username"
                    label="Usuario"
                    outlined
                    hide-details
                    dense
                    class="text-field"
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    label="Contraseña"
                    type="password"
                    outlined
                    hide-details
                    dense
                    class="text-field"
                  ></v-text-field>
                  <v-checkbox
                    v-model="rememberMe"
                    label="Recuérdame"
                    class="check-box"
                  ></v-checkbox>
                  <v-btn class="login-btn" type="submit">Iniciar</v-btn>
                </v-form>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-footer class="footer">
      <v-col class="text-center">
        <v-btn icon href="https://www.linkedin.com" target="_blank">
          <v-icon>mdi-linkedin</v-icon>
        </v-btn>
        <v-btn icon href="https://www.instagram.com" target="_blank">
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
        <v-btn icon href="https://www.twitter.com" target="_blank">
          <v-icon>mdi-twitter</v-icon>
        </v-btn>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      rememberMe: false,
    };
  },
  methods: {
    login() {
      console.log('Username:', this.username);
      console.log('Password:', this.password);
      console.log('Remember Me:', this.rememberMe);
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  border: none;
}

body {
  background: #e0e0e0;
  background: -webkit-linear-gradient(to right, #ffffff, #e0e0e0);
  background: linear-gradient(to right, #ffffff, #e0e0e0);
  font-family: 'Noto Sans', sans-serif;
}

.container {
  height: calc(100vh - 56px); /* Ajustar para dejar espacio al footer */
}

.login-card {
  border-radius: 15px;
  overflow: hidden;
  background-color: #f5f5f5;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.left-column {
  background: #3d8de7;
  background: -webkit-linear-gradient(to right, #5eb3ff, #3d8de7);
  background: linear-gradient(to right, #5eb3ff, #3d8de7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
  color: white;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.left-column h2 {
  font-family: 'Noto Sans', sans-serif;
}

.line {
  color: #ffffff;
  margin: 10px 0;
}

.left-column a {
  color: #dcefff;
  transition-duration: 240ms;
  font-size: 14px;
  font-family: 'Noto Sans', sans-serif;
}

.left-column a:hover {
  color: #ffffff;
  transition-duration: 240ms;
}

.right-column {
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.text-field {
  margin-bottom: 20px;
}

.check-box {
  margin-bottom: 20px;
  color: #3d8de7;
}

.login-btn {
  height: 40px;
  width: 100px;
  cursor: pointer;
  border-radius: 20px;
  box-shadow: 3px 2px 3px rgba(0, 0, 0, 0.5);
  background: #3d8de7;
  font-family: 'Noto Sans', sans-serif;
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  align-self: flex-end;
  margin: 15px;
}

.login-btn:hover {
  box-shadow: none;
  background: #2c6bb2;
}

.footer {
  background-color: #f5f5f5;
  padding: 10px 0;
  text-align: center;
  border-top: 1px solid #e0e0e0;
}

.footer v-btn {
  margin: 0 5px;
}

.footer v-icon {
  color: #3d8de7;
}
</style>
