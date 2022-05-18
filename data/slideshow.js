
const transformUrl = 
`https://res.cloudinary.com/tradetalksvideos/video/upload/w_1280,h_720/w_1280,h_720,
l_v1652785301:video-branding:user-images:{IMAGE_ID},fl_splice,du_5/so_0,fl_layer_apply/w_1280,h_720,
l_v1652785301:video-branding:user-images:{IMAGE_ID},fl_splice,du_5/fl_layer_apply/
v1652525448/video-branding/videos/{VIDEO_ID}`

export default class Slideshow {

  image
  video
  outputVideo
  outputVideoUrl

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
    let imagePublicIDEscaped = this.image.public_id.replace("/", ':')
    // make a cloudinary lazy GET video transform URL
    let videoTransformUrl = 
      transformUrl.replace('{IMAGE_ID}', imagePublicIDEscaped)
                  .replace('{VIDEO_ID}', this.video.public_id)

    console.log(videoTransformUrl)

    // save the output video url
    this.outputVideoUrl = transformUrl

    // testing: prefetch the video
    let response = await fetch(videoTransformUrl)

    if (!response.ok) {
      throw new Error('Slideshow generator failed')
    }

    console.log('Slideshow created.', result)
  }
}