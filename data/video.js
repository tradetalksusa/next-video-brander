
export default class Video {

  ID
  public_id
  title
  version
  format
  width
  height
  type
  created_at

  static staticVideoList = {
    "resources": [
      {
        "public_id": "video-branding/videos/s9JKWnCuWv4",
        "version": 1652525497,
        "format": "mp4",
        "width": 1280,
        "height": 720,
        "type": "upload",
        "created_at": "2022-05-14T10:51:37Z"
      },
      {
        "public_id": "video-branding/videos/xLlc0QrLgJ4",
        "version": 1652525495,
        "format": "mp4",
        "width": 1280,
        "height": 720,
        "type": "upload",
        "created_at": "2022-05-14T10:51:35Z"
      },
      {
        "public_id": "video-branding/videos/vxC2K2sTSLg",
        "version": 1652525484,
        "format": "mp4",
        "width": 1280,
        "height": 720,
        "type": "upload",
        "created_at": "2022-05-14T10:51:24Z"
      },
      {
        "public_id": "video-branding/videos/L_zEhqZJPwA",
        "version": 1652525480,
        "format": "mp4",
        "width": 640,
        "height": 360,
        "type": "upload",
        "created_at": "2022-05-14T10:51:20Z"
      },
      {
        "public_id": "video-branding/videos/_sFi9xcyslA",
        "version": 1652525471,
        "format": "mp4",
        "width": 1280,
        "height": 720,
        "type": "upload",
        "created_at": "2022-05-14T10:51:11Z"
      },
      {
        "public_id": "video-branding/videos/xwuW0IB20JU",
        "version": 1652525448,
        "format": "mp4",
        "width": 1280,
        "height": 720,
        "type": "upload",
        "created_at": "2022-05-14T10:50:48Z"
      },
      {
        "public_id": "video-branding/videos/evafrp_QEkY",
        "version": 1652525447,
        "format": "mp4",
        "width": 1280,
        "height": 720,
        "type": "upload",
        "created_at": "2022-05-14T10:50:47Z"
      },
      {
        "public_id": "video-branding/videos/mvpHFSPCh7I",
        "version": 1652525444,
        "format": "mp4",
        "width": 1280,
        "height": 720,
        "type": "upload",
        "created_at": "2022-05-14T10:50:44Z"
      },
      {
        "public_id": "video-branding/videos/_2MDazO7jt4",
        "version": 1652525439,
        "format": "mp4",
        "width": 1280,
        "height": 720,
        "type": "upload",
        "created_at": "2022-05-14T10:50:39Z"
      },
      {
        "public_id": "video-branding/videos/ojx0Ilr-5pY",
        "version": 1652525428,
        "format": "mp4",
        "width": 640,
        "height": 360,
        "type": "upload",
        "created_at": "2022-05-14T10:50:28Z"
      },
      {
        "public_id": "video-branding/videos/pfGAOJdO3UA",
        "version": 1652525421,
        "format": "mp4",
        "width": 1280,
        "height": 720,
        "type": "upload",
        "created_at": "2022-05-14T10:50:21Z"
      },
      {
        "public_id": "video-branding/videos/zAeF2GNEpSI",
        "version": 1652525415,
        "format": "mp4",
        "width": 640,
        "height": 360,
        "type": "upload",
        "created_at": "2022-05-14T10:50:15Z"
      },
      {
        "public_id": "video-branding/videos/qszF7cYJbCA",
        "version": 1652525410,
        "format": "mp4",
        "width": 640,
        "height": 360,
        "type": "upload",
        "created_at": "2022-05-14T10:50:10Z"
      },
      {
        "public_id": "video-branding/videos/iTrvRBmP1GY",
        "version": 1652525407,
        "format": "mp4",
        "width": 640,
        "height": 360,
        "type": "upload",
        "created_at": "2022-05-14T10:50:07Z"
      },
      {
        "public_id": "video-branding/videos/TsFu_FEGVi0",
        "version": 1652525407,
        "format": "mp4",
        "width": 640,
        "height": 360,
        "type": "upload",
        "created_at": "2022-05-14T10:50:07Z"
      },
      {
        "public_id": "video-branding/videos/78CtMRsFhQY",
        "version": 1652525407,
        "format": "mp4",
        "width": 640,
        "height": 360,
        "type": "upload",
        "created_at": "2022-05-14T10:50:07Z"
      }
    ],
    "updated_at": "2022-05-17T00:17:22Z"
  }

  constructor(videoData = {}) {
    Object.assign(this, videoData)
    let videoID = videoData.public_id || ""
    // grab the last part of the url for the ID
    this.ID = videoID.split('/').filter(e => e).pop()
    // create a youtube url
    this.youtubeUrl = `https://www.youtube.com/watch?v=${this.ID}`
    // try to grab the title
    try {
      this.title = videoData.context.custom.caption
    } catch (error) {
      console.error("Couldn't parse video title")
      console.log(videoData)
    }
  }

  static async fetchVideos(options={ static: false }) {

    let videoList = this.staticVideoList.resources

    // if we should fetch a live list of videos from the server,
    if (!options.static) {
      try {
        // grab the videos by the 'brandable' tag on Cloudinary
        let videoListResponse = await fetch(`https://res.cloudinary.com/tradetalksvideos/video/list/brandable.json`, { cache: "no-cache" })
        let videoListResult = await videoListResponse.json()
        videoList = videoListResult.resources
      } catch (error) {
        console.log(error)
        // if there's an error, just fall back to the static video list
      }
    }

    let videos = videoList.map(videoData => new Video(videoData) )
    return videos
  }
}


