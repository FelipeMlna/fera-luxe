// Initial seed data
const defaultReviews = [

];

// Load from LocalStorage or use defaults
export let reviews = JSON.parse(localStorage.getItem('reviews')) || defaultReviews;

export const addReview = (newReview) => {
    reviews.unshift(newReview); // Add to top
    localStorage.setItem('reviews', JSON.stringify(reviews));
};

export const getReviewsByProduct = (productId) => {
    return reviews.filter(r => r.productId === productId);
};

export const getGeneralReviews = () => {
    return reviews.filter(r => r.productId === 'general');
};
