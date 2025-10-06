<script lang="ts">
	import Section from '$lib/components/ui/section.svelte';
	import { ClerkLoaded, ClerkLoading, SignIn } from 'svelte-clerk';

	const { data } = $props();
</script>

<svelte:head>
	<title>登入</title>
	<meta name="description" content="登入您的帳號。" />
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<Section classes={{ div: 'max-w-md px-8' }}>
	<hgroup class="">
		<h1 class="text-3xl font-bold text-base-content">歡迎回來</h1>
	</hgroup>
</Section>

<Section classes={{ div: 'w-full max-w-md flex flex-col items-center' }}>
	<ClerkLoading>loading...</ClerkLoading>

	<ClerkLoaded>
		<SignIn redirectUrl={data.redirectUrl} />

		<div class="divider">或</div>

		<div class="text-center text-sm">
			<p class="text-base-content/70">
				還沒有帳號？
				<a href="/auth/signup" class="link">立即註冊</a>
			</p>
		</div>
	</ClerkLoaded>
</Section>

<Section>
	<div class="text-xs text-base-content/50">
		<div class="flex justify-center gap-1">
			<p>登入即表示您同意我們的</p>
			<a href="/terms" class="link">服務條款</a>
			<p>和</p>
			<a href="/privacy" class="link">隱私政策</a>
		</div>
	</div>
</Section>
