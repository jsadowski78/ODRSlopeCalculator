
<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

	export let pointValue:number = 0;
    export let base:number = 0;

    $: slope = pointValue - base;

    function handleClick() {
        dispatch('message', {
			point: pointValue
		});
    }

</script>

<div class="card rounded-md md:rounded-xl">
    <header class={"overflow-hidden card-header p-1 md:p-4 rounded-md md:rounded-xl h-8 md:h-14 " + 
        (slope>=0 ? (slope>10 ? (slope>12.5 ? 'bg-warning-500' : 'bg-tertiary-500') : 'bg-primary-500') : 'bg-surface-500/20')}>
        <div class="text-center text-sm md:text-xl ">
            <span class={(slope>12.5 ? 'hidden md:inline': 'hidden')}>💀</span>
            {(slope >= 0 ? '+' + slope : slope)}"
        </div>
    </header>
    
    <footer class="card-footer text-center h-12 p-2">
        <button class="btn bg-surface-500 btn-sm text-white inset-0 inline md:hidden " on:click={handleClick}>Set</button>
        <button class="btn bg-surface-500 btn-sm text-white inset-0 hidden md:inline " on:click={handleClick}>Set Start</button>
    </footer>
</div>