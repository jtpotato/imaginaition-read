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
        <a href="https://www.buymeacoffee.com/jtpotato" style={"text-decoration: none;"} target="_blank">
            <div class="font-sans text-black bg-white p-2 rounded-lg text-sm flex flex-row space-x-2">
                <img src="https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-1.svg" alt="Buymeacoffee logo" class="w-8">
                <p class="m-0 p-0">Thank you for using this website! Consider supporting me :)</p>
            </div>
        </a>
	</div>

	<div class="ml-8 w-full">
		<Renderer text={inputText} />
	</div>
</div>
