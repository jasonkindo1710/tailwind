import Cards from "../../ assets/desktop/isocard.svg"
const Slogan = () => {
  return (
    <section className="text-36 relative my-14 font-extrabold md:my-28 md:grid md:grid-cols-3 md:items-center
    md:text-48 ">
      <div className="text-center md:col-span-1 md:col-start-2">
        <p className="">
          Earn <span className="text-purple-300">More</span>
        </p>
        <p className="">Pay Less</p>
        <button className="button-animate">
          Start
        </button>
      </div>
      <div className="mt-[69px] md:absolute md:right-[-5rem]">
          <img src={Cards} alt="credit card" />
      </div>
    </section>
  );
};

export default Slogan;
