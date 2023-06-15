import Link from "next/link"

import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button"
import { HoverCardDemo } from "@/components/HoverDemo"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          俊秀 · 云书签
          <br className="hidden sm:inline" />
          秀出我的东东！
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Jun Show: My Cloud Bookmarks. <br className="hidden sm:inline" />
          Build with @shadcn/ui.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </div>
      <div className="flex gap-4">
        <div className="text-xl">UI Design:</div>
        <HoverCardDemo name="Arco Design" url="https://arco.design" />
        <HoverCardDemo name="Ant Design" url="https://ant.design" />
        <HoverCardDemo name="Semi Design" url="https://semi.design" />
        <HoverCardDemo name="Tailwind UI" url="https://tailwindui.com/" />
        <HoverCardDemo name="Tailwind CSS" url="https://tailwindcss.com/" />
        <HoverCardDemo name="@shadcn/ui" url="https://ui.shadcn.com/" />
        <HoverCardDemo name="Microsoft Fluent UI" url="https://developer.microsoft.com/en-us/fluentui#/" />
        <HoverCardDemo name="Google Material Design" url="https://m3.material.io/" />
        <HoverCardDemo name="MUI" url="https://mui.com/" />
        <HoverCardDemo name="Radix UI" url="https://www.radix-ui.com/" />
        
      </div>
    </section>
  )
}