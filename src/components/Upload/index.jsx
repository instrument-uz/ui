import SvgImage from "@/icons/SvgImage";
import Title from "../Title";
import ImageUploading from "react-images-uploading";
import { useState } from "react";
import cn from "clsx";
import SvgDelete from "@/icons/SvgDelete";

function Upload(props) {
  const [images, setImages] = useState([]);
  return (
    <>
      <div className={`pb-5 | fc ${images.length === 0 && "hidden"}`}>
        {images.map((img, index) => (
          <div
            className="h-28 mr-2 p-2 rounded-[15px] overflow-hidden border | relative group"
            onClick={() => {
              deleteImg(index);
            }}
            key={index}
          >
            <img src={img.data_url} alt="r-1" className="h-full object-cover" />
            <div className="absolute inset-0 bg-[#30A8F7] opacity-0 group-hover:opacity-90 cursor-pointer duration-300 | fcc">
              <p className="text-white z-50 opacity-100">
                <SvgDelete className="h-7" />
              </p>
            </div>
          </div>
        ))}
      </div>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={3}
        dataURLKey="data_url"
        class="hidden"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <div className={`${images.length === 3 && "hidden"}`}>
            <div
              className={cn({
                "py-7 | border-2 border-dashed | hover:border-[#30A8F7] fcc duration-300 rounded-[7px] cursor-pointer": true,
                "border-[#30A8F7]": isDragging,
              })}
              onClick={onImageUpload}
              {...dragProps}
            >
              <div className="fc flex-col">
                <SvgImage className="h-12" />
                <Title className="text-base font-semibold | pt-5">
                  Перетащите или
                  <a className="text-[#30A8F7] duration-300 pl-2">Щелкните</a>
                </Title>
              </div>
            </div>
          </div>
        )}
      </ImageUploading>
    </>
  );

  function deleteImg(params) {
    const filters = images.filter((img, index) => {
      return index !== params;
    });

    setImages(filters);
  }

  function onChange(imageList, addUpdateIndex) {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  }
}

export default Upload;
