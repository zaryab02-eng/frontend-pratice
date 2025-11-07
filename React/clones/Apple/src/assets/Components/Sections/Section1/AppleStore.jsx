import Card4 from "../../Cards/Card4";

const Apple = () => {
  return (
    <section className="w-full py-10 font-semibold tracking-wider overflow-hidden relative bottom-4">
      <h2 className="text-2xl md:text-[1.4rem] md:font-normal px-6 lg:text-[1.9rem] xl:text-[1.8rem] font-[SFProDisplay] text-balance leading-[1.80rem]">
        The Apple Store difference.
        <br className="sm:hidden" />
        <span className="text-[#76767B]">
          Even more reasons to
          <br className="hidden sm:flex" /> shop
          <br className="sm:hidden" /> with us.
        </span>
      </h2>
      <section>
        <Card4 />
      </section>
    </section>
  );
};

export default Apple;
