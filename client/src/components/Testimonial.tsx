// components/Testimonial.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface TestimonialProps {
    name: string;
    quote: string;
    imageUrl: string;
    title: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, quote, imageUrl, title }) => {
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center space-x-4">
                    <Avatar className="w-12 h-12">
                        <AvatarImage src={imageUrl} alt={name} />
                    </Avatar>
                    <div>
                        <CardTitle>{name}</CardTitle>
                        <p className="text-sm text-gray-500">{title}</p>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <p className="text-gray-700 italic">"{quote}"</p>
            </CardContent>
        </Card>
    );
};

export default Testimonial;