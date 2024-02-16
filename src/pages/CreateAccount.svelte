<script>
  import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
  import Container from '../components/Container.svelte'
	import Block from '../components/Block.svelte'
	import Button from '../components/Button.svelte'
  import Input from '../components/Input.svelte'
  import Modal from '../components/Modal.svelte'
  import Placeholder from '../components/Placeholder.svelte'
  import SnackBar, { SnackBarHandler } from '../components/SnackBar.svelte'
  import { subscribe } from '../helpers/subscribe'

  export let modalHandler, auth, createAccountStore
  export let spacingModal = 36

  export let loadingStore = subscribe()
  loadingStore.set({loaded: true})

  function createUser(e) {
    e.preventDefault()
    loadingStore.set({loaded: false})
    const formData = new FormData(e.target)
    const data = {}
    for (let field of formData) {
      const [key, value] = field
      data[key] = value
    }
    createUserWithEmailAndPassword(auth, data['email'], data['password'])
      .then(() => {
      // .then((userCredential) => {
        let dataModel = {
          theme: 'light',
          name: data['name']
        }
        createAccountStore.set({data: dataModel})
        loadingStore.set({loaded: true})
        updateProfile(auth.currentUser, {
          displayName: data['name']
        })
          .catch((error) => {
          // console.log(error.code)
          console.log(error.message)
          snackBarHandler.action(error.message, 4000, 'error')
        })
      })
      .catch((error) => {
        // console.log(error.code)
        console.log(error.message)
        snackBarHandler.action(error.message, 4000, 'error')
        loadingStore.set({loaded: true})
      })
  }

  export let snackBarHandler = new SnackBarHandler()
  export let snackBarStore = snackBarHandler.store()
</script>

<Modal
  columns=1
  title="Create an Account"
  subtitle="Enter your information"
  spacingContainer={spacingModal}
  handler={modalHandler}
>
  <form on:submit={createUser}>
    <Container
      spacing={spacingModal}
    >
      <Block
        l=100
      >
        <Input
          id="name"
          label="Name"
          type="text"
          name="name"
          required={true}
        />
      </Block>
      <Block
        l=100
      >
        <Input
          id="email"
          label="Email"
          type="text"
          name="email"
          required={true}
        />
      </Block>
      <Block
        l=100
      >
        <Input
          id="password"
          label="Password"
          type="password"
          name="password"
          required={true}
        />
      </Block>
    </Container>
    <Container
      spacing={spacingModal}
    >
      <Block
        style="margin-top: 24px; margin-left: auto;"
      >
        <Button
          text="Close"
          type="button"
          style="secondary"
          onclick={modalHandler.action.bind(modalHandler)}
        />
      </Block>
      <Block
        style="margin-top: 24px; padding-left: 18px;"
      >
        {#if !$loadingStore.loaded}
          <Placeholder
            style="width: 94px;"
          />
        {:else}
          <Button
            text="Create"
            type="submit"
            style="primary"
          />
        {/if}
      </Block>
    </Container>
  </form>
</Modal>

<SnackBar
  store={snackBarStore}
/>