<script>
	import { onMount } from 'svelte';
	import Renderer from './Renderer.svelte';

	/**
	 * @type {string}
	 */
	let inputText = '';
</script>

<div class="flex flex-row p-4">
	<div class="flex flex-col space-y-4">
		<textarea
			on:input={(event) => {
				inputText = event.currentTarget.value;
			}}
			placeholder="Your notes go here..."
			class="outline-none border-none bg-neutral-800 resize-none rounded-xl h-24 p-4 text-white"
		/>
        <div class="font-sans w-72 flex flex-col space-y-4">
            <a href="https://www.buymeacoffee.com/jtpotato" target="_blank" style="text-decoration: none;">
                    <p class="m-0 p-0 text-xs text-white/50 underline">{"Consider donating 😊"}</p>
            </a>
            <p class="text-white/50 text-xs">If you can't donate, consider disabling your content-blocker on this site! Analytics are important to us 📈 and we promise we won't sell that data to anyone else. 🙏</p>
        </div>

	</div>

	<div class="ml-8 w-full">
		<Renderer text={inputText} />
	</div>
</div>
