

import { useState, useEffect, useRef, useCallback } from 'react';
import { 
  DocumentAddIcon as AddIcon,
  FilmIcon as GenerateVideoIcon, 
  DownloadIcon as VideoDownloadIcon, 
  PlayIcon as PlayVideoIcon,
  CloudUploadIcon as VideoUploadIcon,
} from '@heroicons/react/solid'
import Video from '../data/video';
import Image from '../data/image';
import Slideshow from '../data/slideshow';
import { useDropzone } from 'react-dropzone'


const ImageStatus = {
  STANDBY: "standby",
  LOADING: "uploading image",
  COMPLETE: "complete",
  ERROR: "error",
}

const SlideshowStatus = {
  STANDBY: "standby",
  LOADING: "loading video",
  COMPLETE: "complete",
  ERROR: "error",
}

const OPTIONS = {
  animateScrollToStep2: false,
  animateScrollToStep3: true,
  animateScrollToStep4: true,
}

export default function Example() {

  const [videos, setVideos] = useState([])
  const [isPlayButtonClicked, setIsPlayButtonClicked] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [imageStatus, setImageStatus] = useState(ImageStatus.STANDBY)
  const [selectedImage, setSelectedImage] = useState(null)
  const [isSecondImageSelected, setIsSecondImageSelected] = useState(false)
  const [secondImageStatus, setSecondImageStatus] = useState(ImageStatus.STANDBY)
  const [secondSelectedImage, setSecondSelectedImage] = useState(null)
  const [slideshowStatus, setSlideshowStatus] = useState(SlideshowStatus.STANDBY)
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [slideshow, setSlideshow] = useState(null)

  const videoRef = useRef()
  const step2Ref = useRef()
  const step3Ref = useRef()  
  const step4Ref = useRef()


  // File dropzone stuff
  const onDrop = useCallback(acceptedFiles => {
     console.log('First image dropped')
    // Do something with the files
    let file = acceptedFiles[0]
    if (file) {
      handleImageUpload(acceptedFiles[0])
    }
  }, [])

  const { 
    getRootProps,
    getInputProps, 
    isDragActive
  } = useDropzone({ onDrop })

  // Second dropzone
  const onSecondDrop = useCallback(acceptedFiles => {
    console.log('Second image dropped', acceptedFiles)
    // Do something with the files
    let file = acceptedFiles[0]
    if (file) {
      handleSecondImageUpload(acceptedFiles[0])
    }
  }, [])

  const { 
    getRootProps: getSecondRootProps, 
    getInputProps: getSecondInputProps, 
    isDragActive: isSecondDragActive 
  } = useDropzone({ onDrop: onSecondDrop })

  const fetchVideos = async () => {
    // get the videos from cloudinary
    let videos = await Video.fetchVideos()
    console.log(videos)
    setVideos(videos)
  }

  // on load, get the videos
  useEffect(() => { 
    console.log("Page load")
    // fetch the video list
    fetchVideos()
  }, [])

  const handlePlayButtonClick = () => { 
    setIsPlayButtonClicked(true)
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  const handleVideoSelect = (video={}) => {
    console.log(`Selected video ${video.public_id}`)
    setSelectedVideo(video)

    if (currentStep < 2) {
      setCurrentStep(2)

      if (OPTIONS.animateScrollToStep2) {
        // the first time we go to step 2, animate it
        let step2 = step2Ref.current
        if (step2) {
          setTimeout(() => {
            step2.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            })
          }, 300)
        }
      }
    }
  }

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
      // highlight the next step
      if (currentStep < 3) {
        setCurrentStep(3)

        if (OPTIONS.animateScrollToStep3) {
          // the first time we go to step 3, animate it
          let step3 = step3Ref.current
          setTimeout(() => {
            if (step3) {
              step3.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              })
            }
          }, 500)
        }
      }
    } catch (error) {
      console.error(error)
      setImageStatus(ImageStatus.ERROR)
    }
  }

  const handleSecondImageUpload = async (file) => {
    console.log(`Uploading second image: ${file.name}`)
    // set loading indicator
    setSecondImageStatus(ImageStatus.LOADING)

    let image = new Image(file)
    // show image preview
    setSecondSelectedImage(image)

    // actually upload the image
    try {
      await image.upload()
      // mark the image as uploaded
      setSecondImageStatus(ImageStatus.COMPLETE)
      // highlight the next step
      if (currentStep < 3) {
        setCurrentStep(3)

        if (OPTIONS.animateScrollToStep3) {
          // the first time we go to step 3, animate it
          let step3 = step3Ref.current
          setTimeout(() => {
            if (step3) {
              step3.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              })
            }
          }, 500)
        }
      }
    } catch (error) {
      console.error(error)
      setSecondImageStatus(ImageStatus.ERROR)
    }
  }

  const handleSecondImageUploadSelected = async () => {
    setIsSecondImageSelected(true)
  }

  const handleSlideshowGenerate = async () => { 
    setSlideshowStatus(SlideshowStatus.LOADING)
    
    let slideshow = new Slideshow(selectedImage, selectedVideo, secondSelectedImage)
    console.log(`Uploading slideshow: ${slideshow}`)
    console.log('second image', secondSelectedImage)

    try {
      await slideshow.upload()
      setSlideshow(slideshow)
      setSlideshowStatus(SlideshowStatus.COMPLETE)
    } catch (error) {
      console.error(error)
      setSlideshowStatus(SlideshowStatus.ERROR)
    }
  }

  const handleSlideshowDownload = () => {
    let slideshowDownloadUrl = slideshow && slideshow.outputVideoUrlDownload
    console.log(`Downloading slideshow ${slideshow.outputVideoUrlDownload}`)
    window.open(slideshowDownloadUrl)

    // highlight step 4
    setCurrentStep(4)

    // scroll to next step
    if (OPTIONS.animateScrollToStep4) {
      let step4 = step4Ref.current
      setTimeout(() => {
        if (step4) {
          step4.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
          })
        }
      }, 10)
    }
  }

  const handleSlideshowPreview = () => {
    let slideshowPreviewUrl = slideshow && slideshow.outputVideoUrl
    console.log(`Previewing slideshow ${slideshow.outputVideoUrlPreview}`)
    window.open(slideshowPreviewUrl)
  }

  // quick cheat for highlighting selected video
  const selectedVideoYouTubeUrl = selectedVideo && selectedVideo.youtubeUrl

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
      <div className="relative pt-6 pb-16 sm:pb-40">
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
                  onClick={handlePlayButtonClick}
                >
                  <span className="sr-only">Watch our video to learn more</span>
                  <video
                    className="w-full"
                    src="https://res.cloudinary.com/tradetalksvideos/video/upload/w_1280,h_720/w_1280,h_720,l_video-branding:user-images:zcads46msezfwcqqu5kv,fl_splice,du_5/so_0,fl_layer_apply/w_1280,h_720,l_video-branding:user-images:zcads46msezfwcqqu5kv,fl_splice,du_5/fl_layer_apply/video-branding/videos/xwuW0IB20JU"
                    alt=""
                    ref={videoRef}
                    controls={ isPlayButtonClicked }
                  />
                  <div 
                    className={`
                      absolute inset-0 w-full h-full flex items-center justify-center
                      ${isPlayButtonClicked && "invisible"}
                    `} 
                    aria-hidden="true"
                  >
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
  
      {/* Step 1: Choose your video template */}
      <div 
        className="mx-auto max-w-7xl pt-6 pb-16"
      >
        <span 
          className={`block mb-4 text-2xl font-bold text-gray-800
            ${ currentStep === 1 && "underline decoration-orange-500 underline-offset-4 decoration-4" }
          `}
        >
          Step 1: Choose a video
        </span>
        <span className="block mb-8 text-md text-gray-700">
          Click the title below a video to select it. This is the template video that your brand image will be added to. 
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
                onClick={() => handleVideoSelect(video)}
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
      <div className="mx-auto max-w-7xl pt-6 pb-24 lg:pb-16" ref={step2Ref}>
        <span className={`block mb-4 text-2xl font-bold text-gray-800
            ${currentStep === 2 && "underline decoration-orange-500 underline-offset-4 decoration-4"}
        `}>
          Step 2: Upload your branded slide or image
        </span>
        <span className="block mb-8 text-md text-gray-700">
          A 1920x1080 image (the default size of a Powerpoint slide or widescreen video) is recommended. 
          This is the slide that will be added to the video beginning and end. The slide will show for 5 seconds before the TradeTalks video begins, 
          and again for 5 seconds after the end of the video. Here is a quick explanation of <a href="https://www.youtube.com/watch?v=e5wkgvn7IWg" target="_blank" className="text-blue-500 underline" rel="noreferrer">how to export a Powerpoint slide to image format</a>.
        </span>
        { imageStatus === ImageStatus.STANDBY && (
          <div
            className={`\
              mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md border-gray-300\
              ${isDragActive && "bg-orange-100"}`}
            {...getRootProps()}
          >
            <div className="space-y-1 text-center">
              <svg className="mx-auto h-12 w-12 text-gray-400"
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
                  className="relative cursor-pointer rounded-md font-medium text-orange-600 hover:text-orange-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-orange-500"
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
                    {...getInputProps()}
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
          <div className="ml-8">
            <svg role="status" className="w-8 h-8 text-gray-200 animate-spin dark:text-lightorange-600 fill-orange-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
          </div>
        )}
        {imageStatus === ImageStatus.COMPLETE && (
          <img 
            src={selectedImage.url} 
            alt="Selected image" 
            className="w-auto h-auto max-w-full md:max-w-xl"/>
        )}
        {imageStatus === ImageStatus.ERROR && (
          "Error"
        )}

        
        <span className="block mt-8 mb-4 text-md text-gray-700">
          {!isSecondImageSelected ? "Want to use a different slide for the end of the video?"
          : "You can optionally upload a second slide to be shown at the end of the video."}
        </span>
        {!isSecondImageSelected && (
          <button
            type="button"
            className="inline-flex items-center px-2 py-2 border border-orange-600 shadow-sm text-base font-medium rounded-md text-orange-600 bg-white-600 hover:text-orange-700 hover:border-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            onClick={handleSecondImageUploadSelected}
          >
            <AddIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
            Add ending slide
          </button>
        )}
        {isSecondImageSelected && secondImageStatus === ImageStatus.STANDBY && (
          <div
            className={`\
              mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md border-gray-300\
              ${isSecondDragActive && "bg-orange-100"}`}
            {...getSecondRootProps()}
          >
            <div className="space-y-1 text-center">
              <svg className="mx-auto h-12 w-12 text-gray-400"
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
                  className="relative cursor-pointer rounded-md font-medium text-orange-600 hover:text-orange-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-orange-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    type="file"
                    name="brand-image-second"
                    accept="image/*"
                    onChange={(event) => {
                      handleSecondImageUpload(event.target.files[0]);
                    }}
                    className="sr-only"
                    {...getInputProps()}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-center text-gray-500">1920x1080 (Powerpoint slide size) is best</p>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        )}
        {isSecondImageSelected && secondImageStatus === ImageStatus.LOADING && (
          <div className="ml-8">
            <svg role="status" className="w-8 h-8 text-gray-200 animate-spin dark:text-lightorange-600 fill-orange-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
          </div>
        )}
        {isSecondImageSelected && secondImageStatus === ImageStatus.COMPLETE && (
          <img
            src={secondSelectedImage.url}
            alt="Selected image"
            className="w-auto h-auto max-w-full md:max-w-xl" />
        )}
        {isSecondImageSelected && secondImageStatus === ImageStatus.ERROR && (
          "Error"
        )}
        
      </div>

      {/* Step 3: Generate your video */}
      <div className="mx-auto max-w-7xl pt-6 pb-24" ref={step3Ref}>
        <span
          className={`block mb-4 text-2xl font-bold text-gray-800
            ${currentStep === 3 && "underline decoration-orange-500 underline-offset-4 decoration-4"}
          `}
        >
          {slideshowStatus === SlideshowStatus.COMPLETE ? "Step 3: Download your video" : "Step 3: Create your video"}
        </span>
        <span className="block mb-8 text-md text-gray-700 max-w-5xl">
          {currentStep < 3 && "To generate a new video, first select a template video and upload your brand image."}
          {currentStep === 3 &&
            slideshowStatus === SlideshowStatus.STANDBY ? "Click the button below to combine your selected video and uploaded image into a new branded video."
            : slideshowStatus === SlideshowStatus.LOADING ? "Hang tight."
            : slideshowStatus === SlideshowStatus.COMPLETE ? "Download or preview your branded video. Note that the download will open in a new window,\
            and might take up to a minute to process before the download begins. The preview will also open in a new window." : ""
          }
        </span>
        {slideshowStatus === SlideshowStatus.STANDBY && (
          <button
            type="button"
            className="inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white 
            bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500
            disabled:bg-orange-200"
            disabled={ !selectedImage || !selectedVideo}
            onClick={() => { handleSlideshowGenerate() }}
          >
            <GenerateVideoIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
            Generate video
          </button>)
        }
        {slideshowStatus === SlideshowStatus.LOADING &&
          (<button
            type="button"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-orange-700 bg-orange-100 hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Generating video...
          </button>)
        }
        {slideshowStatus === SlideshowStatus.COMPLETE && (
          <div className="inline-flex">
            <button
              type="button"
              className="inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              onClick={handleSlideshowDownload}
            >
              <VideoDownloadIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
              Download video
            </button>
            <button
              type="button"
              className="ml-4 inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-orange-700 bg-orange-100 hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              onClick={handleSlideshowPreview}
            >
              <PlayVideoIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
              Preview video
            </button>
          </div>
          
        )}
        {slideshowStatus === SlideshowStatus.ERROR && (
          "Error"
        )}
      </div>

      {/* Step 4: Share your video */}
      {currentStep === 4 && (
        <div className="mx-auto max-w-7xl pt-2 pb-48" ref={step4Ref}>
          <span
            className={`block mb-4 text-2xl font-bold text-gray-800
            ${currentStep === 4 && "underline decoration-orange-500 underline-offset-4 decoration-4"}
          `}
          >
            Step 4: Share your video
          </span>
          <span className="block mb-8 text-md text-gray-700 max-w-5xl">
            Your video is in mp4 format, and can easily be uploaded to YouTube, Instagram, or any other video sharing service.
          </span>
          <div className="flex flex-col items-start">
            <a 
              href="https://youtube.com/upload"
              target="_blank"
              rel="noreferrer"
              type="button"
              className="inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <VideoUploadIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
              Upload to YouTube
            </a>
            <a 
              href="https://instagram.com/accounts/login/"
              target="_blank"
              rel="noreferrer"
              type="button"
              className="mt-4 inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <VideoUploadIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
              Upload to Instagram
            </a>
            <a
              href="https://twitter.com/compose/tweet"
              target="_blank"
              rel="noreferrer"
              type="button"
              className="mt-4 inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-400 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <VideoUploadIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
              Upload to Twitter
            </a>
          </div>
          
        </div>
      )}
    </div>
  )
}

