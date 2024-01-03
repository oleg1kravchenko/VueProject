<template>
   <button @click="$emit('click-event')">
    <slot></slot>
   </button>
</template>
  
  <script>
    export default {
      name: 'ButtonMain',
      data() {
        return {
         
        }
      }
  
    }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
button {
	font-size: 15px;
	color: #000;
	font-weight: 700;
	height: 60px;
	padding: 0 50px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	background: #a7e65a;
	border: none;
	transition: all 0.3s;
}
  </style>