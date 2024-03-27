const ExploreBook = () => {
    return (
        <div className=" flex flex-col justify-start items-start h-[73vh] ">
            <h2 className="text-2xl lg:text-4xl text-center animate-pulse font-black pb-2 border-b-4 border-black shadow-xl">
                Welcome to Explore Books!
            </h2>
            <div className="w-full">
                <div className="mt-9 border-b border-gray-500">
                    <h2 className="text-[#23BE0A] font-semibold text-xl">Featured Books:</h2>
                    <p className="mt-2 text-lg font-medium lg:w-[80%] pb-6 text-[#13131399]">
                        Dive into our handpicked selection of featured books, carefully chosen to captivate and inspire readers of
                        all ages. From gripping thrillers to heartwarming tales, each book offers a unique journey into the realms
                        of imagination and creativity.
                    </p>
                </div>
                <div className="mt-9 border-b border-gray-500">
                    <h2 className="text-[#23BE0A] font-semibold text-xl">Browse by Genre:</h2>
                    <p className="mt-2 text-lg font-medium w-[80%] pb-6 text-[#13131399]">
                        Explore our vast collection of books organized by genre, from timeless classics to contemporary
                        bestsellers. Whether you&apos;re in the mood for romance, mystery, fantasy, or historical fiction,
                        you&apos;ll find a treasure trove of literary gems waiting to be uncovered.
                    </p>
                </div>
                <div className="mt-9 border-b border-gray-500">
                    <h2 className="text-[#23BE0A] font-semibold text-xl">Curated Collections:</h2>
                    <p className="mt-2 text-lg font-medium w-[80%] pb-6 text-[#13131399]">
                        Discover curated collections curated by our team of passionate readers, designed to cater to every
                        interest and mood. From seasonal reads to genre-specific picks, our collections are your guide to finding
                        the perfect book for any occasion.
                    </p>
                </div>
                <div className="mt-9 border-b border-gray-500">
                    <h2 className="text-[#23BE0A] font-semibold text-xl">Search and Filter:</h2>
                    <p className="mt-2 text-lg font-medium w-[80%] pb-6 text-[#13131399]">
                        Use our search and filter options to narrow down your choices and find the perfect book to suit your
                        preferences. Whether you&apos;re searching for a specific title, author, or genre, our intuitive search
                        functionality makes it easy to find exactly what you&apos;re looking for.
                    </p>
                </div>
                <p className="py-8">
                    <em>Success is for Book Vibe.</em>
                </p>
            </div>
        </div>
    )
}

export default ExploreBook
