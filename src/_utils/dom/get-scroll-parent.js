import getStyleComputedProperty from './get-style-computed-property'
import getParentNode from './get-parent-node'

const NOT_FOUND = 'NOT_FOUND'
const CACHE_DURATION = 60000

const scrollNodeCache = {
  cache: new Map(),
  read (node) {
    if (this.cache.has(node)) {
      return this.cache.get(node)
    } else {
      return NOT_FOUND
    }
  },
  remove (node) {
    this.cache.delete(node)
  },
  write (node, scrollParentNode) {
    if (!this.cache.has(node)) {
      this.cache.set(node, scrollParentNode)
      window.setTimeout(() => {
        this.remove(node)
      }, CACHE_DURATION)
    }
  }
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @param {Element} element
 * @returns {Element|null} scroll parent
 */
export default function getScrollParent (element) {
  const startElement = getParentNode(element)
  return getScrollElementFrom(startElement)
}

function getScrollElementFrom (element) {
  const cachedNode = scrollNodeCache.read(element)
  if (cachedNode !== NOT_FOUND) {
    return cachedNode
  }

  if (!element) {
    return null
  }

  if (element.nodeName === '#document') {
    return document
  }

  // Firefox want us to check `-x` and `-y` variations as well
  const { overflow, overflowX, overflowY } = getStyleComputedProperty(element)
  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    scrollNodeCache.write(element, element)
    return element
  }

  const scrollElement = getScrollElementFrom(getParentNode(element))
  scrollNodeCache.write(element, scrollElement)
  return scrollElement
}