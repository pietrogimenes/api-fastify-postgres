import { redis } from '../redis/client'

interface getSubscriberInvitesCountParams {
  subscriberId: string
}

export async function getSubscriberInvitesCount({
  subscriberId,
}: getSubscriberInvitesCountParams) {
  //   await redis.hincrby('referral:acess-count', subscriberId, 1)

  const count = await redis.zscore('referral:ranking', subscriberId)

  return { count: count ? Number.parseInt(count) : 0 }
}
