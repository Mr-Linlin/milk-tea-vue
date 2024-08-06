/// <reference types="vite/client" />
declare module '*.less' {
  const content: Record<string, string>;
  export default content;
}
declare module "*.vue" {
  import type { DefineComponent } from "vue"
  const vueComponent: DefineComponent<{}, {}, any>
  export default vueComponent
}

