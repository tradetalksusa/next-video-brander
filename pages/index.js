

import { useState, useEffect } from 'react';
import { FilmIcon as GenerateVideoIcon, EmojiHappyIcon as EditingVideoIcon, DownloadIcon as VideoDownloadIcon } from '@heroicons/react/solid'
import Video from '../data/video';
import Image from '../data/image';
import Slideshow from '../data/slideshow';

const ImageStatus = {
  STANDBY: "standby",
  LOADING: "uploading image",
  COMPLETE: "complete",
  ERROR: "error",
}

const VideoStatus = {
  STANDBY: "standby",
  LOADING: "loading video",
  COMPLETE: "complete",
  ERROR: "error",
}

export default function Example() {

  const [isDragging, setIsDragging] = useState(false);
  const [imageStatus, setImageStatus] = useState(ImageStatus.STANDBY)
  const [selectedImage, setSelectedImage] = useState(null);
  const [videoStatus, setVideoStatus] = useState(VideoStatus.STANDBY)
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, setVideos] = useState([])

  const selectedVideoYouTubeUrl = selectedVideo && selectedVideo.youtubeUrl

  const fetchVideos = async () => {
    // get the videos from cloudinary
    let videos = await Video.fetchVideos()
    console.log(videos)
    setVideos(videos)
  }

  // on load, get the videos
  useEffect(() => { 
    console.log("Page load")
    fetchVideos()
  }, [])

  const handleImageUpload = async (file) => {
    console.log(`Uploading image: ${file.name}`)
    // set loading indicator
    setImageStatus(ImageStatus.LOADING)

    let image = new Image(file)
    // show image preview
    setSelectedImage(image)

    // actually upload the image
    try {
      await image.upload()
      // mark the image as uploaded
      setImageStatus(ImageStatus.COMPLETE)
    } catch (error) {
      console.error(error)
      setImageStatus(ImageStatus.ERROR)
    }
  }

  const handleGenerateVideo = async () => { 
    setVideoStatus(VideoStatus.LOADING)
    
    let slideshow = new Slideshow(selectedImage, selectedVideo)
    console.log(`Uploading slideshow: ${slideshow}`)

    try {
      await slideshow.upload()
      setVideoStatus(VideoStatus.COMPLETE)
    } catch (error) {
      console.error(error)
      setVideoStatus(VideoStatus.ERROR)
    }
  }

  return (
    // Container
    <div className="bg-white overflow-hidden">

      {/* Fancy dots */}
      <div className="hidden lg:block lg:absolute lg:inset-0 overflow-hidden" aria-hidden="true" >
        <svg
          className="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8"
          width={640}
          height={640}
          fill="none"
          viewBox="0 0 640 640"
        >
          <defs>
            <pattern
              id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
              x={118}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect y={72} width={640} height={640} className="text-gray-50" fill="currentColor" />
          <rect x={118} width={404} height={640} fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)" />
        </svg>
      </div>

      {/* Hero */}
      <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1>
                <span className="block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
                 TradeTalks Video Branding Editor
                </span>
                <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                  <span className="block text-gray-900">Spread awareness</span>
                  <span className="block text-gray-900">with your brand</span>
                  <span className="block text-orange-600">and our videos</span>
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                TradeTalks creates videos to spread awareness of skilled trades and training opportunities, 
                and now you can add your brand to our videos to help spread the word. 
              </p>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <button
                  type="button"
                  className="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  <span className="sr-only">Watch our video to learn more</span>
                  <img
                    className="w-full"
                    src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    alt=""
                  />
                  <div className="absolute inset-0 w-full h-full flex items-center justify-center" aria-hidden="true">
                    <svg className="h-20 w-20 text-orange-500" fill="currentColor" viewBox="0 0 84 84">
                      <circle opacity="0.9" cx={42} cy={42} r={42} fill="white" />
                      <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Step 1: Choose your video */}
      <div className="mx-auto max-w-7xl pt-6 pb-16 sm:pb-24 lg:pb-32">
        <span className="block  mb-8 text-2xl font-bold text-gray-700">
          Step 1: Choose your video
        </span>
        <ul role="list" className="mx-auto grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {videos.map((video) => (
            <li key={video.youtubeUrl} className="relative">
              <div 
                tabIndex={0} 
                className={`m-2 p-2 rounded-lg cursor-pointer
                  ring-offset-4
                  ${ selectedVideoYouTubeUrl === video.youtubeUrl ? "ring-2 ring-orange-500 hover:ring-orange-500" : "hover:ring-2 ring-gray-300"}
                `}
                onClick={() => setSelectedVideo(video)}
              >
                <div className="relative pb-[56.25%] pt-px-30 h-0 group rounded-lg overflow-hidden">
                  <iframe className="absolute top-0 left-0 w-full h-full" src={`https://www.youtube.com/embed/${video.ID}`} title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen controls={0}></iframe>
                </div>
                <p className="mt-2 block max-w-full break-all text-sm font-medium text-darkgray-900">{video.title}</p>
                <p className="block text-sm font-medium text-darkgray-500">{video.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Step 2: Upload your brand image */}
      <div className="mx-auto max-w-7xl pt-6 pb-16 sm:pb-24 lg:pb-32">
        <span className="block mb-8 text-2xl font-bold text-gray-700">
          Step 2: Upload your brand image
        </span>
        { imageStatus === ImageStatus.STANDBY && (
          <div
            className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md
            border-${isDragging ? 'orange' : 'gray'}-300`}>
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex justify-center text-center text-sm text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-orange-600 hover:text-orange-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-orange-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    type="file"
                    name="brand-image"
                    accept="image/*"
                    onChange={(event) => {
                      handleImageUpload(event.target.files[0]);
                    }}
                    className="sr-only"
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-center text-gray-500">1920x1080 (Powerpoint slide size) is best</p>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        )}
        {imageStatus === ImageStatus.LOADING && (
          <svg role="status" className="w-8 h-8 text-gray-200 animate-spin dark:text-lightorange-600 fill-orange-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
        )}
        {imageStatus === ImageStatus.COMPLETE && (
          <img src={selectedImage.url} alt="Selected image" className="w-auto h-auto" />
        )}
        {imageStatus === ImageStatus.ERROR && (
          "Error"
        )}
      </div>

      {/* Step 3: Generate your video */}
      <div className="mx-auto max-w-7xl pt-6 pb-16 sm:pb-24 lg:pb-32">
        <span className="block mb-8 text-2xl font-bold text-gray-700">
          Step 3: Create your video
        </span>
        {videoStatus === VideoStatus.STANDBY && (
          <button
            type="button"
            className="inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            onClick={() => { handleGenerateVideo() }}
          >
            <GenerateVideoIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
            Generate video
          </button>)
        }
        {videoStatus === VideoStatus.LOADING &&
          (<button
            type="button"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-orange-700 bg-orange-100 hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Editing video...
          </button>)
        }
        {videoStatus === VideoStatus.COMPLETE && (
          <button
            type="button"
            className="inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            <VideoDownloadIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
            Download video
          </button>)
        }
        {videoStatus === VideoStatus.ERROR && (
          "Error"
        )}
      </div>

    </div>
  )
}

