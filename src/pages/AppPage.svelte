<script>
  import { fixedHeight } from '../helpers/fixedHeight'
	import Container from '../components/Container.svelte'
	import Block from '../components/Block.svelte'
	import PageTitle from '../components/PageTitle.svelte'
</script>

<Container spacing=24>
	<PageTitle
		title="App"
		subtitle="The App itself"
	/>
  <Block l=100>
		<div class="content-height-text" use:fixedHeight>
      <p>
        <ion-icon name="flask-outline"></ion-icon>
      </p>
    </div>
  </Block>
</Container>

<style>
  .content-height-text {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ion-icon {
    width: 240px;
    display: inline-block;
    opacity: .1
  }
</style>