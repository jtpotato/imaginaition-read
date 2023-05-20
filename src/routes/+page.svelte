<script>
	import { onMount } from 'svelte';
	import Renderer from './Renderer.svelte';

	/**
	 * @type {string}
	 */
	let inputText = '';
</script>

<div class="flex flex-row p-4">
	<textarea
		on:input={(event) => {
			inputText = event.currentTarget.value;
		}}
		placeholder="Your notes go here..."
        class="outline-none border-none bg-neutral-800 resize-none rounded-xl w-48 h-24 p-4 text-white"
	/>
	<div class="ml-8 w-full">
		<Renderer text={inputText} />
	</div>
</div>
