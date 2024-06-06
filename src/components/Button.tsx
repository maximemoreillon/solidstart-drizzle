import { JSX, JSXElement, Show } from "solid-js"

type Props = {
  href?: string
  type?: "submit" | "reset" | "button" | undefined
  children: JSXElement
  onClick?: JSX.EventHandlerUnion<HTMLButtonElement, MouseEvent> | undefined
}

export default function Button(props: Props) {
  return (
    <>
      <Show when={props.href}>
        <a href={props.href} class="px-2 py-1 border-2 rounded">
          {props.children}
        </a>
      </Show>
      <Show when={!props.href}>
        <button
          type={props.type}
          onClick={props.onClick}
          class="px-2 py-1 border-2 rounded"
        >
          {props.children}
        </button>
      </Show>
    </>
  )
}
