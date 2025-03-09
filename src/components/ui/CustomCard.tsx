
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface CustomCardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

const CustomCard = forwardRef<HTMLDivElement, CustomCardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-white/80 backdrop-blur-sm dark:bg-black/50 rounded-lg border border-border/30 shadow-sm overflow-hidden transition-all hover:shadow-md",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CustomCard.displayName = "CustomCard";

export { CustomCard };

export interface CustomCardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const CustomCardHeader = forwardRef<HTMLDivElement, CustomCardHeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("p-4 flex flex-col space-y-1.5", className)}
        {...props}
      />
    );
  }
);

CustomCardHeader.displayName = "CustomCardHeader";

export { CustomCardHeader };

export interface CustomCardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string;
}

const CustomCardTitle = forwardRef<HTMLParagraphElement, CustomCardTitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={cn("font-semibold leading-none tracking-tight", className)}
        {...props}
      />
    );
  }
);

CustomCardTitle.displayName = "CustomCardTitle";

export { CustomCardTitle };

export interface CustomCardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string;
}

const CustomCardDescription = forwardRef<
  HTMLParagraphElement,
  CustomCardDescriptionProps
>(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
});

CustomCardDescription.displayName = "CustomCardDescription";

export { CustomCardDescription };

export interface CustomCardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const CustomCardContent = forwardRef<HTMLDivElement, CustomCardContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("p-4 pt-0", className)}
        {...props}
      />
    );
  }
);

CustomCardContent.displayName = "CustomCardContent";

export { CustomCardContent };

export interface CustomCardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const CustomCardFooter = forwardRef<HTMLDivElement, CustomCardFooterProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("p-4 border-t border-border/30", className)}
        {...props}
      />
    );
  }
);

CustomCardFooter.displayName = "CustomCardFooter";

export { CustomCardFooter };
