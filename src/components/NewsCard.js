export function NewsCard({newsProps}) {
  return (
<section className="bg-white dark:bg-red-900">
    <div className="container px-6 py-10 mx-auto border-b-2">
        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
            <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src={newsProps.urlToImage} alt="" />

            <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                <p className="text-sm text-blue-500 uppercase">{newsProps.source.name}</p>

                <p className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl">
                    {newsProps.title}
                </p>

                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                    {newsProps.description}
                </p>

                <p className="inline-block mt-2 text-blue-500 underline hover:text-blue-400"> <a href={newsProps.url}>Read more</a> </p>

                <div className="flex flex-row justify-center items-center mt-6">
                    <div className="mx-4">
                        <h1 className="text-sm text-gray-700 dark:text-gray-200">Author: {newsProps.author}</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Published at: {newsProps.publishedAt}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}