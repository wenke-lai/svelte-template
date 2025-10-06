<script lang="ts">
	import { SignedIn, SignedOut, SignInButton, UserButton } from 'svelte-clerk';
</script>

<SignedOut>
	<SignInButton class="btn btn-primary" />
</SignedOut>

<SignedIn>
	<UserButton />
</SignedIn>
