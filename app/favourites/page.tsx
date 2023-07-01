import EmptyState from "../components/EmptyState";
import getFavouriteListings from "../actions/getFavouriteListings";
import getCurrentUser from "../actions/getCurrentUser";
import FavouriteClient from "./FavouriteClient";

const ListingPage = async () => {
  const listings = await getFavouriteListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <EmptyState
        title="No Favourites found"
        subtitle="Looks like you have no favourite listings."
      ></EmptyState>
    );
  }

  return <FavouriteClient listings={listings} currentUser={currentUser} />;
};

export default ListingPage;
