<script>
  export let id, label, type, name, value, required, disabled
</script>

<label for="{id}">
  {label}{required ? ' *' : ''}
</label>
<input id={id} type={type} name={name}
  value={value || null}
  required={required ? 'required' : null}
  disabled={disabled ? 'disabled' : null}
>

<style lang="scss">
  @import '../scss/media-sizes';
  input {
    background-color: var(--color_10);
    color: var(--color_3);
    border-radius: 6px;
    padding: 12px;
    width: 100%;
  }
  @media screen and (max-width: $mediaQueryMid) {
    input {
      font-size: 18px;
      padding: 15px;
    }
  }
</style>