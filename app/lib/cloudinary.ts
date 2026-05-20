export type CldOptions = {
  width?: number;
  height?: number;
};

export function cld(url: string, opts: CldOptions = {}): string {
  if (!url || !url.includes("res.cloudinary.com")) return url;
  const w = opts.width ?? 1600;
  const transform = opts.height
    ? `f_auto,q_auto,w_${w},h_${opts.height},c_fill`
    : `f_auto,q_auto,w_${w}`;
  if (/\/upload\/[^/]+\/v\d+\//.test(url)) {
    return url.replace(/\/upload\/[^/]+\/(v\d+\/)/, `/upload/${transform}/$1`);
  }
  return url.replace(/\/upload\/(v\d+\/)/, `/upload/${transform}/$1`);
}
