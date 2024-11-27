const SpinnerEl = () => (
  <div
    className="
    inline-block size-8 animate-spin rounded-full border-4 border-solid border-current
    border-e-transparent align-[-0.125em]
    text-brand motion-reduce:animate-[spin_1.5s_linear_infinite]"
    aria-hidden="true"
  >
    <span
      className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    >
      Loading...
    </span>
  </div>
);

export const Spinner = () => (
  <div aria-live="polite" aria-busy="true">
    <SpinnerEl />
    <span className="sr-only">Loading...</span>
  </div>
);

export default Spinner;
