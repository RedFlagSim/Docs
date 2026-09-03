export type PromoVideo = {
  youtubeId: string
  title: string
  startSeconds?: number
}

// Add new videos here in the order they should appear below the main player.
export const promoVideos: PromoVideo[] = [
  {
    youtubeId: 'cDpfjDLAHrA',
    title: 'RedFlagSim Promo Video'
  },
  {
    youtubeId: 'TGc3tGL3WNg',
    title: 'How to engage multiple targets'
  },
  {
    youtubeId: 'bbIyZaJRFd8',
    title: 'AAR: Screen recordings of gameplay and game replays.'
  },
  {
    youtubeId: 'PqXp125oUaw',
    title: 'My Flight livery may look badass, but we still got beaten.'
  },
  {
    youtubeId: '8mI5puM9DeY',
    title: 'Welcome, JASDF elites! They have the best-looking F-15 liveries in the world.',
    startSeconds: 200
  }
]
