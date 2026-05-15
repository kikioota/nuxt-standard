// plugins/smooth-scroll.client.js
export default defineNuxtPlugin(() => {
  const HEADER_HEIGHT = 0 // 固定ヘッダーの高さに合わせて調整

  const handleAnchorClick = (e) => {
    const target = e.target.closest('a[href^="#"]')
    if (!target) return

    const href = target.getAttribute('href')
    if (!href || href === '#') return

    const el = document.querySelector(href)
    if (!el) return

    e.preventDefault()

    const top = el.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT

    window.scrollTo({
      top,
      behavior: 'smooth',
    })
  }

  document.addEventListener('click', handleAnchorClick)
})
