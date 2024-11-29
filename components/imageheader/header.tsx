import { ImageHeaderText } from '@/type';

function ImageHeader({ name, name1 }: ImageHeaderText) {
  return (
    <div
      className="relative h-[319px] md:h-[455px] bg-no-repeat bg-cover bg-center py-[27.5px] lg:py-14 lg:px-97"
      style={{
        backgroundImage: `url('/images/mainPhoto.png')`, // Replace with your image URL
        opacity: '90%',
      }}
    >
      <div className="absolute top-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-[rgba(28,29,32,0.8)]"></div>
      <div className="absolute bottom-[70.5px] left-[5%] w-full">
        <h1 className="flex flex-col lg:flex-row text-white font-normal text-[40px] leading-[40px] lg:text-[80px] lg:leading-[80px] relative">
          <span>{name}</span>
          <span>{name1}</span>
        </h1>
      </div>
    </div>
  );
}

export default ImageHeader;
