<script lang="ts">
	import Section from '$lib/components/ui/section.svelte';
	import { current } from '$lib/stores/theme';
</script>

<Section>
	<p>
		current: {$current}
	</p>
</Section>
