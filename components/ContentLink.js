// import { FOCUS_VISIBLE_OUTLINE } from "@/lib/constants"
// import cx from "clsx"
import Link from "next/link"
import React, { ElementType } from "react"

export function ContentLink({
  href,
  children,
}) {
  return (
    <Link href={href}>
      <a
        className={
          "block overflow-hidden rounded-2xl bg-black/5 p-7 shadow-surface-elevation-low transition duration-300 hover:bg-black/10 hover:shadow-surface-elevation-medium"
        }
      >
        {children}
      </a>
    </Link>
  )
}

function Title({ children }) {
  return (
    <h3 className="text-xl text-white-100/90 transition duration-300 line-clamp-2 hover:text-white-100/90">
      {children}
    </h3>
  )
}

function Icon(props) {
  return (
    <div className="mt-1 ml-2 shrink-0">
      <props.icon className="w-5 text-white-100/30 transition-colors hover:text-white-100/50" />
    </div>
  )
}

function Text({ children }) {
  return (
    <p className="mt-4 text-lg text-white-100/70 line-clamp-3">{children}</p>
  )
}

function Meta({ children }) {
  return (
    <div className="flex flex-wrap space-x-2 text-base text-white-100/50">
      {children}
    </div>
  )
}

ContentLink.Title = Title
ContentLink.Icon = Icon
ContentLink.Text = Text
ContentLink.Meta = Meta
