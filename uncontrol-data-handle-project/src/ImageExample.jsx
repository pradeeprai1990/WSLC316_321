import React, { useRef } from 'react'

export default function ImageExample() {
  let images=[
    "https://uptownskylla.in/wp-content/uploads/2019/10/05-Contener-No-3rd-06.jpg","https://uptownskylla.in/wp-content/uploads/2019/10/05-Contener-No-3rd-08.jpg","https://uptownskylla.in/wp-content/uploads/2019/10/05-Contener-No-3rd-10.jpg","https://uptownskylla.in/wp-content/uploads/2019/10/05-Contener-No-3rd-05.jpg"
  ]

  let mainImgRef=useRef()
  return (
    <div>
        <div className='imageOuter'>
          
              <img src={images[0]} alt="" ref={mainImgRef} />
              <div className='imgGallery'>
                {
                  images.map((src,index)=>{
                    return(
                      <div className='gallerYitems'>
                        <img src={src} onClick={()=>{
                            mainImgRef.current.src=images[index]
                        }}/>
                      </div>
                    )
                  })
                }
              
              </div>
        </div>
    </div>
  )
}
