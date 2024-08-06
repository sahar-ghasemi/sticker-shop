import { RiEmojiStickerLine } from "react-icons/ri";

const Header=()=>{
    return(
    <>
        <div className="flex flex-col justify-center mt-5">
        <h1 className="leading-relaxed font-extrabold text-3xl text-center py-2 sm:py-4 mx-4 flex items-center">
          <RiEmojiStickerLine size='2em' className="text-rose-500 text-opacity-70 mr-3 text-primary"/>
          Buy the most popular stickers to personalize your world at our Sticker Shop
        </h1>
        <p className="text-lg text-center mt-2 mx-4">
      High-quality, unique designs to make your style stand out!
      </p>
      </div>
     
      </>
    )
}
export default Header;