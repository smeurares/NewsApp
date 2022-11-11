export function Navbar() {
  return (
    <>
<div className="flex flex-wrap place-items-center">
  <section className="relative mx-auto">
    <nav className="flex justify-between bg-gray-900 text-white w-screen">
      <div className="px-5 xl:px-12 py-6 flex w-full items-center">
        <p className="text-3xl font-bold font-heading" href="#">
        </p>
        <ul className="md:flex px-4 mx-auto font-semibold font-heading space-x-12">
          <li><p className="hover:text-gray-200" href="#">DailyNews</p></li>
        </ul>
      </div>
    </nav>
    
  </section>
</div>
</>
  )
}