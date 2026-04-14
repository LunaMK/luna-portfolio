export const useSeo = ({
  title,
  description
}: {
  title: string
  description: string
}) => {
  useSeoMeta({
    title,
    ogTitle: title,
    description,
    ogDescription: description,
    ogType: 'website'
  })
}
