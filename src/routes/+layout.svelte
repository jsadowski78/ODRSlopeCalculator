<script>
	import '@brainandbones/skeleton/themes/theme-skeleton.css';
	import '@brainandbones/skeleton/styles/all.css';
	import '../app.postcss';

	import { AppShell, AppBar } from '@brainandbones/skeleton';

</script>

<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
    <!-- Header -->
    <svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<h1 class="hidden md:inline">Svelte+Tailwind+Skeleton</h1>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a class="btn btn-sm" href="https://github.com/jsadowski78/ODRSlopeCalculator" target="_blank" rel="noreferrer">GitHub</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

    <!-- Sidebar 
    <svelte:fragment slot="sidebarLeft"><nav class="list-nav">
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/about">About</a></li>
		</ul>
	</nav></svelte:fragment>-->

    <!-- Page Content Slot -->
    <slot />
</AppShell>
