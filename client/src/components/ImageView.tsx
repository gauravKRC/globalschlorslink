import { AspectRatio } from "@/components/ui/aspect-ratio"
import { PICS } from "@/components/ui/urls"

function ImageView() {

    return (
        <div className="grid gap-4">
            {PICS.map((pic, index) => (
                <div key={index} className="w-[450px] mb-4 ">
                    <AspectRatio ratio={16 / 9}>
                        <img
                            src={pic}
                            alt={`Image ${index + 1}`}
                            className="rounded-md object-cover"
                        />
                    </AspectRatio>
                </div>
            ))}
        </div>
    )
}

export default ImageView
