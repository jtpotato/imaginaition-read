<script>
	import { onMount } from 'svelte';
	import Renderer from './Renderer.svelte';

	/**
	 * @type {string}
	 */
	let inputText = '';
</script>

<textarea
	on:input={(event) => {
		inputText = event.currentTarget.value;
	}}
/>

<Renderer text={inputText}></Renderer>