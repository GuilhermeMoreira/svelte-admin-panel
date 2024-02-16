import { getContext } from 'svelte'
import { doc, setDoc } from 'firebase/firestore'

export class FormHandler {
  constructor(callback, UserID, store, snapshot, db = getContext('db')) {
    this.db = db
    this.callback = callback
    this.UserID = UserID
    this._store = store
    this.snapshot = snapshot
  }
  #loader() {
    let previousData = this.snapshot.data
    previousData.loaded = false
    this._store.set(previousData)
  }
  async submit(e) {
    e.preventDefault()
    this.#loader()
    const formData = new FormData(e.target)
    const data = {}
    for (let field of formData) {
      const [key, value] = field
      data[key] = value
    }
    data.updated = new Date()
    const collection = e.target.getAttribute('collection')
    if (collection) {
      await setDoc(doc(this.db, collection, this.UserID), data)
        .then(() => {
          setTimeout(() => {
            this.callback(true)
          }, 400)
        })
        .catch((error) => {
          console.log(error.message)
          this.callback(false, error.message)
        })
      return
    }
    // implementar fetch
    console.log(e.target.action)
    console.log(e.target.method)
  }
}