import type { FunctionalComponent } from 'vue'

type SwalPopupProps = {
  message: string
}

type Events = {
  sendMessage(message: string): void
}

const SwalPopComponent: FunctionalComponent<SwalPopupProps, Events> = (
  props,
  context,
) => {
  return (
    <button onClick={() => context.emit('sendMessage', props.message)}>
      {props.message}
      {' '}
      {' '}
    </button>
  )
}

SwalPopComponent.props = {
  message: {
    type: String,
    required: true,
    default: 'Hello World!',
  },
}

SwalPopComponent.displayName = 'SwalPop'
SwalPopComponent.emits = {
  sendMessage: value => typeof value === 'string',
}

export default SwalPopComponent
