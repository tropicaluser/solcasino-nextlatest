export default function Footer() {
  return (
    <div className="mt-auto py-4 text-gray-400 md:px-12 px-4">
      <div className="flex flex-col md:flex-row md:justify-between items-center gap-1 md:gap-0 relative">
        <p className="text-sm">© pump.fun 2024</p>
        <div className="text-sm md:absolute md:left-1/2 md:transform md:-translate-x-1/2 text-center">
          <a className="underline" href="/docs/privacy-policy">
            privacy policy
          </a>{' '}
          |
          <a className="underline" href="/docs/terms-and-conditions">
            terms of service
          </a>
        </div>
        <a
          rel="noopener noreferrer"
          className="text-sm"
          href="/report/coins/4zticva4AsDqyz6vtPWHP8NDmCH4RFaK4piH3JXipump"
        >
          report
        </a>
      </div>
    </div>
  );
}
