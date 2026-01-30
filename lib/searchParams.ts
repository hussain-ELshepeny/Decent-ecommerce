import {
  createSearchParamsCache,
  parseAsInteger,
  parseAsString,
} from "nuqs/server"

export const searchParamsParsers = {
  q: parseAsString.withDefault(""),

  category: parseAsString.withDefault(""),

  sort: parseAsString.withDefault("newest"), // default sorting

  page: parseAsInteger.withDefault(1),
}

export const searchParamsCache = createSearchParamsCache(searchParamsParsers)
