export const seo = ({
  title,
  description,
  keywords,
  image,
}: {
  title: string
  description?: string
  image?: string
  keywords?: string
}) => {
  const tags = [
    { title },
    { name: 'description', content: description },
    { name: 'keywords', content: keywords },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:creator', content: '@stephenMainda' },
    { name: 'twitter:site', content: '@stephenMainda' },
    { name: 'og:type', content: 'website' },
    { name: 'og:title', content: title },
    { name: 'og:description', content: description },
    { name: 'twitter:image', content: image || 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1200&h=630&auto=format&fit=crop' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'og:image', content: image || 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1200&h=630&auto=format&fit=crop' },
  ]

  return tags
}
