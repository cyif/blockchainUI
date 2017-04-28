<template>
  <div class="outer">
    <div class="inner">
      <span class="input input-madoka">
        <input class="input_field input_field-madoka" type="text" id="input-31" />
        <label class="input_label input_label-madoka" for="input-31">
          <svg class="graphic graphic-madoka" width="100%" height="100%" viewBox="0 0 404 77" preserveAspectRatio="none">
            <path d="m0,0l404,0l0,77l-404,0l0,-77z"/>
          </svg>
          <span class="input_label-content input_label-content-madoka">Hash</span>
        </label>
      </span>
    </div>
  </div>
</template>

<script>
  import ICol from "../../../node_modules/iview/src/components/grid/col";
  import '../../css/component.css';
  import '../../css/demo.css';
  import '../../css/normalize.css';
  import '../../../config/classie.js';

  (function() {
    // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
    if (!String.prototype.trim) {
      (function() {
        // Make sure we trim BOM and NBSP
        var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        String.prototype.trim = function() {
          return this.replace(rtrim, '');
        };
      })();
    }

    [].slice.call( document.querySelectorAll( 'input.input_field' ) ).forEach( function( inputEl ) {
      // in case the input is already filled..
      if( inputEl.value.trim() !== '' ) {
        classie.add( inputEl.parentNode, 'input-filled' );
      }

      // events:
      inputEl.addEventListener( 'focus', onInputFocus );
      inputEl.addEventListener( 'blur', onInputBlur );
    } );

    function onInputFocus( ev ) {
      classie.add( ev.target.parentNode, 'input-filled' );
    }

    function onInputBlur( ev ) {
      if( ev.target.value.trim() === '' ) {
        classie.remove( ev.target.parentNode, 'input-filled' );
      }
    }
  })();

  export default {
    name: 'nav',
    data () {
      return {
      }
    },
    components: {
      ICol,
    }
  }
</script>

<style scoped>
  .outer{
    width: 100%;
    padding-left: 20%;
    padding-right: 20%;
    padding-top: 4px;
  }
  .inner{
    margin: 0 auto;
  }
  .search{

  }
</style>
