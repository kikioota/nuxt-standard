export default defineNuxtPlugin(() => {
  const { observe } = useScrollTrigger()

  const router = useRouter()
  router.afterEach(() => {
    nextTick(() => observe())
  })

  nextTick(() => observe())
})
