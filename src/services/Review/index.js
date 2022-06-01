const isAlreadyReviewed = (userReviews, hostId) => {
  const found = userReviews.find((review) => review.accueillant_id === hostId);
  if (found) {
    return true;
  }
  return false;
};

export default isAlreadyReviewed;
