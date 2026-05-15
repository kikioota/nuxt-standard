// composables/useScrollTrigger.js
export const useScrollTrigger = (options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '-15% 0px',
    once = true,
  } = options

  const observe = () => {
    const targets = document.querySelectorAll('.js-scrolltrigger')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-observer')
            if (once) observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin }
    )

    targets.forEach((el) => observer.observe(el))
  }

  return { observe }
}
