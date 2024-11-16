
const FeedBack = ({ feedbackData }) => {
    console.log(feedbackData)
    return (
        <div className="grid grid-cols-4 gap-5">
            {
                feedbackData.map(feed => (
                <div className="card bg-base-100  shadow-xl">
                    <div className="card-body">
                        <div>
                            <img src={feed.userImg} className="w-10 h-10 rounded-full" alt="" />
                        <h2 className="card-title">{feed.name}</h2>
                        </div>
                        <p>{feed.review}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                ))
            }
        </div>
    );
};

export default FeedBack;