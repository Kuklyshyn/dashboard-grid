import { AsyncComponent, defineAsyncComponent } from 'vue'
export const useIcon = () => {
  const getIconComponent = (iconPath: string): string | AsyncComponent => {
    if (iconPath) {
      return defineAsyncComponent(() => import(`../components/atom/icons/${iconPath}.vue`))
    }

    return ''
  }

  return { getIconComponent }
}
