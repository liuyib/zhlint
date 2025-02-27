import type { IgnoredCase } from '../ignore'
import type { Mark, MutableParseResult } from '../parser'

export type ParserIgnoredCase = {
  name: string
  meta: string
  index: number
  length: number
  originContent: string
}

export type Block = {
  value: string
  marks: Mark[]
  start: number
  end: number
}

export type ParsedStatus = {
  content: string
  modifiedContent: string
  ignoredByRules: IgnoredCase[]
  ignoredByParsers: ParserIgnoredCase[]
  blocks: Block[]
}

export type ParsedBlock = Block & MutableParseResult & {
  originValue: string
}
