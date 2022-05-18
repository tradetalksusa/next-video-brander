
const transformUrl = 
`https://res.cloudinary.com/tradetalksvideos/video/upload/w_1280,h_720/w_1280,h_720,
l_{IMAGE_ID},fl_splice,du_5/so_0,fl_layer_apply/w_1280,h_720,
l_{IMAGE_ID},fl_splice,du_5/fl_layer_apply/{VIDEO_ID}`

export default class Slideshow {

  image
  video
  outputVideoUrl
  outputVideoUrlDownload

  constructor(image, video) {
    this.image = image
    this.video = video
  }

  async upload() {
    if (!this.image || !this.video) {
      console.log('image', this.image, 'video', this.video)
      throw new Error('Missing image or video')
    }

    const formData = new FormData();
    formData.append('file', this.image);
    formData.append('folder', 'video-branding/user-images');
    formData.append('upload_preset', 'video-branding');
    formData.append('cloud_name', 'tradetalksvideos');

    console.log('Generating slideshow...')

    // cloudinary requires the transform elements' url / character to be escaped
    let imagePublicIDEscaped = this.image.public_id.replaceAll("/", ':')
    // make a cloudinary lazy GET video transform URL
    let videoTransformUrl = 
      transformUrl.replaceAll('{IMAGE_ID}', imagePublicIDEscaped)
                  .replace('{VIDEO_ID}', this.video.public_id)

    console.log(videoTransformUrl)

    // save the output video url
    this.outputVideoUrl = transformUrl

    // testing: prefetch the video
    let response = await fetch(videoTransformUrl)

    if (!response.ok) {
      throw new Error('Slideshow generator failed')
    }

    console.log('Slideshow generated.', response)

    this.outputVideoUrl = response.url
    this.outputVideoUrlDownload = this.outputVideoUrl.replace("upload/", "upload/fl_attachment/")

  }
}