import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faCalendar } from "@fortawesome/free-solid-svg-icons"

export default function Hero() {
  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden bg-gray-900">
      <div
        className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"
        aria-hidden="true"
      >
        <div className="relative h-full mx-auto max-w-7xl">
          <svg
            className="absolute transform right-full translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-800"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg
            className="absolute transform left-full -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-800"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
          </svg>
        </div>
      </div>

      <div className="relative pt-6 pb-16 sm:pb-24">
        <main className="px-6 mx-auto mt-16 max-w-7xl sm:mt-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">Daniel Burger,</span>
              <span className="block text-primary xl:inline">neurotech engineer</span>
            </h1>
            <p className="max-w-md mx-auto mt-3 text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Building brain-machine interface software at IDUN Technologies and combining spatial
              computing with artificial intelligence at Middlesex University.
            </p>
            <div className="max-w-lg mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a
                  href="mailto:public@danielburger.online"
                  className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-gray-800 border border-transparent rounded-md bg-primary hover:bg-primaryDark md:py-4 md:text-lg md:px-10"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
                  Contact me
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="https://calendly.com/danburonline/meet"
                  target="_blank"
                  className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-gray-800 bg-white border border-transparent rounded-md hover:bg-gray-200 md:py-4 md:text-lg md:px-10"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faCalendar} className="mr-3" />
                  Book a meeting
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
