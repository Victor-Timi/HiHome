import EmptyState from "../components/EmptyState";

import getCurrentUser from "../actions/getCurrentUser";
import getListings from "../actions/getListings";
import PropertiesClient from "./PropertiesClient";

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please Login" />;
  }
  const listings = await getListings({
    userId: currentUser.id,
  });
  if (listings.length === 0) {
    return (
      <EmptyState
        title="No properties found"
        subtitle="Looks like you havent reserved any properties"
      />
    );
  }

  return (
    // @ts-ignore
    <PropertiesClient listings={listings} currentUser={currentUser} />
  );
};

export default PropertiesPage;
