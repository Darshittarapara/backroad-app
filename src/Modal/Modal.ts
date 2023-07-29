import { Icon, IconDefinition } from "@fortawesome/fontawesome-svg-core";
interface ClassNameType {
className?: string
}
export interface ImageProps extends ClassNameType {
    width: number;
    height: number;
    src: string
    alt: string
}

export interface NavLinksProps extends ClassNameType {
activeClassName: string;
url: string;
title: string
}

export interface IconProps extends ClassNameType {
icon: IconDefinition;
onClick: Function;
reDirectLink?: string
}

export interface ContentTitleProps extends ClassNameType{
 headingNeed: string;
 title: string
}

export interface ParagraphProps extends ClassNameType {
texts: string[]
}
export interface ButtonProps extends ClassNameType {
    onClick: Function;
    buttonText: string;
    type: "reset" | "button" | "submit";
    hasShowAll?: boolean
}