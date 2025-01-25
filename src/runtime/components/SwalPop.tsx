import type { FunctionalComponent } from 'vue'

type SwalPopupProps = {
  message: string
  class?: string
}

type Events = {
  sendMessage(message: string): void
}

const SwalPopComponent: FunctionalComponent<SwalPopupProps, Events> = (
  props,
  context,
) => {
  return (
    <button
      class={props.class}
      onClick={() => context.emit('sendMessage', props.message)}
    >
      {props.message}
    </button>
  )
}

SwalPopComponent.props = {
  message: {
    type: String,
    required: true,
    default: 'Hello World!',
  },
  class: {
    type: String,
    default: '',
    required: false,
  },
}

SwalPopComponent.displayName = 'SwalPop'
SwalPopComponent.emits = {
  sendMessage: value => typeof value === 'string',
}

export default SwalPopComponent
