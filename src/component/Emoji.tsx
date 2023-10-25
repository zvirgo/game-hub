import bullsEye from "../assets/resource/Emojis/bulls-eye.webp";
import meh from "../assets/resource/Emojis/meh.webp";
import thumbsUp from "../assets/resource/Emojis/thumbs-up.webp";

interface Props {
    rating: number;
}

const Emoji = ({ rating }: Props) => {
    if (rating < 3) return null;

  return (
    <>
      <img
        src={rating === 5 ? bullsEye : rating === 60 ? thumbsUp : meh}
        width="25"
      />
    </>
  );
};

export default Emoji;
