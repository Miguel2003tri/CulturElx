import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <body className="h-screen bg-amber-500">
        <img src="/imgs/logo-vertical.png" alt="" />
      </body>
    </>
  )
}

export default HomePage
