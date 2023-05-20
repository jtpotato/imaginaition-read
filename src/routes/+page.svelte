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
    placeholder="Your notes go here..."
/>

<Renderer text={inputText}></Renderer>