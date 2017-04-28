<template>
  <div class="nav" >
    <Row>
      <i-col span="5">
        <div class="layout-logo">
          <p style="font-family: flamenco; font-size: 25px; color: #fc4431; font-weight: bold "> Visualization for Bitcoin </p>
        </div>
      </i-col>
      <i-col span="18" style="text-align: center">
        <span class="input input-isao">
          <input class="input_field input_field-isao" type="text" id="input" title="Hash"/>
					<label class="input_label input_label-isao" for="input">
						<span class="input_label-content input_label-content-isao">
            </span>
					</label>
				</span>
      </i-col>
    </Row>
  </div>
</template>

<script>
  import ICol from "../../../node_modules/iview/src/components/grid/col";
  import '../../css/component.css';
  import '../../css/demo.css';
  import '../../css/normalize.css';
  import '../../../config/classie.js';
  import Tooltip from "../../../node_modules/iview/src/components/tooltip/tooltip";

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
      Tooltip,
      ICol,
    }
  }
</script>

<style scoped>
  .layout-logo{
    width: 120px;
    height: 50px;
    background:transparent;
    border-radius: 3px;
    float: left;
    position: relative;
    padding: 3px;
    margin-left: 20%;
    margin-top: 10%;
  }
</style>
