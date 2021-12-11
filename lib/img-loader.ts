import { ImageLoaderProps } from 'next/image';

export const defaultLoader = ({ src, width, quality }: ImageLoaderProps) => src;
