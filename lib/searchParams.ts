import {
  createSearchParamsCache,
  parseAsInteger,
  parseAsString,
  parseAsArrayOf,
  parseAsBoolean,
} from "nuqs/server"

export const searchParamsParsers = {
  q: parseAsString.withDefault(""),
  category: parseAsArrayOf(parseAsString).withDefault([]),
  minPrice: parseAsInteger.withDefault(0),
  maxPrice: parseAsInteger.withDefault(2000),
  inStock: parseAsBoolean.withDefault(false),
  sort: parseAsString.withDefault("newest"),
  page: parseAsInteger.withDefault(1),
}

export const searchParamsCache = createSearchParamsCache(searchParamsParsers)
