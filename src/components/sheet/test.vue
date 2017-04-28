<template>
  <div id="box">
    <iframe src="../../image/money.svg" width="300" height="100">
    </iframe>
    <button id='btn'>开始</button>
  </div>
</template>

<script type="text/javascript" src="../../../node_modules/walkway.js/walkway.min.js">

  import Walkway from 'walkway.js';

  var box = document.getElementById("box");
  var winH = window.innerHeight;
  var boxH = box.offsetHeight;
  var boxTop = (winH - boxH)/2;
  box.style.marginTop = boxTop + 'px';
  var btn=document.getElementById("btn");
  btn.addEventListener('click', function() {
    if(btn.innerHTML="loading..."){
      btn.disabled=true;
      var cat = new Walkway({
        selector: '#cat',
        duration: 20000,
        easing: 'linear'
      }).draw(function() {
        btn.innerHTML="开始";
        btn.disabled=false;
      });
    }else{
      btn.innerHTML="loading..."
    }
  });

  export default {
    name:'test',
    data () {
      return {
      }
    }
  }
</script>

<style>
  #box{
    margin:0 auto;
    width: 600px;
  }
  #btn{
    width: 100%;
    height:50px;
    border:none;
    color:#fff;
    background-color: #3bb9ff;
    font-size: 16px;
    border-radius: 5px;
  }
</style>
