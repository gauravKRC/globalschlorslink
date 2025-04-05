import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const myComponentVariants = cva(
    "base-styles",
    {
        variants: {
            backgroundColor: { // Renamed color to backgroundColor
                primary: "text-red-500 bg-teal-800",
                secondary: "text-gray-500 bg-gray-100",
            },
            size: {
                small: "px-2 py-1 text-sm",
                medium: "px-4 py-2 text-base",
                large: "px-6 py-3 text-lg",
            },
        },
        defaultVariants: {
            backgroundColor: "primary", // updated to backgroundColor
            size: "medium",
        },
    }
);

export interface MyComponentProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof myComponentVariants> { }

const MyComponent = React.forwardRef<HTMLDivElement, MyComponentProps>(
    ({ className, backgroundColor, size, ...props }, ref) => { // updated to backgroundColor
        return (
            <div
                className={cn(myComponentVariants({ backgroundColor, size, className }))} // updated to backgroundColor
                ref={ref}
                {...props}
            />
        );
    }
);

MyComponent.displayName = "MyComponent";

export { MyComponent };