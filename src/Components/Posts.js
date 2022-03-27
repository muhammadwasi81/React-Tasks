import React from 'react';

export default function Posts() {
  return (
    <>
      <h1 class="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600 px-10 mt-3">
        Latest Posts
      </h1>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <div className="rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1605711285791-0219e80e43a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
            alt="Mountain"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">WEB DEVELOPMENT</div>
            <p className="text-gray-700 text-base">
              This course provides an introduction to web development and
              client-side scripting. After providing a review of HTML5 and CSS,
              the course provides exposer to the concepts of web programming
              using client side scripting. The course covers basic construction
              of web page, cascading style sheet, and java script.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #javascript
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #webdev
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #coding
            </span>
          </div>
        </div>
        <div className="rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1555436169-20e93ea9a7ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="River"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Programming</div>
            <p className="text-gray-700 text-base">
              If you are looking to learn web development online, there are more
              than enough resources out there to teach you everything you need
              to know. In fact, many (if not most) of the web developers in the
              world today have launched successfully.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #instructors
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #coffee
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #coffeescript
            </span>
          </div>
        </div>

        <div className="rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1587691592099-24045742c181?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80"
            alt="Forest"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Best instructors</div>
            <p className="text-gray-700 text-base">
              As a web developer, your credibility is more about the strength of
              your portfolio than it is about your credentials. Your employment
              opportunities will often come from concrete skills and samples of
              your work rather than a degree from a university.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #nodejs
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #coding
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #buymeacoffee
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
