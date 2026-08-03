// Resolve a public asset path against the Vite base URL so it works under the
// /flavour-case subpath (e.g. asset('/assets/x.png') -> '/flavour-case/assets/x.png').
export function asset(path: string): string {
  return import.meta.env.BASE_URL + path.replace(/^\//, '')
}
