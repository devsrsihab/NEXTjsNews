
export const getSingleNews = async (id) => {
    const res = await fetch(`https://the-news-portal-server.vercel.app/news/${id}`)
    const data = await res.json()
    return data
}