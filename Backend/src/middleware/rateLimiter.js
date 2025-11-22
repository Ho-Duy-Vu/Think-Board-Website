import ratelimit from "../config/upstash.js";  

// ty le gioi han so luong request tu client den server trong mot khoang thoi gian
const rateLimiter = async (req , res, next) => {
    try {
        const {success} = await ratelimit.limit("my-rate-limit-key");

        if(!success){
            return res.status(429).json({
                message: "Too many requests, please try again later."
            })
        }

        next();
    } catch (error) {
        console.log("Rate limiter error:", error);
        next(error);
    }
}

export default rateLimiter;