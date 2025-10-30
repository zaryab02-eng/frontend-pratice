const Card2 = () => {
  const imageUrl =
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-iphone-17-pro-202509_FMT_WHH?wid=618&hei=900&fmt=jpeg&qlt=90&.v=UzBXQnlhUWdraTNvNU1Kb3pEQlpXQjVOVStZaG1ncWFjNXVUZkZ4anVIYkxkU0ZPTlpaU08rcXlLdm5vVFNtWms4Qy8xWXFFK1dKS3pEemhEREZVdTRKWlgzZzdyUXEzcGE2bUxYbWVvdHF2bC94bmFYRGtYTVF5WXZKZDExUW4";

  return (
    <div
      className="h-[28.125rem] w-[19.3125rem] rounded-2xl relative mt-6 pl-7 pt-12 flex flex-col justify-start bg-cover bg-center"
      style={{ backgroundImage: `url('${imageUrl}')` }}
    >
      <div className="text-white">
        <a href="#" className="text-[1.3125rem] font-semibold tracking-tight">
          iPhone 17 Pro
        </a>
        <div className="flex flex-col gap-y-0.5">
          <span className="text-[1.0625rem] tracking-normal">All out Pro.</span>
          <span className="text-[0.875rem] tracking-wide">From ₹134900.00</span>
        </div>
      </div>
    </div>
  );
};

export default Card2;
