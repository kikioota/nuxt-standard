import { useSlots, computed, Comment } from 'vue'

export function useCleanSlot() {
  const slots = useSlots()

  const defaultSlot = computed(() => {
    if (!slots.default) return null
    return slots.default().filter(vnode => vnode.type !== Comment)
  })

  return { defaultSlot }
}