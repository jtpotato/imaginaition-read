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
		cursor.style.height = 16 + 'px';
		cursor.style.width = 16/2 + 'px';

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
					let height = target?.offsetHeight ? target?.offsetHeight : 16;
					cursor.style.height = height + 'px';
					cursor.style.width = height/2 + 'px';
				}, 1);
			}
		}, 50);

		return () => {
			clearInterval(frameLoopID);
		};
	});
</script>

<div class="bg-neutral-800 p-4 rounded-lg">
	<!--TODO!!!!!!! SANITISE THIS-->
	<div class="text-white font-sans">{@html displayText}</div>
	<div class="cursor bg-white absolute transition-all duration-75" bind:this={cursor} />
</div>

<style>
	@keyframes blink {
		0% {
			opacity: 2;
		}
		50% {
			opacity: 0.8;
		}
		100% {
			opacity: 0.9;
		}
	}
	.cursor {
		animation: blink 1s infinite;
		box-shadow: 0 0 20px 10px #FF43F1;
	}
</style>
