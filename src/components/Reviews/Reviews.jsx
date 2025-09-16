import React from 'react';

const reviewsData = [
  {
    name: 'Daniella Doe',
    title: 'Mobile dev',
    avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos
    illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, a suscipit, ratione ea totam
    ullam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti
    aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
    reprehenderit, veritatis harum et rerum.`,
  },
  {
    name: 'gayatri',
    title: 'bracelete',
    avatar: 'https://randomuser.me/api/portraits/women/14.jpg',
    review: `Lorem ipsum dolor laboriosam deleniti aperiam ab veniam sint non cumque quis tempore
    cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.`,
  },
  {
    name: 'Yanick Doe',
    title: 'Developer',
    avatar: 'https://randomuser.me/api/portraits/women/18.jpg',
    review: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti
    aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
    reprehenderit, veritatis harum et rerum.`,
  },
  {
    name: 'Jane Doe',
    title: 'Mobile dev',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    review: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti
    aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
    reprehenderit, veritatis harum et rerum.`,
  },
  {
    name: 'Andy Doe',
    title: 'Manager',
    avatar: 'https://randomuser.me/api/portraits/women/62.jpg',
    review: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam
    deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
    reprehenderit, veritatis harum et rerum.`,
  },
  {
    name: 'Yanndy Doe',
    title: 'Mobile dev',
    avatar: 'https://randomuser.me/api/portraits/women/19.jpg',
    review: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti
    aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
    reprehenderit, veritatis harum et rerum.`,
  },
];

const Reviews = () => {
  return (
    <div className="text-gray-600 dark:text-gray-300 pt-8 dark:bg-gray-900" id="reviews">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 bg-red-950/5">
        <div className="mb-10 space-y-4 px-6 md:px-0">
          <h2 className="text-center text-2xl font-bold text-yellow-600 dark:text-white md:text-4xl pt-5">
            What Our Devotees Say.
          </h2>
        </div>

        <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
          {reviewsData.map((review, index) => (
            <div
              key={index}
              className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none hover:scale-105 transition-transform hover:bg-red-900/15 hover:text-red-950"
            >
              <div className="flex gap-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src={review.avatar}
                  alt="user avatar"
                  width="400"
                  height="400"
                  loading="lazy"
                />
                <div>
                  <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                    {review.name}
                  </h6>
                  <p className="text-sm text-gray-500 dark:text-gray-300 ">
                    {review.title}
                  </p>
                </div>
              </div>
              <p className="mt-8">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;