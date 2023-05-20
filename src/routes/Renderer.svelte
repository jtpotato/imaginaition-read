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
	let displayDiv;

	/**
	 * @type {HTMLDivElement}
	 */
	let cursor;

	let warnUserAboutXSS = false;

	onMount(() => {
		cursor.style.height = 12 + 'px';
		cursor.style.width = 12 / 2 + 'px';

		// @ts-ignore
		if (!displayDiv.setHTML) {
			warnUserAboutXSS = true;
		}

		let frameLoopID = setInterval(() => {
			// Chunk the text
			let completionLength = Math.random() * 10 - 1;

			// If we need to re-render
			if (cutInputText != text) {
				cutInputText = text.substring(0, cutInputText.length + completionLength);

				displayText = marked.parse(cutInputText + '<span id="cursor-target"></span>');

				// @ts-ignore
				if (!displayDiv.setHTML) {
					displayDiv.innerHTML = displayText;
				}
				else {
					// @ts-ignore
					displayDiv.setHTML(displayText);
				}

				setTimeout(() => {
					// Update cursor
					let target = document.getElementById('cursor-target');
					if (target?.offsetHeight && target.offsetTop) {
						cursor.style.top = target?.offsetTop + 'px';
						cursor.style.left = target?.offsetLeft + 'px';
						let height = target?.offsetHeight;
						cursor.style.height = height + 'px';
						cursor.style.width = height / 2 + 'px';
					}
				}, 1);
			}
		}, 50);

		return () => {
			displayText = '';
			clearInterval(frameLoopID);
		};
	});
</script>

<!--TODO!!!!!!! SANITISE THIS-->
<div class="font-sans text-sm text-white/50" hidden={!warnUserAboutXSS}>
	<p class="m-0">
		Your browser does not support the Sanitizer() object and could be vulnerable to
		cross-site-scripting. Use this site at your own risk ⚠️
	</p>
	<a
		href="https://developer.mozilla.org/en-US/docs/Web/API/Sanitizer#browser_compatibility"
		target="_blank"
		style="text-decoration: none;"
	>
		<p class="underline text-white/50">
			https://developer.mozilla.org/en-US/docs/Web/API/Sanitizer#browser_compatibility
		</p>
	</a>
</div>
<div class="bg-neutral-800 p-4 rounded-lg">
	<div class="text-white font-sans" bind:this={displayDiv} />
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
		box-shadow: 0 0 20px 10px #ff43f1;
	}
</style>
