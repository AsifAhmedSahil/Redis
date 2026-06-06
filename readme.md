### Foundation of Redis

In memory database - store data in key value pair with time to live(TTL)
not persistant data kore 
redis load state to the ram so it is lighting fast
some db can store values in memory
truth source always db

diagram 1

user bere gele node server bere gese but bottolneck hit hoise db te , bcoz db er time lagtese middle e redis ashe, cache miss hole redis mongo theke query kore then redis e write kore then server k data dei cache hit hole redis direct fast dia dei response.

usases of redis:
1/cache
2/session store - user login or logout / active-inactive
3/otp store - otp+ttl=2 min
4/rate limit - record otp or login record - ip, count : 5, ttl: 10 min , user cooldown
5/job queue: 

redis is not a solution for every problem***

if remove read pressure then redis
if temp data expire
if shared counter exist
background jobs 

