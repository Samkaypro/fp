import galleryData from "@/data/photo-gallery.json"

export async function generateStaticParams() {
    return galleryData.albums.map((album) => ({
      albumId: album.id,
    }))
  }
  
