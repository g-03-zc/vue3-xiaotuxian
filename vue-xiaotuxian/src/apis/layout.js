import httpss from "@/utils/app";

export function getCategory () {
  return httpss({
    url: '/home/category/head'
  })
}