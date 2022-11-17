
<script lang="ts">
    import { GradientHeading } from '@brainandbones/skeleton';
    import Card from '../components/card.svelte';

	const points:number[] = [];

    points.push(18,18,19.75, 21.5,23.75, 26,
        16.5, 18, 19.5, 21, 23.25, 25.5,
        16.25 ,17.5 ,18.7 ,19.75, 21.75, 23.75,
        16,17,17.75,18.5,20.25,22,
        14.25,15.75,16.75,18,19.75,21.5,
        12.5,14.5,16,17.5,19.25,21,
        11.25,13.25,15,16.75,18.2,19.5,
        10,12,14,16,17,18,
        9,11,12.75,14.25,15.25,16.5,
        8,10,11.25,12.5,13.75,15,
        7,9.5,10.5,11.5,12.75,14,
        6,9,9.75,10.5,11.75,13);

    $: startingPoint = 6;

    function handleMessage(event:any) {
        startingPoint = event.detail.point;
    }
</script>

<div class="container mx-auto p-2 md:p-8 md:space-y-8 space-y-2">
	<GradientHeading tag="h1" direction="bg-gradient-to-br" from="from-primary-500" to="to-accent-500">
        ODR Slope Calculator
    </GradientHeading>

	<div id="PlotPoints" class="container mx-auto grid grid-cols-6 md:gap-4 gap-2">
        {#each points as point}
            <Card bind:pointValue={point} bind:base={startingPoint} on:message={handleMessage}/>
        {/each}
    </div>

</div>