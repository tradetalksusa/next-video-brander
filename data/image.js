
export default class Image {

  file
  url

  constructor(file) {
    console.log('constructing')
    this.file = file
    console.log('file, ', file)
  }

  async upload() {

    if (!this.file) {
      throw new Error('Nothing to upload dude')
    }

    const formData = new FormData();
    formData.append('file', this.file);
    formData.append('folder', 'video-branding/user-images');
    formData.append('upload_preset', 'video-branding');
    formData.append('cloud_name', 'tradetalksvideos');

    console.log('Uploading image...')

    let response = await fetch('https://api.cloudinary.com/v1_1/tradetalksvideos/image/upload', {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) {
      throw new Error('Image upload failed')
    }

    let result = await response.json()
    this.url = result.secure_url || result.url

    console.log('Image uploaded.', result)

  }
}