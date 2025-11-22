import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

import dotenv from 'dotenv';


// the hien restriction ve so luong request tu client den server trong mot khoang thoi gian
dotenv.config();

// Create a new ratelimiter, that allows 100 requests per 60 seconds
const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(100, "60s"),
})

export default ratelimit; 