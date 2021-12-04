export const getRichTextFragment = (field: string) => `${field} { json }`;

export const getImageFragment = (field: string) => `${field} {
  url
}`;
