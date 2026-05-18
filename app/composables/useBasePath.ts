export const useBasePath = () => {
  const config = useRuntimeConfig()
  const base = config.app.baseURL

  const root = (path: string) => {
    // 先頭のスラッシュを除去して結合
    return `${base}${path.replace(/^\//, '')}`
  }

  return { root }
}