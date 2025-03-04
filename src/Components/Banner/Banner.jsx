import bannerImg from "../../assets/books.jpg"
const Banner = () => {
  return (
    <div className="hero bg-base-300 min-h-screen rounded-xl my-12">
      <div className="hero-content flex-col lg:flex-row-reverse gap-20">
        <img
          src={bannerImg}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold mb-10 leading-16">Books to freshen up <br /> your bookshelf</h1>
          <button className="btn btn-primary bg-[#23BE0A] border-none rounded-lg">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
