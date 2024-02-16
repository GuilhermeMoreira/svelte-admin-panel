<script>
	export let text, type, style, onclick
</script>

<button {type} class={style} on:click={onclick}>
	{text}
</button>

<style lang="scss">
	button {
		font-weight: 600;
		border: 2px solid var(--color_5);
		border-radius: 20px;
		padding: 9px 27px;
		background-color: var(--color_5);
		color: #fff;
		cursor: pointer;
		&.secondary {
			background-color: transparent;
			color: var(--color_5);
		}
		&.small {
			font-size: 14px;
			padding: 6px 24px;
			padding-bottom: 7px;
			font-weight: 500;
		}
	}
</style>