import { format, isFuture, parseISO } from "date-fns"

export function cn(...args) {
  return args.filter(Boolean).join(" ")
}

export function mapEdgesToNodes(data) {
  if (!data.edges) return []
  return data.edges.map(edge => edge.node)
}

export function filterOutDocsWithoutSlugs({ slug }) {
  return (slug || {}).current
}

export function filterOutDocsPublishedInTheFuture({ publishedAt }) {
  return !isFuture(parseISO(publishedAt))
}

export function getBlogUrl(slug) {
  return `/updates/${slug.current || slug}/`
}

export function buildImageObj(source = { asset: {} }) {
  const imageObj = {
    asset: { _ref: source.asset._ref || source.asset._id },
  }

  if (source.crop) imageObj.crop = source.crop
  if (source.hotspot) imageObj.hotspot = source.hotspot

  return imageObj
}

export function toPlainText(blocks) {
  if (!blocks) {
    return ""
  }
  return blocks
    .map(block => {
      if (block._type !== "block" || !block.children) {
        return ""
      }
      return block.children.map(child => child.text).join("")
    })
    .join("\n\n")
}
export const objectMap = (obj, fn) =>
  Object.fromEntries(Object.entries(obj).map(([k, v], i) => [k, fn(v, k, i)]))

export const buildReferenceLinkArray = arr => {
  class ResourceLink {
    constructor(title, link, extension, id, dir) {
      this.id = id
      this.title = title
      this.links = [[extension, link]]
      this.directory = dir
    }
  }
  // 1. create array of resourceLinks
  // 2. check array for matching title. If filetype is different push link to link array
  // map query to array of ResourceLink objects
  const linkArr = arr.map(
    elem =>
      new ResourceLink(
        elem.name,
        elem.publicURL,
        elem.extension,
        elem.id,
        elem.relativeDirectory
      )
  )
  const acc = []
  for (let i = 0; i < linkArr.length; i++) {
    if (acc.length > 0 && acc[acc.length - 1].title === linkArr[i].title) {
      //if titles match, push just links to last element
      acc[acc.length - 1].links.push(linkArr[i].links[0])
    } else {
      acc.push(linkArr[i])
    }
  }
  return acc
}
