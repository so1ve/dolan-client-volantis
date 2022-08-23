declare module "@vue/runtime-dom" {
  interface HTMLAttributes {
    [key: `un-${string}`]: any
  }
}

declare module "@vue/runtime-core" {
  interface AllowedComponentProps {
    [key: `un-${string}`]: any
  }
}

export {};