import { includes } from 'lodash'

export function isShallowEqual (source, target, skip) {
  for (const key in source) {
    if (includes(skip, key)) continue
    if (!(key in target) || source[key] !== target[key]) return false
  }
  return true
}