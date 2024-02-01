

const ShowCard = (props) => {
  const { shows } = props;

  // Ensure that resData and resData.info are defined before destructuring
  const { cloudinaryImageId, cuisines, name, costForTwo, avgRating, sla } = resData?.info || {};

  return (
    <div className="res-card flex-grow ml-4 w-64 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
      {/* Use CDN_URL + cloudinaryImageId for the image source */}
      <img className="res-logo object-cover w-full h-40 mb-4 rounded-lg" src={shows.show.image.medium} alt={name} />
      <h3 className="text-xl font-semibold mb-2 overflow-hidden whitespace-nowrap overflow-ellipsis">{shows.show.name}</h3>
      <h4 className="text-sm mb-2 overflow-hidden whitespace-nowrap overflow-ellipsis">{shows.show.language}</h4>
      <h4 className="text-sm mb-2 overflow-hidden whitespace-nowrap overflow-ellipsis">{shows.show.image}</h4>
      <h4 className="text-sm mb-2 overflow-hidden whitespace-nowrap overflow-ellipsis">{avgRating} Stars</h4>
      <h4 className="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis">{sla && sla.deliveryTime} minutes</h4>
    </div>
  );
};





export default ShowCard;
