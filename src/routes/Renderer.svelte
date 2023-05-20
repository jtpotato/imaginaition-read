<script>
	/**
	 * @type {string}
	 */
	export let text;

	import { marked } from 'marked';
	import { onMount } from 'svelte';
	marked.use({ gfm: true, mangle: false, headerPrefix: '', headerIds: false });

	let cutInputText = '';

	let displayText = '';

	/**
	 * @type {HTMLDivElement}
	 */
	let cursor;

	onMount(() => {
		let frameLoopID = setInterval(() => {
			// Chunk the text
			let completionLength = Math.random() * 10 - 1;

			// If we need to re-render
			if (cutInputText != text) {
				cutInputText = text.substring(0, cutInputText.length + completionLength);

				displayText = marked.parse(cutInputText + '<span id="cursor-target"></span>');

				setTimeout(() => {
					// Update cursor
					let target = document.getElementById('cursor-target');
					cursor.style.top = target?.offsetTop + 'px';
					cursor.style.left = target?.offsetLeft + 'px';
				}, 1);
			}
		}, 50);

		return () => {
			clearInterval(frameLoopID);
		};
	});
</script>

<!--TODO!!!!!!! SANITISE THIS-->
<div>{@html displayText}</div>
<div
	style={'background-color: black; height: 1em; width: 0.5em; position: absolute; transition: 50ms;'}
	bind:this={cursor}
/>

<style>
    div {
        font-family: sans-serif;
    }
</style>