function PageBanner({ bannerImage, heading, sub_heading }) {
  const backgroundImageStyle = {
    backgroundImage: `url(${bannerImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      style={backgroundImageStyle}
      className="flex items-center justify-center py-12 md:py-28"
    >
      <div className="text-center bg-[#03030358] md:text-7xl font-cinzel px-12 py-12 text-3xl md:px-[300px] md:py-[150px] text-white">
        <h1>{heading}</h1>
        <h1 className="uppercase text-sm md:text-base ">{sub_heading}</h1>
      </div>
    </div>
  );
}

export default PageBanner;
