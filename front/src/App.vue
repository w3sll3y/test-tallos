<template>
   <div id="app">
        <form class="container">
            <h1>Login</h1>
            <input type="text" placeholder="User">
            <input type="password" placeholder="Password">
            <div class="btn">
            <input class="login" type="submit" value="Login" src="index.html">
            </div>
            <input class="cadastrar" type="submit" value="Cadastrar" src="index.html">
        </form>
    </div>
</template>

<script>

import Contacts from './services/customers'

export default{
  mounted() {
    Contacts.listar().then(res => {
      console.log(res)
    })
  },
}

</script>

<style>
body{
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    background-image: url('assets/background.jpg');
    background-size: cover;
    background-position: center center;
    height: 100vh;
    display: flex;
    justify-content: center;
}
.container{ 
    width: 400px;
    max-width: 500px;
    padding: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform:  translate(-50%, -50%);
    background: #fff;
    text-align: center;
    border-radius: 15px;
}
h1{
    text-transform: uppercase;
    color: #0984e3,;
}
.container input[type = "text"],.container input[type = "password"]{
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 2px solid #3498db;
    padding: 14px 10px;
    width: 245px;
    outline: none;
    color: #444;
    border-radius: 24px;
    transition: 0.25s;
}
.container input[type = "text"]:focus,.container input[type = "password"]:focus{
    width: 280px;
    border-color: #2ecc71;


}
.login{
    position: relative;
    border: 0;
    background: none;
    margin: 20px auto;
    text-align: center;
    border: 2px solid #2ecc71;
    padding: 14px 40px;
    outline: none;
    color: #444;
    border-radius: 24px;
    transition: 0.25s;
    cursor: pointer;
}
.login:hover{
    background: #2ecc71;
    color:#fff;
}
.cadastrar{
    position: relative;
    top:-20px;
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 2px solid #fdcb6e;
    padding: 14px 40px;
    outline: none;
    color: #444;
    border-radius: 24px;
    transition: 0.25s;
    cursor: pointer;
}
.cadastrar:hover{
    background: #fdcb6e;
    color:#fff;
}
.btn{
    display: flex;
    justify-content: space-around;
}
</style>
