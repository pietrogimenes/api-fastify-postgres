import { redis } from '../redis/client'

interface GetSubscriberinviteClicksParams {
  subscriberId: string
}

export async function getSubscriberInviteClicks({
  subscriberId,
}: GetSubscriberinviteClicksParams) {
  //   await redis.hincrby('referral:acess-count', subscriberId, 1)

  const count = await redis.hget('referral:access-count', subscriberId)

  return { count: count ? Number.parseInt(count) : 0 }
}
