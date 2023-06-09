import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Spencer Sharp</title>
        <meta
          name="description"
          content="I’m Spencer Sharp. I live in New York City, where I design the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Trent Ransom. I live in New York City, where I design the
              future.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                After spending my life working on my musical abilities I felt a bit empty. I have been playing a musical instrument for 20 years and it became what I did without question. I spent a lot of time practicing before college but I wasn&#39;t completely focused on it.
              </p>
              <p>
                When I applied for colleges I didn&#39;t make music a priority. I applied to some for music, some for physics, and some for both. I ended up starting at New York University as a music major taking classes for a physics double major. I was much more involved in the music scene than the physics scene so I built up my network there. After two years I had strong connections in the music department and nearly none in physics. I ended up dropping the physics major and focusing solely on music. I think ultimately the reason is that I did not build roots in the physics department and ended up fending for myself two years in. That became unmanageable.
              </p>
              <p>
                At the time this was the right choice for me. I was getting much better at the violin and became hyper-focused on music. I read histories and listened to old recordings constantly. At the end of my time at NYU, I met the most important mentor in my life Mr. I Hao Lee. I studied with him all summer after my undergrad and I want to DePaul to study with him. He took my violin playing to the next level. But much more than that he reframed my idea of what it meant to make it or to have a career. He made me read Good to Great which I&#39;ve read three times now. He led me to realize what I could be great at. It is not an overstatement to say that he changed my life.
              </p>
              <p>
                After three years at DePaul with Mr. Lee I started a third degree at Juilliard. This time in viola. This was the time for me to really build my career as a musician. I met another great mentor in my life, Ms. Carol Rodland and I was becoming professional.
              </p>
              <p>
                A lot changed in my life at this time, I moved to a new city, I was starting a new instrument, I was starting at a new school, and I met a new girlfriend (who would become my wife). At this point something didn&#39;t feel right. My priorities started to change. When I saw into the future into my life as a musician I didn&#39;t like what I saw. I don&#39;t like how underpaid musicians are. I don&#39;t like how many people in the music world are so snobby (there was a time when I was very snobby too). I don&#39;t like how classical music organizations have their heads in the clouds and can&#39;t change with the world around them. I don&#39;t like how music schools never advertise their job placement rates or average salary after graduation. I could go on and on and on. Somehow this all hit me at once and I wanted to get out. I still like making music but I can&#39;t see myself being part of that world for my career. So I dropped out of Juilliard in search of something else to do.
              </p>
              <p>
                When I took physics classes I used python (coding language) a lot in the labs. I really enjoyed that and I got quite good at it but never continued after those two years. I wanted to go back and revisit that so I went to look for coding bootcamps that would use python. I found the Fintech bootcamp from Columbia University and I signed up. I got to fully dive into the world of coding that I only scratched the surface of in college and I loved it. There is something about coding that really taps into what I love about making music but that&#39;s a subject for another article. I am so excited to be starting a new career as a software engineer.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://www.instagram.com/trenthegent/" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="https://github.com/trentransom" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/trentransom/" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:trent.ransom@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                trent.ransom@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
