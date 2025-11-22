import Card4 from "../../Cards/Card4";

const Apple = () => {
  return (
    <section className="w-full bg-[#F5F5F7] py-10 font-semibold tracking-wider md:tracking-tight md:font-extrabold overflow-hidden md:bottom-90 relative bottom-4 lg:bottom-42 xl:bottom-[17.20rem] xl:pl-18.5 xl:pr-19.5 lg:left-0.5 sm:bottom-15 md:right-2 2xl:relative 2xl:left-10">
      <h2 className="text-2xl md:text-[1.4rem] md:font-normal lg:font-semibold px-6 lg:text-[1.9rem] xl:text-[1.8rem] font-[SFProDisplay] text-balance leading-[1.80rem]">
        The Apple Store difference.&nbsp;
        <br className="sm:hidden" />
        <span className="text-[#76767B]">
          Even more reasons to
          <br className="hidden sm:flex md:hidden" /> shop
          <br className="sm:hidden md:hidden" /> with us.
        </span>
      </h2>
      <section>
        <Card4 />
      </section>
    </section>
  );
};

export default Apple;
