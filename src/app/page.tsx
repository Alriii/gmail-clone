import { GoogleLogo } from "@/components/GoogleLogo";

const linkClass =
  "text-[#a8c7fa] hover:text-[#b8d7ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a8c7fa] rounded-sm";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#1f1f1f] text-[#e3e3e3]">
      <div className="flex flex-1 items-center justify-center px-4 py-10 sm:px-6">
        <div className="w-full max-w-[1040px] rounded-[28px] bg-[#0b0b0b] p-8 sm:p-10 lg:flex lg:gap-14 lg:p-12">
          <div className="mb-8 flex flex-col lg:mb-0 lg:max-w-[380px] lg:shrink-0">
            <GoogleLogo className="mb-6 h-6 w-6 sm:h-7 sm:w-7" />
            <h1 className="text-[32px] font-normal leading-10 tracking-tight text-white sm:text-4xl">Sign in</h1>
            <p className="mt-2 text-base text-[#e3e3e3]">to continue to Gmail</p>
          </div>
          <div className="flex flex-1 flex-col lg:pt-1">
            <label htmlFor="email" className="sr-only">Email or phone</label>
            <input id="email" name="email" type="email" autoComplete="username" placeholder="Email or phone" className="w-full rounded border border-[#8e918f] bg-transparent px-4 py-3.5 text-base text-[#e3e3e3] placeholder:text-[#8e918f] focus:border-[#a8c7fa] focus:outline-none focus:ring-2 focus:ring-[#a8c7fa]/40" />
            <a href="#" className={`mt-3 inline-block w-fit text-sm font-medium ${linkClass}`}>Forgot email?</a>
            <p className="mt-8 text-sm leading-relaxed text-[#b4b4b4]">Not your computer? Use Guest mode to sign in privately. <a href="#" className={`font-medium ${linkClass}`}>Learn more about using Guest mode</a></p>
            <div className="mt-10 flex flex-wrap items-center justify-end gap-4">
              <a href="#" className={`text-sm font-medium ${linkClass}`}>Create account</a>
              <button type="button" className="rounded-full bg-[#a8c7fa] px-6 py-2.5 text-sm font-medium text-[#001d35] transition-colors hover:bg-[#b8d7ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a8c7fa]">Next</button>
            </div>
          </div>
        </div>
      </div>
      <footer className="flex flex-col gap-4 px-4 py-6 text-xs text-[#b4b4b4] sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="relative inline-flex items-center">
          <select aria-label="Language" defaultValue="en-US" className="cursor-pointer appearance-none rounded border border-transparent bg-transparent py-1 pr-7 pl-1 text-[#b4b4b4] hover:text-[#e3e3e3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a8c7fa]">
            <option value="en-US">English (United States)</option>
            <option value="en-GB">English (United Kingdom)</option>
            <option value="es">Espanol</option>
          </select>
          <svg className="pointer-events-none absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 text-[#b4b4b4]" viewBox="0 0 12 12" fill="currentColor" aria-hidden><path d="M6 8.5L1.5 4h9L6 8.5z" /></svg>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          <a href="#" className="rounded-sm text-[#b4b4b4] hover:text-[#e3e3e3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a8c7fa]">Help</a>
          <a href="#" className="rounded-sm text-[#b4b4b4] hover:text-[#e3e3e3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a8c7fa]">Privacy</a>
          <a href="#" className="rounded-sm text-[#b4b4b4] hover:text-[#e3e3e3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a8c7fa]">Terms</a>
        </nav>
      </footer>
    </div>
  );
}
