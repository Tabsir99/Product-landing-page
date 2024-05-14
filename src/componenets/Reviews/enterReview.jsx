

const ReviewForm = ({ handleSubmit, name, review, stars, handleNameChange, handleReviewChange}) => {


  return (

      <form onSubmit={handleSubmit} className='review-form-container' name="review-form">

        <label className="input-label">
          Name:
          <input type="text" value={name} onChange={handleNameChange} required />
        </label>

        <label className="input-label">
          Review:
          <textarea value={review} onChange={handleReviewChange} required />
        </label>

        <label className="input-label special">
       <span> Rating: </span> <div className="rating-container">
            {stars}
          </div>

        </label>

        <button type="submit" className="submit-button">Submit</button>
      </form>
  );
};

export default ReviewForm;
